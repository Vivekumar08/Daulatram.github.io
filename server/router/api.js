const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require("fs")
const { promisify } = require("util")
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto')
const url = require('url');
require('dotenv').config()
const nodemailer = require('nodemailer')
    // const jwt = require("jsonwebtoken")
const User = require('../models/adminSchema');
const Adminssion = require('../models/Admission/onlineAdmission');
const helpdesk = require('../models/Admission/helpdeskAdmission');
const File = require("../models/Research/Research_fac_Schema");
const Publications = require("../models/Research/Publications_Schema");
const Soc = require('../models/Societies/Societies_Schema');
const Bulletin = require('../models/Admission/AdmissionBulletin_Schema');
const Guidelines = require('../models/Admission/Admission_guidelines_Schema');
const Ragging = require('../models/Admission/Anti_Ragging_Schema');
const Training = require('../models/Academics/Training_Schema')
const U_Acad_Cal = require('../models/Academics/U_Acad_Cal_Schema')
const C_Acad_Cal = require('../models/Academics/C_Acad_Cal_Schema')
const Teacher = require('../models/Academics/Teacher_Schema')
const Feedback = require('../models/StaffZone/Feedback_Form_Schema')
const Roster = require('../models/StaffZone/Roster_Schema')
const Student_forms = require('../models/StudentZone/StudentZone_foms_Schema')
const Bio_Faculty = require('../models/Academics/Departments/Biochemistry/Bio_Faculty_Schema');
const Com_Faculty = require('../models/Academics/Departments/Commerce/Com_fac_Schema');
const Hist_Faculty = require("../models/Academics/Departments/History/Hist_Faculty_Schema");
const Bot_Faculty = require('../models/Academics/Departments/Botany/Bot_Faculty_Schema');
const Math_Faculty = require("../models/Academics/Departments/Mathematics/Math_fac_schema");
const Physics_Faculty = require('../models/Academics/Departments/Physics/Physics_Faculty_Schema');
const Political_Science_Faculty = require('../models/Academics/Departments/Political_Science/Political_Science_Faculty_Schema');


const unlinkAsync = promisify(fs.unlink)

// SET STORAGE
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '../daulatram/public/images/uploads');
    },
    filename(req, file, cb) {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
        // cb(null, file.fieldname + '-' + Date.now());
    }
})
const upload = multer({
    storage: storage,
    limits: {
        // max file size 100MB = 100000000 bytes
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

// Admin
router.get('/getdata', async(req, res, ) => {
    // res.send(`Hello World from the server`);
    const details = await User.find()
    res.status(200).json(details)
});
router.get('/resetData', async(req, res, ) => {
    const tok = req.query.resetPasswordToken


    const details = await User.findOne({
            resetPasswordToken: tok,
            // resetPasswordExpires: { $gt: Date.now(), },

        })
        // console.log(details.resetPasswordToken)
        // console.log(details)
    if (!details) {
        console.log('password reset link is invalid')
        res.status(400).json('password reset link is invalid')
    } else {
        const exp = details.resetPasswordExpires
        const diff = exp - Date.now()
            // console.log(exp)

        if (diff > 0) {
            res.status(200).json({
                username: details.Username,
                message: 'password reset link a-ok'
            })
        } else {
            // console.log('password reset link has expired')
            res.status(400).json('password reset link has expired')

        }
    }
});

router.put('/updatePasswordViaEmail', async(req, res, ) => {
    try {
        // console.log(req.body)
        const { Username, Password } = req.body;

        const details = await User.findOne({
            Username: Username
        })
        if (details) {
            const salt = await bcrypt.genSalt()

            // console.log('User exists in the database')
            const hashedPassword = await bcrypt.hash(Password, salt)
            const data = await details.updateOne({ Password: hashedPassword, resetPasswordToken: null, resetPasswordExpires: null });
            if (data) {
                // console.log('password updated');
                res.status(200).json({ message: "password updated" })
            } else {
                // console.log("Password can't be update")
                res.status(403).json("Password can't be update")
            }

        } else {
            // console.log('no user exists in db to update')
            res.status(404).json('no user exists in db to update')
        }
    } catch (err) {
        console.log("err")
    }
});

router.post('/NewAdmin', async(req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const { Username, Email, Password } = req.body;
        console.log(req.body);

        if (!Username || !Email || !Password) {
            return res.status(400).json({ error: "Fill the complete form" });
        }

        const hashedPassword = await bcrypt.hash(Password, salt)

        const user = new User({ Username: Username, Email: Email, Password: hashedPassword });
        await user.save();
        // console.log("Form filled Successfully")
        return res.status(200).json({ message: "Form filled Successfully " })
    } catch (err) {
        console.log("err")
    }
});

router.post('/forgotEmail', async(req, res) => {
    try {
        const { Email } = req.body
        if (!Email) {
            return res.status(400).json('email required');
        }
        const user = await User.findOne({ Email: Email })
        if (!user) {
            return res.status(401).json('email not in the database')
        } else {
            const token = crypto.randomBytes(20).toString('hex')
            const up = await user.updateOne({
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() + 3600000,
            });
            if (up) {

                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: `${process.env.EMAIL_ADDRESS}`, // generated ethereal user
                        pass: `${process.env.EMAIL_PSSWD}`, // generated ethereal password
                    },
                });

                const mailOptions = {
                    from: ` "Recovery Email for Daulatram Admin" <${process.env.EMAIL_ADDRESS}>`,
                    to: `${Email}`,
                    Subject: "Link to Reset Password",
                    text: "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
                        'Please click on the following link, or paste this into your browser to complete the process within 10 mins of receiving it:\n\n' +
                        `http://localhost:3000/reset/${token}\n\n` +
                        `This link is valid only upto 10 mins\n\n` +
                        'If you did not request this, please ignore this email and your password will remain unchanged'
                };

                console.log("Sending email.....")

                transporter.sendMail(mailOptions, (err, response) => {
                    if (err) {
                        console.log("There was an error: ", err)
                    } else {
                        console.log("There you Go: ", response)
                        return res.status(200).json('Recovery email sent')
                    }
                })
            } else {
                console.log("Unable to give token ")
            }
        }
    } catch (err) {
        console.log(" External err")

    }
})

