require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

app.use(express.json());

app.use(
  express.static(path.join(ROOT_DIR, "public"), {
    extensions: ["html"],
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true" || Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

let transporter = null;

if (smtpConfig.host && smtpConfig.auth.user && smtpConfig.auth.pass) {
  transporter = nodemailer.createTransport(smtpConfig);
  transporter.verify().catch((error) => {
    console.error("[email] falha ao verificar as credenciais SMTP:", error);
  });
} else {
  console.warn("[email] Configurações SMTP não definidas. O envio de e-mails não funcionará.");
}

function escapeHtml(input = "") {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

app.post("/api/report-payment", async (req, res) => {
  if (!transporter) {
    return res.status(500).json({
      message:
        "Configuração de e-mail indisponível. Entre em contato diretamente pelo e-mail informado no site.",
    });
  }

  const { name, email, pixReference, message } = req.body ?? {};

  if (!name || !email) {
    return res.status(400).json({ message: "Informe seu nome e e-mail para prosseguir." });
  }

  const notifyEmail = process.env.NOTIFY_EMAIL || process.env.SMTP_USER;

  if (!notifyEmail) {
    return res.status(500).json({
      message:
        "Configuração de notificação não encontrada. Entre em contato diretamente pelo e-mail informado no site.",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Landing Page AWS" <${process.env.SMTP_USER}>`,
      to: notifyEmail,
      subject: "Novo pagamento aguardando validação (ebook AWS)",
      replyTo: email,
      html: `
        <h2>Novo potencial cliente do ebook</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail informado:</strong> ${escapeHtml(email)}</p>
        ${
          pixReference
            ? `<p><strong>ID do pagamento / mensagem:</strong> ${escapeHtml(pixReference)}</p>`
            : "<p><strong>ID do pagamento / mensagem:</strong> não informado</p>"
        }
        ${
          message
            ? `<p><strong>Observações adicionais:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`
            : ""
        }
        <hr/>
        <p>Entre em contato com o cliente para confirmar o Pix e liberar o ebook manualmente.</p>
      `,
    });

    res.json({
      message:
        "Obrigado! Recebemos sua solicitação. Após validar o Pix, enviaremos o ebook por e-mail.",
    });
  } catch (error) {
    console.error("[api/report-payment] erro ao enviar e-mail", error);
    res
      .status(500)
      .json({ message: "Não foi possível enviar sua mensagem. Tente novamente mais tarde." });
  }
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(ROOT_DIR, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
