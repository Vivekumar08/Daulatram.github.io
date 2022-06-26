const express = require('express');
const router = express.Router();
// const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken")
const User = require('../models/adminSchema');


router.get('/getdata', async (req, res,) => {
  // res.send(`Hello World from the server`);
  const details = await User.find()
  res.status(200).json(details)
});

router.post('/NewAdmin', async (req, res) => {
  try {
    const { Username, Password } = req.body;
    console.log(req.body);

    if (!Username || !Password) {
      return res.status(400).json({ error: "Fill the complete form" });
    }

    const user = new User(req.body);
    await user.save();
    console.log("Form filled Successfully")
    return res.status(200).json({ message: "Form filled Successfully " })
  } catch (err) {
    console.log(err)
  }
});
router.post('/AdminLogin', async (req, res) => {
  try {
      const { Username, Password  } = req.body
      console.log(req.body);
      if (!Username || !Password) {
          return res.status(400).json({ error: "Fill the Admin Login Form Properly" })
      }
      const UserLogin = await User.findOne({ Username:Username })
      if (UserLogin) {
          const isMatch = await bcrypt.compare(Password, UserLogin.password);
          if (!isMatch) {
              res.status(400).json({ error: "Invalid Credentials" })
          } else {
              res.json({ message: "user Signin Sucessfully" })
              await UserLogin.save()
          }
      } else {
          res.status(401).json({ error: "Login Unsuccessful" })
      }
  } catch (err) {
      console.log(err);
  }

})

router.delete('/delete/:id', async (req, res) => {
  const delete_user = await User.findOneAndDelete({ _id: req.params.id });
  res.send(delete_user + "User deleted")
})

module.exports = router;