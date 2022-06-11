const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
// const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const User = require('../models/adminSchema');

function dispatch_emails(Name, Email, Subject, Message) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    requireTLS: true,
    auth: {
      user: "quizletvivek@gmail.com", // generated ethereal user
      pass: "vivek@quizlet01", // generated ethereal password
    },
  });

  var MailOptions = {
    from: `"New Contact Info" <quizletvivek@gmail.com>`, // sender address
    to: `vivekumar2003bsr@gmail.com, ${Email}`, // list of receivers
    subject: "New User Contact from portfolio site", // Subject line
    text: "Name: " + Name + "\nEmail: " + Email + "\nSubject: " + Subject + "\nMessage: " + Message, // plain text body
    // html: "<b>Hello world?</b>", // html body
  }

  // send mail with defined transport object
  transporter.sendMail(MailOptions, function (error, info) {
    if (error) {
      console.log("Mail does not sent : ", error);
    } else {
      console.log("Message sent: %s", info.response);
    }
  });
}

router.get('/getdata', async (req, res,) => {
  // res.send(`Hello World from the server`);
  const details = await User.find()
  res.status(200).json(details)
});

router.post('/site', async (req, res) => {
  try {
    const { Name, Email, Subject, Message } = req.body;
    console.log(req.body);

    if (!Name || !Email || !Subject || !Message) {
      return res.status(400).json({ error: "Fill the complete form" });
    }
    const userExist = await User.findOne({ Email: Email });
    if (userExist) {
      return res.status(400).json({ error: "You have already submit the form" })
    } else {

      const user = new User(req.body);
      dispatch_emails(user.Name, user.Email, user.Subject, user.Message);
      await user.save();
      console.log("Form filled Successfully")
      return res.status(200).json({ message: "Form filled Successfully " })
    }
  }catch (err) {
  console.log(err)
}
});

router.delete('/delete/:id', async (req, res) => {
  const delete_user = await User.findOneAndDelete({ _id: req.params.id });
  res.send(delete_user + "User deleted")
})

module.exports = router;