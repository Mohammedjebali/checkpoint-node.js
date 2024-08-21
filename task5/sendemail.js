const nodemailer=require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'enawinsialaoy@gmail.com',
      pass: 'fchl dvoy pude izfx'
    }
  });
  
  var mailOptions = {
    from: 'enawinsialaoy@gmail.com',
    to: 'saidbouchniba8@gmail.com',
    cc:'hene.ferjani@gmail.com',
    subject: 'welcome to our website',
    html: `<h1>hello guys</h1>
    <img src="https://pyxis.nymag.com/v1/imgs/bc9/5bb/95f88f06973066c75f07b98ed8af7f634a-18-pepe-the-frog.rsocial.w1200.jpg">
    <p>welcome to our website</p>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });