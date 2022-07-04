const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require("fs")
const { promisify } = require("util")
const router = express.Router();
const bcrypt = require('bcryptjs');
// const jwt = require("jsonwebtoken")
const User = require('../models/adminSchema');
const Adminssion = require('../models/Admission/onlineAdmission');
const helpdesk = require('../models/Admission/helpdeskAdmission');
const File = require("../models/Research/Research_fac_Schema");
const Soc = require('../models/Societies/Societies_Schema');
const Bulletin = require('../models/Admission/AdmissionBulletin_Schema');
const Guidelines = require('../models/Admission/Admission_guidelines_Schema');
const Ragging = require('../models/Admission/Anti_Ragging_Schema');
const Training = require('../models/Academics/Training_Schema')
const U_Acad_Cal = require('../models/Academics/U_Acad_Cal_Schema')
const C_Acad_Cal = require('../models/Academics/C_Acad_Cal_Schema')
const Teacher = require('../models/Academics/Teacher_Schema')

const unlinkAsync = promisify(fs.unlink)

// SET STORAGE
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, '../daulatram/public/images/uploads');
    },
    filename(req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
      // cb(null, file.fieldname + '-' + Date.now());
    }
  }),
  limits: {
    // max file size 1MB = 1000000 bytes
    fileSize: 100000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
        )
      );
    }
    cb(undefined, true);
  }
});



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

    const hashedPassword = await bcrypt.hash(Password, salt)

    const user = new User({ Username: Username, Password: hashedPassword });
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

// Admission

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
  const user = new Adminssion(req.body);
  await user.save();
  console.log("Details Saved Successfully")
  return res.status(200).json({ message: "Details Saved Successfully " })
})
router.delete('/deleteAdmission/:id', async (req, res) => {
  const delete_user = await Adminssion.findOneAndDelete({ _id: req.params.id });
  res.status(200).json(delete_user + "User deleted")
})

// Ragging

router.get('/Anti_Ragging', async (req, res,) => {
  // res.send(`Hello World from the server`);
  const details = await Ragging.find()
  res.status(200).json(details)
});

router.post(
  '/admission_Anti_Ragging',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, link } = req.body;
      const { path, mimetype } = req.file;
      const file = new Ragging({
        title,
        link,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(402).send(error.message);
    }
  }
);

router.delete('/deleteAntiRagging/:id', async (req, res) => {
  // console.log(Ragging)
  const delete_user = await Ragging.findByIdAndDelete({ _id: req.params.id }
  );
  await unlinkAsync(delete_user.file_path)
  res.status(200).json(delete_user + "User deleted")
})

// Guidelines

router.get('/guidelines_admission', async (req, res,) => {
  const details = await Guidelines.find()
  res.status(200).json(details)
});
router.delete('/delete_admission_guidelines/:id', async (req, res) => {
  const delete_user = await Guidelines.findOneAndDelete({ _id: req.params.id });
  await unlinkAsync(delete_user.file_path)
  res.status(200).json(delete_user + "User deleted")
})

router.post(
  '/guidelines_add',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, link } = req.body;
      const { path, mimetype } = req.file;
      const file = new Guidelines({
        title,
        link,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(402).send(error.message);
    }
  }
);

// Bulletin

router.get('/bulletin', async (req, res,) => {
  const details = await Bulletin.find()
  res.status(200).json(details)
});
router.delete('/delete_admissionbulletin/:id', async (req, res) => {
  const delete_user = await Bulletin.findOneAndDelete({ _id: req.params.id });
  await unlinkAsync(delete_user.file_path)
  res.status(200).json(delete_user + "User deleted")
})

router.post(
  '/bulletin_add',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, link } = req.body;
      const { path, mimetype } = req.file;
      const file = new Bulletin({
        title,
        link,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(402).send(error.message);
    }
  }
);

// Academics Training

router.get('/Training_', async (req, res,) => {
  const details = await Training.find()
  res.status(200).json(details)
});
router.delete('/delete_academicsTraings/:id', async (req, res) => {
  const delete_user = await Training.findOneAndDelete({ _id: req.params.id });
  await unlinkAsync(delete_user.file_path)
  res.status(200).json(delete_user + "User deleted")
})

