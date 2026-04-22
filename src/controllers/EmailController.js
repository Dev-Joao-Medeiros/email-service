// front => npm run dev
// back => npm run start
const MailQueue = require("../queue/MailQueue");
const { MAIL_FROM } = require("../config");

async function sendEmail(request, reply){
    const {
        email,
        firstName,
        lastName
    } = request.body

    const templete = `
        Olá ${firstName} ${lastName}, sua assinatura foi confirmada!
        Para acessar seus recursos exclusivos basta clicar aqui!
    `

    try{
        await MailQueue.add({
            to: email,
            from: MAIL_FROM,
            subject: "Assinatura confirmada",
            text: templete
        })
        return reply.code(200).send();   
    }catch{
        return reply.code(500).send("Internal Server Error!")
    }
}

module.exports = {
    sendEmail
}