router.post('/AdminLogin', async(req, res) => {
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

router.delete('/delete/:id', async(req, res) => {
    const delete_user = await User.findOneAndDelete({ _id: req.params.id });
    res.send(delete_user + "User deleted")
})

// Admission

router.get('/admission', async(req, res, ) => {
    // res.send(`Hello World from the server`);
    const details = await Adminssion.find()
    res.status(200).json(details)
});

router.post('/admission_online', async(req, res) => {
    const { Link, Caption } = req.body
    if (!Link || !Caption) {
        return res.status(400).json({ error: "Fill the Admission Details Properly" })
    }
    const user = new Adminssion(req.body);
    await user.save();
    console.log("Details Saved Successfully")
    return res.status(200).json({ message: "Details Saved Successfully " })
})
router.delete('/deleteAdmission/:id', async(req, res) => {
    const delete_user = await Adminssion.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(delete_user + "User deleted")
})


// Feedback Form Staff Zone

router.get('/feedback', async(req, res, ) => {
    // res.send(`Hello World from the server`);
    const details = await Feedback.find()
    res.status(200).json(details)
});

router.post('/StaffZone_feedback', async(req, res) => {
    const { Link, Caption, text } = req.body
    if (!Link || !Caption) {
        return res.status(400).json({ error: "Fill the Admission Details Properly" })
    }
    const user = new Feedback(req.body);
    await user.save();
    console.log("Details Saved Successfully")
    return res.status(200).json({ message: "Details Saved Successfully " })
})
router.delete('/deletefeedback/:id', async(req, res) => {
    const delete_user = await Feedback.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(delete_user + "User deleted")
})

// Ragging

router.get('/Anti_Ragging', async(req, res, ) => {
    // res.send(`Hello World from the server`);
    const details = await Ragging.find()
    res.status(200).json(details)
});

router.post(
    '/admission_Anti_Ragging',
    upload.single('file'),
    async(req, res) => {
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

router.delete('/deleteAntiRagging/:id', async(req, res) => {
    // console.log(Ragging)
    const delete_user = await Ragging.findByIdAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

// Guidelines

router.get('/guidelines_admission', async(req, res, ) => {
    const details = await Guidelines.find()
    res.status(200).json(details)
});
router.delete('/delete_admission_guidelines/:id', async(req, res) => {
    const delete_user = await Guidelines.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/guidelines_add',
    upload.single('file'),
    async(req, res) => {
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

// Staff Roster

router.get('/Staff_Roster', async(req, res, ) => {
    const details = await Roster.find()
    res.status(200).json(details)
});
router.delete('/delete_Staff_Roster/:id', async(req, res) => {
    const delete_user = await Roster.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Staff_Roster_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Roster({
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

router.get('/bulletin', async(req, res, ) => {
    const details = await Bulletin.find()
    res.status(200).json(details)
});
router.delete('/delete_admissionbulletin/:id', async(req, res) => {
    const delete_user = await Bulletin.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/bulletin_add',
    upload.single('file'),
    async(req, res) => {
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

router.get('/Training_', async(req, res, ) => {
    const details = await Training.find()
    res.status(200).json(details)
});
router.delete('/delete_academicsTraings/:id', async(req, res) => {
    const delete_user = await Training.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Academics_Training_add',
    upload.single('file'),
    async(req, res) => {
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
// Student-Zone Forms

router.get('/StudentZone_forms', async(req, res, ) => {
    const details = await Student_forms.find()
    res.status(200).json(details)
});
router.delete('/delete_StudentZone_forms/:id', async(req, res) => {
    const delete_user = await Student_forms.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === 'text/link') {
        console.log(delete_user.file_mimetype)
        res.status(200).json(delete_user + "User deleted")
    } else {
        console.log(delete_user.file_mimetype)
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    }
})
router.post('/StudentZone_forms_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new Student_forms({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
router.post(
    '/StudentZone_forms_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Student_forms({
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

router.get('/Teacher_In_Charge', async(req, res, ) => {
    const details = await Teacher.find()
    res.status(200).json(details)
});
router.delete('/delete_Teacher_In_Charge/:id', async(req, res) => {
    const delete_user = await Teacher.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Teacher_In_Charge_add',
    upload.single('file'),
    async(req, res) => {
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

router.get('/C_Acad_Cal', async(req, res, ) => {
    const details = await C_Acad_Cal.find()
    res.status(200).json(details)
});
router.delete('/delete_C_Acad_Cal/:id', async(req, res) => {
    const delete_user = await C_Acad_Cal.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/C_Acad_Cal_add',
    upload.single('file'),
    async(req, res) => {
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

router.get('/U_Acad_Cal', async(req, res, ) => {
    const details = await U_Acad_Cal.find()
    res.status(200).json(details)
});
router.delete('/delete_U_Acad_Cal/:id', async(req, res) => {
    const delete_user = await U_Acad_Cal.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/U_Acad_Cal_add',
    upload.single('file'),
    async(req, res) => {
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

router.get('/helpdesk', async(req, res, ) => {
    const details = await helpdesk.find()
    res.status(200).json(details)
});

router.post('/helpdesk_admission', async(req, res) => {
    const { Link, Caption } = req.body
    if (!Link || !Caption) {
        return res.status(400).json({ error: "Fill the Helpdesk Details Properly" })
    }
    const user = new helpdesk(req.body);
    await user.save();
    console.log("Details Saved Successfully")
    return res.status(200).json({ message: "Details Saved Successfully " })
})
router.delete('/deleteHelpdesk/:id', async(req, res) => {
    const delete_user = await helpdesk.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(delete_user + "User deleted")
})

// Research
router.post('/delete_research_fac/:id', async(req, res) => {
    const delete_user = await File.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id })
            // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted")
    } else {
        res.status(400).json("First Delete all the images related to this section")
    }
})
router.post('/delete_img_research_fac/:id', async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await File.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1)
    res.status(200).json(delete_user + "User deleted")

})

router.get('/research', async(req, res) => {
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
    async(req, res) => {
        try {
            // console.log(req.body)
            const { title, description } = req.body;
            const file = new File({
                title: title,
                description: description,
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);
router.post(
    '/research_img_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path,mimetype)
            const dat = await File.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.file_path": { file_path1: path, file_mimetype1: mimetype } } });
            // console.log(dat)
            if (dat) {
                res.status(200).send('file uploaded successfully.');
            }
        } catch (error) {
            // console.log(error)
            res.status(400).send('Error while uploading file. Try again later.');
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get('/research_download/:id', async(req, res) => {
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

// Biochemistry Faculty
router.post('/delete_bio_faculty/:id', async(req, res) => {
    const delete_user = await Bio_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path
    const img = delete_user.img_data.file_path
        // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id })
            await unlinkAsync(img[0].file_path1)
            res.status(200).json(delete_user + "User deleted")
        } else {
            console.log("Unsuccessfully deleted")
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id })
        await unlinkAsync(img[0].file_path1)
        await unlinkAsync(pdf[0].pdf_path1)
        res.status(200).json("File Deleted")
    }
})

router.get('/bio_faculty', async(req, res) => {
    try {
        const files = await Bio_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/bio_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bio_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
            if (data) {
                // console.log(dat)
                res.status(200).send('file uploaded successfully.');
            } else {
                res.status(401).send('Unable to upload CV, No data found');

            }
            // console.log(dat)
        } catch (error) {
            console.log(error)
            res.status(402).send('Error while uploading file. Try again later.');
        }
    }
);

router.post(
    '/bio_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Bio_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false }
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get('/bio_faculty_download/:id', async(req, res) => {
    try {
        const file = await Bio_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
// Botany Faculty
router.post('/delete_bot_faculty/:id', async(req, res) => {
    const delete_user = await Bot_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path
    const img = delete_user.img_data.file_path
        // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id })
            await unlinkAsync(img[0].file_path1)
            res.status(200).json(delete_user + "User deleted")
        } else {
            console.log("Unsuccessfully deleted")
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id })
        await unlinkAsync(img[0].file_path1)
        await unlinkAsync(pdf[0].pdf_path1)
        res.status(200).json("File Deleted")
    }
})

router.get('/bot_faculty', async(req, res) => {
    try {
        const files = await Bot_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/bot_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bot_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
            if (data) {
                // console.log(dat)
                res.status(200).send('file uploaded successfully.');
            } else {
                res.status(401).send('Unable to upload CV, No data found');

            }
            // console.log(dat)
        } catch (error) {
            console.log(error)
            res.status(402).send('Error while uploading file. Try again later.');
        }
    }
);

router.post(
    '/bot_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Bot_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false }
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get('/bot_faculty_download/:id', async(req, res) => {
    try {
        const file = await Bot_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});

//History Faculty
router.post('/delete_Hist_faculty/:id', async(req, res) => {
    const delete_user = await Hist_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path
    const img = delete_user.img_data.file_path
        // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id })
            await unlinkAsync(img[0].file_path1)
            res.status(200).json(delete_user + "User deleted")
        } else {
            console.log("Unsuccessfully deleted")
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id })
        await unlinkAsync(img[0].file_path1)
        await unlinkAsync(pdf[0].pdf_path1)
        res.status(200).json("File Deleted")
    }
})

router.get('/Hist_faculty', async(req, res) => {
    try {
        const files = await Hist_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/Hist_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Hist_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
            if (data) {
                // console.log(dat)
                res.status(200).send('file uploaded successfully.');
            } else {
                res.status(401).send('Unable to upload CV, No data found');

            }
            // console.log(dat)
        } catch (error) {
            console.log(error)
            res.status(402).send('Error while uploading file. Try again later.');
        }
    }
);

router.post(
    '/Hist_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Hist_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false }
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get('/Hist_faculty_download/:id', async(req, res) => {
    try {
        const file = await Hist_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
//Mathematics faculty
router.post('/delete_Math_faculty/:id', async(req, res) => {
    const delete_user = await Math_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path
    const img = delete_user.img_data.file_path
        // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id })
            await unlinkAsync(img[0].file_path1)
            res.status(200).json(delete_user + "User deleted")
        } else {
            console.log("Unsuccessfully deleted")
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id })
        await unlinkAsync(img[0].file_path1)
        await unlinkAsync(pdf[0].pdf_path1)
        res.status(200).json("File Deleted")
    }
})

router.get('/Math_faculty', async(req, res) => {
    try {
        const files = await Math_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/Math_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Math_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
            if (data) {
                // console.log(dat)
                res.status(200).send('file uploaded successfully.');
            } else {
                res.status(401).send('Unable to upload CV, No data found');

            }
            // console.log(dat)
        } catch (error) {
            console.log(error)
            res.status(402).send('Error while uploading file. Try again later.');
        }
    }
);

router.post(
    '/Math_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Math_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false }
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get('/Math_faculty_download/:id', async(req, res) => {
    try {
        const file = await Math_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});

// Physics Faculty
router.post('/delete_Physics_fac/:id', async(req, res) => {
    const delete_user = await Physics_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path
    const img = delete_user.img_data.file_path
        // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id })
            await unlinkAsync(img[0].file_path1)
            res.status(200).json(delete_user + "User deleted")
        } else {
            console.log("Unsuccessfully deleted")
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id })
        await unlinkAsync(img[0].file_path1)
        await unlinkAsync(pdf[0].pdf_path1)
        res.status(200).json("File Deleted")
    }
})

router.get('/Physics_faculty', async(req, res) => {
    try {
        const files = await Physics_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/Physics_fac_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Physics_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
            if (data) {
                // console.log(dat)
                res.status(200).send('file uploaded successfully.');
            } else {
                res.status(401).send('Unable to upload CV, No data found');

            }
            // console.log(dat)
        } catch (error) {
            console.log(error)
            res.status(402).send('Error while uploading file. Try again later.');
        }
    }
);

router.post(
    '/Physics_fac_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Physics_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false }
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get('/Physics_fac_download/:id', async(req, res) => {
    try {
        const file = await Physics_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
// Political Science Faculty
router.post('/delete_Political_Science_faculty/:id', async(req, res) => {
    const delete_user = await Political_Science_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path
    const img = delete_user.img_data.file_path
        // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id })
            await unlinkAsync(img[0].file_path1)
            res.status(200).json(delete_user + "User deleted")
        } else {
            console.log("Unsuccessfully deleted")
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id })
        await unlinkAsync(img[0].file_path1)
        await unlinkAsync(pdf[0].pdf_path1)
        res.status(200).json("File Deleted")
    }
})

router.get('/Political_Science_faculty', async(req, res) => {
    try {
        const files = await Political_Science_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/Political_Science_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Political_Science_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
            if (data) {
                // console.log(dat)
                res.status(200).send('file uploaded successfully.');
            } else {
                res.status(401).send('Unable to upload CV, No data found');

            }
            // console.log(dat)
        } catch (error) {
            console.log(error)
            res.status(402).send('Error while uploading file. Try again later.');
        }
    }
);

router.post(
    '/Political_Science_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Physics_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false }
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get('/Political_Science_Faculty_download/:id', async(req, res) => {
    try {
        const file = await Political_Science_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});


// Commerce Faculty
router.post('/delete_com_faculty/:id', async(req, res) => {
    const delete_user = await Com_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path
    const img = delete_user.img_data.file_path
        // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id })
            await unlinkAsync(img[0].file_path1)
            res.status(200).json(delete_user + "User deleted")
        } else {
            console.log("Unsuccessfully deleted")
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id })
        await unlinkAsync(img[0].file_path1)
        await unlinkAsync(pdf[0].pdf_path1)
        res.status(200).json("File Deleted")
    }
})

router.get('/com_faculty', async(req, res) => {
    try {
        const files = await Com_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/com_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            console.log(path, mimetype)
            const data = await Com_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
            if (data) {
                // console.log(dat)
                res.status(200).send('file uploaded successfully.');
            } else {
                res.status(401).send('Unable to upload CV, No data found');

            }
            // console.log(dat)
        } catch (error) {
            console.log(error)
            res.status(402).send('Error while uploading file. Try again later.');
        }
    }
);

router.post(
    '/com_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Com_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false }
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get('/com_faculty_download/:id', async(req, res) => {
    try {
        const file = await Com_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
// Publications
router.delete('/delete_Publications_res/:id', async(req, res) => {
    const delete_user = await Publications.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.get('/Publications_res', async(req, res) => {
    try {
        const files = await Publications.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});

router.post(
    '/Publications_res_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description } = req.body;
            const { path, mimetype } = req.file;
            const file = new Publications({
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

router.get('/Publications_res_download/:id', async(req, res) => {
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
router.delete('/delete_Socities/:id', async(req, res) => {
    const delete_user = await Soc.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.get('/Socitie', async(req, res) => {
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
    async(req, res) => {
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