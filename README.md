# Email Service 

<p align="justify">

Este projeto foi desenvolvido para fins didáticos, baseado na live da Fernanda Kipper: [Live Coding: Criando aplicação NODE JS do ZERO](https://www.youtube.com/watch?v=GVF--Rl3bP4&t=4314s).

O projeto original foi criado por [Fernanda Kipper](https://github.com/Fernanda-Kipper) e [Guilherme Vahl](https://github.com/guivahl) como parte da disciplina de Banco de Dados Avançado (UFPel). O objetivo é demonstrar o uso do **Redis** como *Message Broker* para gerenciar disparos de e-mails em lote de forma eficiente.
</p>

## Projeto original
[Serviço de Disparo de Emails](https://github.com/Fernanda-Kipper/email-service-backend.git)

## 🔄 Alterações nesta versão
<p align="justify">
Diferente da aplicação original que utilizava o AWS SDK (SES), esta versão utiliza o <strong>Nodemailer</strong>. Essa mudança foi feita para permitir o uso de ferramentas de SMTP gratuitas, facilitando o teste e o aprendizado sem custos.

Este projeto é um clone do repositório redis-dba, com algumas adições de funcionalidades.
</p>

## Tecnologias utilizadas

- [Redis](https://redis.io/)
- [NodeJs](https://nodejs.org/)
    - [Bull](https://github.com/OptimalBits/bull)
    - [Nodemailer](https://nodemailer.com/)

## Front-end da Aplicação

- [membership-frontend](https://github.com/Fernanda-Kipper/membership-frontend)

## Como execultar o front-end

1. Clone o repositório

    ```
    git clone https://github.com/Fernanda-Kipper/membership-frontend
    ```

2. Navegue até a pasta do projeto

    ```
    cd membership-frontend
    ```

3. Instale as dependencias

    ```
    npm install
    ```

4. Rode o projeto com o comando 

    ```
    npm run dev
    ```

## Como executar

1. Clone o repositório

    ```
    https://github.com/Dev-Joao-Medeiros/email
    ```

2. Entre na pasta

   ```
    cd nome-do-repositorio
   ```

3. Instale os pacotes utilizando o comando

   ```
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e insira suas credenciais de SMTP. Utilize o arquivo `.env.example` como base.

5. Rode o projeto com o comando

   ```
   npm start
   ```

### Exemplo de SMTP gratuito

Você pode usar um provedor com plano gratuito, como Mailtrap ou Brevo, informando no `.env` os dados do servidor SMTP fornecido por eles.
