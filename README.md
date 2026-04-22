# Email Service Backend

Este projeto foi desenvolvido para fins didáticos com base na live da Fernanda Kipper:
[Live Coding: Criando aplicação Node.js do zero](https://www.youtube.com/watch?v=GVF--Rl3bP4&t=4314s).

O projeto original foi criado por [Fernanda Kipper](https://github.com/Fernanda-Kipper) e [Guilherme Vahl](https://github.com/guivahl).
Nesta versão, o envio de e-mails foi adaptado para usar SMTP com Nodemailer.

## Projeto original

- [Serviço de Disparo de Emails](https://github.com/Fernanda-Kipper/email-service-backend.git)

## O que mudou nesta versão

- Substituição do AWS SES por [Nodemailer](https://nodemailer.com/)
- Uso de SMTP (ex.: Mailtrap, Brevo) para facilitar testes
- Fluxo assíncrono com fila usando [Bull](https://github.com/OptimalBits/bull) + [Redis](https://redis.io/)

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [Bull](https://github.com/OptimalBits/bull)
- [Redis](https://redis.io/)
- [Nodemailer](https://nodemailer.com/)

## Front-end recomendado

- [membership-frontend](https://github.com/Fernanda-Kipper/membership-frontend)

### Como executar o front-end

1. Clone o repositório:

```bash
git clone https://github.com/Fernanda-Kipper/membership-frontend
cd membership-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto:

```bash
npm run dev
```

## Como executar o backend

### Pré-requisitos

- Node.js 18+
- Redis em execução (padrão: 127.0.0.1:6379)

### Passo a passo

1. Clone este repositório:

```bash
git clone https://github.com/Dev-Joao-Medeiros/email-service-backend.git
cd email-service-backend
```

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo .env na raiz, usando .env.example como base:

```env
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_SECURE=false
MAIL_USER=your_mailtrap_user
MAIL_PASS=your_mailtrap_password_or_token
MAIL_FROM=no-reply@example.com
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

4. Inicie o backend:

```bash
npm start
```

Servidor padrão: http://localhost:3200

## Endpoint

### POST /send

Enfileira o envio de e-mail de confirmação de assinatura.

Exemplo de requisição:

```bash
curl -X POST http://localhost:3200/send \
  -H "Content-Type: application/json" \
  -d '{
    "email": "cliente@exemplo.com",
    "firstName": "Joao",
    "lastName": "Silva"
  }'
```

Resposta esperada:

- 200 quando o job é adicionado na fila com sucesso
- 500 em caso de erro interno

## Observações

- O backend usa CORS para origem localhost:5173 (frontend em desenvolvimento).
- O envio de e-mail é processado de forma assíncrona pela fila.
