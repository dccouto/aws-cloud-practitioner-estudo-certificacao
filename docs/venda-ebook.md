## Como vender o ebook com confirmação manual via Pix

A landing page captura os dados de compradores e envia um e-mail para você validar o Pix antes de entregar o ebook manualmente. Siga os passos abaixo.

### 1. Preparar o ambiente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure sua chave Pix real no modal de pagamento (`public/index.html`):
   - Atualize a imagem do QR Code (`src` do `<img>`).
   - Substitua o conteúdo da `<textarea id="pix-code">` pelo código “copia e cola” verdadeiro.
   - Ajuste o e-mail de suporte (`contato@example.com`) para o endereço comercial correto.
3. Opcional: personalize textos, preço (R$ 9,99) e cores na landing page (`public/index.html`, `public/styles.css`).

### 2. Configurar envio de e-mail

O backend usa SMTP para enviar notificações. Duplique o arquivo `.env.example` para `.env` e preencha com os dados do seu provedor (ex.: Gmail, Outlook, Amazon SES):

```
SMTP_HOST=smtp.seuprovedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=usuario@seuprovedor.com
SMTP_PASS=senha-ou-token
NOTIFY_EMAIL=destino@seu-negocio.com
```

- `NOTIFY_EMAIL` é para onde o aviso será enviado (pode ser o mesmo que `SMTP_USER`).
- Se usar Gmail, habilite app password.
- Para port 465, defina `SMTP_SECURE=true`.

### 3. Testar localmente

1. Rode o servidor:
   ```bash
   npm start
   ```
2. Acesse `http://localhost:3000`, preencha o formulário com dados de teste e verifique se o e-mail chega.

### 4. Publicar em produção

- Hospedagem recomendada: serviços que suportam Node.js (Railway, Render, Fly.io, AWS, VPS etc.).
- Defina as variáveis de ambiente com os mesmos valores do `.env`.
- Fique atento ao campo `PORT` exigido pelo provedor.
- Para usar GitHub Pages, publique apenas a pasta `public/` (front-end). O backend deve rodar em outro provedor e a URL do fetch deverá ser atualizada.

### 5. Fluxo de atendimento

1. Cliente paga via Pix usando o QR Code / código “copia e cola”.
2. Ele envia comprovante e dados pelo formulário.
3. Você recebe um e-mail com nome, e-mail, referência do pagamento e observações.
4. Valide o Pix manualmente e envie o ebook (PDF/ZIP) pelo e-mail informado.

### 6. Entrega do ebook

- O repositório contém o arquivo `ebook/guia-aws-cloud-practitioner-2025.zip` (Markdown).
- Gere um PDF oficial com a ferramenta de sua preferência e armazene-o em local seguro.
- Envie o PDF ou pacote desejado diretamente ao cliente após confirmar o pagamento.

### 7. Boas práticas

- Utilize HTTPS na hospedagem.
- Mantenha registro das vendas (planilha ou CRM).
- Atualize depoimentos e suporte conforme receber feedback real.
- Monitore caixa de entrada e configure filtros para não perder notificações.

Com isso, todo pagamento gera um e-mail de aviso e você mantém o controle manual sobre a entrega do ebook. Ajuste o fluxo conforme sua operação crescer (integração com automações, CRM, ferramentas de e-mail marketing etc.).*** End Patch
