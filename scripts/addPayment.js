#!/usr/bin/env node
const path = require("path");
const fs = require("fs").promises;
const crypto = require("crypto");

const PAYMENTS_PATH = path.join(__dirname, "..", "data", "payments.json");

async function loadPayments() {
  try {
    const raw = await fs.readFile(PAYMENTS_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function savePayments(data) {
  await fs.writeFile(PAYMENTS_PATH, JSON.stringify(data, null, 2));
}

async function main() {
  const args = process.argv.slice(2);
  const params = {};

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      const key = arg.replace(/^--/, "");
      const value = args[i + 1];
      params[key] = value;
      i += 1;
    }
  }

  const email = params.email?.toLowerCase();
  const pix = params.pix ?? null;
  const downloads = Number(params.downloads ?? 3);

  if (!email) {
    console.error("Uso: npm run add-payment -- --email usuario@exemplo.com --pix 123abc [--downloads 3]");
    process.exit(1);
  }

  const payments = await loadPayments();

  const token = crypto.randomBytes(8).toString("hex");

  const record = {
    email,
    token,
    pixReference: pix,
    status: "approved",
    maxDownloads: Number.isNaN(downloads) || downloads <= 0 ? 3 : downloads,
    downloads: 0,
    createdAt: new Date().toISOString(),
  };

  payments.push(record);
  await savePayments(payments);

  console.log("Pagamento aprovado registrado com sucesso!");
  console.log("Compartilhe este código com o cliente após validar o Pix:");
  console.log(`Código de acesso: ${token}`);
}

main().catch((error) => {
  console.error("Erro ao registrar pagamento:", error);
  process.exit(1);
});
