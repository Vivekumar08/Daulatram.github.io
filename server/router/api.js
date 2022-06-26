const express = require('express');
const router = express.Router();
// const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');
// const jwt = require("jsonwebtoken")
const User = require('../models/adminSchema');
const Adminssion = require('../models/Admission/onlineAdmission');
const helpdesk = require('../models/Admission/helpdeskAdmission');



router.get('/getdata', async (req, res,) => {
  // res.send(`Hello World from the server`);
  const details = await User.find()
  res.status(200).json(details)
});

router.post('/NewAdmin', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const { Username, Password } = req.body;
    console.log(req.body);

    if (!Username || !Password) {
      return res.status(400).json({ error: "Fill the complete form" });
    }

    const hashedPassword = await bcrypt.hash(Password,salt)

    const user = new User({Username:Username,Password:hashedPassword});
    await user.save();
    console.log("Form filled Successfully")
    return res.status(200).json({ message: "Form filled Successfully " })
  } catch (err) {
    console.log(err)
  }
});
router.post('/AdminLogin', async (req, res) => {
  try {
    const { Username, Password } = req.body
    console.log(req.body);
    if (!Username || !Password) {
      return res.status(400).json({ error: "Fill the Admin Login Form Properly" })
    }
    const UserLogin = await User.findOne({ Username: Username })
    if (UserLogin) {
      const isMatch = await bcrypt.compare(Password, UserLogin.Password);
      if (!isMatch) {
        console.log("Invalid Credentials")
        res.status(402).json({ error: "Invalid Credentials" })
      } else {
        console.log("Signin Successfull")
        res.status(200).json({ message: "user Signin Sucessfully" })
        await UserLogin.save()
      }
    } else {
      console.log("Login Failed")
      res.status(401).json({ error: "Login Failed" })
    }
  } catch (err) {
    console.log(err);
  }

})

router.delete('/delete/:id', async (req, res) => {
  const delete_user = await User.findOneAndDelete({ _id: req.params.id });
  res.send(delete_user + "User deleted")
})

router.get('/admission', async (req, res,) => {
  // res.send(`Hello World from the server`);
  const details = await Adminssion.find()
  res.status(200).json(details)
});

router.post('/admission_online', async (req, res) => {
  const { Link, Caption } = req.body
  if (!Link || !Caption) {
      return res.status(400).json({ error: "Fill the Admission Details Properly" })
  }
  const user = new Adminssion(req.body );
  await user.save();
  console.log("Details Saved Successfully")
  return res.status(200).json({ message: "Details Saved Successfully " })
})

router.post('/helpdesk_admission', async (req, res) => {
  const { Link, Caption } = req.body
  if (!Link || !Caption) {
      return res.status(400).json({ error: "Fill the Admission Details Properly" })
  }
  const user = new helpdesk(req.body );
  await user.save();
  console.log("Details Saved Successfully")
  return res.status(200).json({ message: "Details Saved Successfully " })
})

module.exports = router;