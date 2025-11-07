## Como vender o ebook com controle de acesso via Pix

Este guia explica como configurar a landing page, validar pagamentos e liberar o download do ebook apenas para quem pagou via Pix.

### 1. Preparar o ambiente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Defina a chave Pix real substituindo o texto de exemplo no arquivo `public/index.html`:
   - Atualize a URL do QR Code (`src`).
   - Cole o código “copia e cola” verdadeiro dentro da `<textarea id="pix-code">`.
   - Ajuste o e-mail de suporte (`contato@example.com`) para o endereço comercial que receberá comprovantes.

3. Opcional: personalize cores, textos e preço na landing page (`public/index.html` e `public/styles.css`).

### 2. Executar a landing page

Inicie o servidor em ambiente local:
```bash
npm start
```
O site ficará disponível em `http://localhost:3000`.

Para publicar em produção (VPS, EC2, Railway, Render etc.), certifique-se de:
- Configurar a variável de ambiente `PORT` (se o provedor exigir).
- Manter a pasta `ebook/` inacessível diretamente pelo servidor web (express já faz isso).

### 3. Registrar pagamentos confirmados

1. Após receber e validar o comprovante Pix, gere um código de acesso para o cliente:
   ```bash
   npm run add-payment -- --email cliente@exemplo.com --pix 1234567890 --downloads 3
   ```
   - `--email`: obrigatoriamente o e-mail informado pelo cliente.
   - `--pix`: identificação do pagamento (opcional, mas útil para auditoria).
   - `--downloads`: limite de downloads permitidos (padrão: 3).

2. O comando grava um registro em `data/payments.json` e retorna o código de acesso:
   ```
   Código de acesso: ab12cd34
   ```

3. Envie este código ao cliente por e-mail. Ele deverá informar o **mesmo e-mail** e o **código de acesso** no formulário da landing page para liberar o download.

### 4. Fluxo do cliente

1. Cliente clica em “Comprar agora”, realiza o Pix e envia o comprovante por e-mail.
2. Você valida o pagamento e gera o código com `npm run add-payment`.
3. Cliente abre novamente o modal na landing page, preenche e-mail + código, e o download é liberado.
4. Cada download consome 1 contador; ao atingir o limite (`maxDownloads`), o código expira automaticamente.

### 5. Arquivo do ebook

- O arquivo entregue é `ebook/guia-aws-cloud-practitioner-2025.zip` (contém a versão Markdown).
- Substitua por um PDF oficial, se preferir:
  1. Gere o PDF por `pandoc`, Google Docs ou outra ferramenta.
  2. Salve-o como `ebook/guia-aws-cloud-practitioner-2025.pdf`.
  3. Atualize `server.js`, alterando `EBOOK_FILENAME` para o novo arquivo.

### 6. Segurança e boas práticas

- Faça backup periódico de `data/payments.json`, pois ele é o registro de quem comprou.
- Use HTTPS em produção (configuração do provedor ou proxy reverso).
- Troque a chave Pix e tokens QR periodicamente.
- Atualize depoimentos e prova social conforme coletar feedbacks reais.

### 7. Suporte e customização

- Textos da landing page: `public/index.html`.
- Estilos visuais: `public/styles.css`.
- Lógica de download e rate limit: `server.js`.
- Script de geração de tokens: `scripts/addPayment.js`.

Com isso, o ebook só é liberado para quem possui um código de acesso gerado após a confirmação do pagamento via Pix. Ajuste o fluxo conforme a escala do seu negócio (ex.: integrar com automações de e-mail, CRM ou automação da confirmação Pix).*** End Patch
