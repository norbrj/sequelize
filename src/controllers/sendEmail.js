const nodemailer = require("nodemailer");

module.exports = {
  async sendEmail(req, res) {
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mol@smce.com.br",
        pass: "70Conectar",
      },
    });

    const mailOptions = {
      from: "marcos.csc@smce.com.br", // sender address
      to: req.body.email, //"norbrj@gmail.com", // receiver (use array of string for a list)
      subject: "Matricula On-line - Criação de conta nova", // Subject line
      html: `<p>Olá ${req.body.nome},<br><br>Seu pedido de registro foi realizado com sucesso.<br>
            Seu e-mail para o acesso é: ${req.body.email}<br>Por favor, clique no link abaixo para 
            criar sua senha para o seu acesso à Matrícula On-Line.<br>Esse link irá expirar em 12 horas.
            <br><br><br><br>
            <a href="https://localhost:3333/ativa?token=${req.body.chave}">Clique aqui para ativação</a><br><br>
            Obrigado !</p>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        res.json({ error: err });
      } else {
        console.log(info);
        res.json({ info: info });
      }
    });
  },
};
