## Checklist para vender o ebook usando Pix + WhatsApp

O projeto agora é 100% estático. O cliente paga via Pix, copia o código “copia e cola” ou escaneia o QR Code e, em seguida, envia o comprovante pelo WhatsApp. Siga este passo a passo para adaptar tudo ao seu negócio.

### 1. Personalize o modal de pagamento (`public/index.html`)

- **QR Code**: substitua a imagem do `<img>` pelo QR Code oficial do seu Pix (pode usar um link hospedado ou um arquivo local).
- **Código “copia e cola”**: cole o código real dentro da `<textarea id="pix-code">`.
- **E-mail de suporte**: troque `contato@example.com` pelo e-mail comercial que aparecerá como contato.
- **Link do WhatsApp**: atualize `https://wa.me/55SEUNUMERO?...` com o DDD + número do atendimento e ajuste a mensagem pré-preenchida, se quiser.

> Dica: a mensagem do WhatsApp usa codificação de URL (espaços viram `%20`). Gere o texto usando um encoder online ou edite manualmente.

### 2. Ajuste textos e preço

- O preço padrão é R$ 9,99. Caso mude, atualize todos os trechos do site (botão principal, modal, sessões de bônus etc.).
- Revise depoimentos, estatísticas e provas sociais para refletir resultados reais dos seus clientes.

### 3. Publicar o site

Como o site é estático, basta disponibilizar a pasta `public/`:

- **GitHub Pages**: publique o conteúdo de `public/` em um branch `gh-pages`.
- **Vercel / Netlify / Render (static)**: defina a pasta `public/` como diretório de publicação.
- **Hospedagem própria**: envie os arquivos via FTP ou use um bucket com website hosting.

Para testar localmente:
```bash
npm install
npm start
```
O comando `npm start` utiliza `npx serve public` e abre o site em `http://localhost:3000`.

### 4. Fluxo de atendimento

1. Cliente acessa a landing page e realiza o Pix com o QR Code ou código “copia e cola”.
2. Ele clica no botão de WhatsApp, envia o comprovante e informa nome/e-mail.
3. Você valida o pagamento e entrega o ebook manualmente (e-mail, link privado, Google Drive etc.).

### 5. Boas práticas

- Tenha uma resposta pronta no WhatsApp com o link de entrega do ebook.
- Use etiquetas do WhatsApp Business ou uma planilha para controlar status de cada venda (pago, ebook enviado, dúvidas).
- Atualize QR Code e código Pix periodicamente para evitar expiração.
- Se quiser automações no futuro (chatbot, e-mail marketing, checkouts), este front pode ser integrado a outras plataformas.

Com esse fluxo, você controla todo o processo sem backend, apenas com Pix e WhatsApp. Ajuste conforme o volume de vendas aumentar.