router.post(
  '/Academics_Training_add',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, link } = req.body;
      const { path, mimetype } = req.file;
      const file = new Training({
        title,
        link,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(402).send(error.message);
    }
  }
);
// Teacher-In Charge

router.get('/Teacher_In_Charge', async (req, res,) => {
  const details = await Teacher.find()
  res.status(200).json(details)
});
router.delete('/delete_Teacher_In_Charge/:id', async (req, res) => {
  const delete_user = await Teacher.findOneAndDelete({ _id: req.params.id });
  await unlinkAsync(delete_user.file_path)
  res.status(200).json(delete_user + "User deleted")
})

router.post(
  '/Teacher_In_Charge_add',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, link } = req.body;
      const { path, mimetype } = req.file;
      const file = new Teacher({
        title,
        link,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(402).send(error.message);
    }
  }
);
// College Academics Calendar

router.get('/C_Acad_Cal', async (req, res,) => {
  const details = await C_Acad_Cal.find()
  res.status(200).json(details)
});
router.delete('/delete_C_Acad_Cal/:id', async (req, res) => {
  const delete_user = await C_Acad_Cal.findOneAndDelete({ _id: req.params.id });
  await unlinkAsync(delete_user.file_path)
  res.status(200).json(delete_user + "User deleted")
})

router.post(
  '/C_Acad_Cal_add',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, link } = req.body;
      const { path, mimetype } = req.file;
      const file = new C_Acad_Cal({
        title,
        link,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(402).send(error.message);
    }
  }
);

// University Academics Calendar

router.get('/U_Acad_Cal', async (req, res,) => {
  const details = await U_Acad_Cal.find()
  res.status(200).json(details)
});
router.delete('/delete_U_Acad_Cal/:id', async (req, res) => {
  const delete_user = await U_Acad_Cal.findOneAndDelete({ _id: req.params.id });
  await unlinkAsync(delete_user.file_path)
  res.status(200).json(delete_user + "User deleted")
})

router.post(
  '/U_Acad_Cal_add',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, link } = req.body;
      const { path, mimetype } = req.file;
      const file = new U_Acad_Cal({
        title,
        link,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(402).send(error.message);
    }
  }
);


// Helpdesk

router.get('/helpdesk', async (req, res,) => {
  const details = await helpdesk.find()
  res.status(200).json(details)
});

router.post('/helpdesk_admission', async (req, res) => {
  const { Link, Caption } = req.body
  if (!Link || !Caption) {
    return res.status(400).json({ error: "Fill the Helpdesk Details Properly" })
  }
  const user = new helpdesk(req.body);
  await user.save();
  console.log("Details Saved Successfully")
  return res.status(200).json({ message: "Details Saved Successfully " })
})
router.delete('/deleteHelpdesk/:id', async (req, res) => {
  const delete_user = await helpdesk.findOneAndDelete({ _id: req.params.id });
  res.status(200).json(delete_user + "User deleted")
})

// Research
router.delete('/delete_research_fac/:id', async (req, res) => {
  const delete_user = await File.findOneAndDelete({ _id: req.params.id });
  await unlinkAsync(delete_user.file_path)
  res.status(200).json(delete_user + "User deleted")
})

router.get('/research', async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

router.post(
  '/research_upload',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, description } = req.body;
      const { path, mimetype } = req.file;
      console.log(title,
        description,
        // path,
        // mimetype
      )
      const file = new File({
        title,
        description,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(402).send(error.message);
    }
  }
);

router.get('/research_download/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

// Societies
router.delete('/delete_Socities/:id', async (req, res) => {
  const delete_user = await Soc.findOneAndDelete({ _id: req.params.id });
  await unlinkAsync(delete_user.file_path)
  res.status(200).json(delete_user + "User deleted")
})

router.get('/Socitie', async (req, res) => {
  try {
    const files = await Soc.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

router.post(
  '/Soc',
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, link } = req.body;
      const { path, mimetype } = req.file;
      const file = new Soc({
        title,
        link,
        file_path: path,
        file_mimetype: mimetype
      });
      await file.save();
      res.send('file uploaded successfully.');
    } catch (error) {
      res.status(400).send('Error while uploading file. Try again later.');
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(402).send(error.message);
    }
  }
);

module.exports = router;