var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xxxxxxxxxxx',
    pass: 'xxxxxxxxxxxx'
  }
});

var mailOptions = {
  from: 'sanjusrinath4u@gmail.com',
  to: 'ssrinath.sri@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});