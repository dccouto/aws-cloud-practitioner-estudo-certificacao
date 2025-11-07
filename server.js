const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const PAYMENTS_PATH = path.join(ROOT_DIR, "data", "payments.json");
const EBOOK_FILENAME = "guia-aws-cloud-practitioner-2025.zip";
const EBOOK_PATH = path.join(ROOT_DIR, "ebook", EBOOK_FILENAME);

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

async function loadPayments() {
  try {
    const raw = await fs.readFile(PAYMENTS_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(PAYMENTS_PATH, JSON.stringify([], null, 2));
      return [];
    }
    console.error("[payments] erro ao carregar arquivo", error);
    return [];
  }
}

async function savePayments(data) {
  await fs.writeFile(PAYMENTS_PATH, JSON.stringify(data, null, 2));
}

app.post("/api/check-access", async (req, res) => {
  const { email, token } = req.body ?? {};

  if (!email || !token) {
    return res.status(400).json({ message: "Informe e-mail e código de acesso." });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const sanitizedToken = String(token).trim();

  try {
    const payments = await loadPayments();

    const record = payments.find(
      (item) =>
        item.token === sanitizedToken &&
        item.email === normalizedEmail &&
        item.status === "approved"
    );

    if (!record) {
      return res
        .status(401)
        .json({ message: "Não encontramos um pagamento confirmado para estes dados." });
    }

    if (record.maxDownloads && record.downloads >= record.maxDownloads) {
      return res.status(403).json({
        message: "O limite de downloads para este código foi atingido. Solicite um novo acesso.",
      });
    }

    record.downloads = (record.downloads || 0) + 1;
    record.lastDownloadAt = new Date().toISOString();
    const downloadToken = crypto.randomBytes(16).toString("hex");
    record.lastDownloadToken = downloadToken;
    await savePayments(payments);

    res.json({ downloadUrl: `/api/download?token=${downloadToken}` });
  } catch (error) {
    console.error("[api/check-access] erro inesperado", error);
    res.status(500).json({ message: "Não foi possível validar o pagamento. Tente novamente." });
  }
});

app.get("/api/download", async (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(400).json({ message: "Token de download inválido." });
  }

  try {
    const payments = await loadPayments();
    const record = payments.find(
      (item) => item.lastDownloadToken && item.lastDownloadToken === token
    );

    if (!record) {
      return res.status(401).json({ message: "Token de download expirado ou inválido." });
    }

    record.lastDownloadToken = null;
    await savePayments(payments);

    return res.download(EBOOK_PATH, EBOOK_FILENAME, (error) => {
      if (error) {
        console.error("[api/download] erro ao enviar ebook", error);
        if (!res.headersSent) {
          res.status(500).json({ message: "Falha ao enviar o arquivo. Tente novamente." });
        }
      }
    });
  } catch (error) {
    console.error("[api/download] erro inesperado", error);
    res.status(500).json({ message: "Não foi possível concluir o download." });
  }
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(ROOT_DIR, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
