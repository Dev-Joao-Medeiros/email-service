# redis-dba

Projeto final da cadeira de Banco de dados Avançado realizada no curso de Ciência da Computação na Universidade Federal de Pelotas. Buscamos realizar um estudo de caso com o banco NoSQL Redis, utilizando o mesmo como message broker em um sistema de disparo de e-mails em lote.


## Tecnologias utilizadas

- [Redis](https://redis.io/)
- [NodeJs](https://nodejs.org/)
    - [Bull](https://github.com/OptimalBits/bull)
    - [Nodemailer](https://nodemailer.com/)

## Como executar

1. Clone o repositório e entre na pasta
2. Instale os pacotes utilizando o comando `npm install`
3. Crie um arquivo `.env` na raiz do projeto e insira suas credenciais de SMTP. Utilize o arquivo `.env.example` como base.
4. Rode o projeto com o comando `npm start`

### Exemplo de SMTP gratuito

Você pode usar um provedor com plano gratuito, como Mailtrap ou Brevo, informando no `.env` os dados do servidor SMTP fornecido por eles.
