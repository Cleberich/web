const nodemailer = require("nodemailer");

enviarMail = async () => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "cleberich@gmail.com",
      pass: "caxwrhmgkmroxtuq",
    },
  };
  const mensaje = {
    from: "cleberich@gmail.com",
    to: "cleberich@gmail.com",
    subject: "Correo de prueba",
    text: "envio de correo desde actitud web",
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje);
  console.log(info);
};
