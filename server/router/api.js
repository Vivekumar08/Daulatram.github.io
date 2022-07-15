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
const Fee_Structure = require('../models/Admission/Fee_Structure_Schema');
const Admission_FAQs = require('../models/Admission/Fee_Structure_Schema');
const Admission_Grievance = require('../models/Admission/Admission_Grievance_Schema');
const Admission_comm = require('../models/Admission/Admission_comm_Schema');
const helpdesk = require('../models/Admission/helpdeskAdmission');
const GE_Options = require('../models/Admission/GE_Options_Schema');
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
const Staff_Forms = require('../models/StaffZone/Staff_Forms_Schema')
const Bio_Faculty = require('../models/Academics/Departments/Biochemistry/Bio_Faculty_Schema');
const Com_Faculty = require('../models/Academics/Departments/Commerce/Com_fac_Schema');
const Hist_Faculty = require("../models/Academics/Departments/History/Hist_Faculty_Schema");
const Music_Faculty = require("../models/Academics/Departments/Music/Music_Faculty_Schema");
const Bot_Faculty = require('../models/Academics/Departments/Botany/Bot_Faculty_Schema');
const Math_Faculty = require("../models/Academics/Departments/Mathematics/Math_fac_schema");
const Physics_Faculty = require('../models/Academics/Departments/Physics/Physics_Faculty_Schema');
const Eco_Faculty = require('../models/Academics/Departments/Economics/Eco_Faculty_Schema');
const philo_Faculty = require('../models/Academics/Departments/Philosophy/philo_Faculty_Schema');
const Eng_Faculty = require('../models/Academics/Departments/English/Eng_Faculty_Schema');
const Political_Science_Faculty = require('../models/Academics/Departments/Political_Science/Political_Science_Faculty_Schema');
const NHE_Faculty = require('../models/Academics/Departments/NHE/NHE_Faculty_Schema');
const Hin_Faculty = require('../models/Academics/Departments/Hindi/Hin_Faculty_Schema');
const Bio_ProgramOffered = require("../models/Academics/Departments/Biochemistry/Bio_ProgramsOffered_Schema")
const Bio_Awards = require("../models/Academics/Departments/Biochemistry/Awards_Schema")
const Chem_Faculty = require('../models/Academics/Departments/Chemistry/Chem_Faculty_Schema');
const Psychology_Faculty = require('../models/Academics/Departments/Psychology/Psychology_Faculty_Schema');
const Zoology_Faculty = require('../models/Academics/Departments/Zoology/Zoology_Faculty_Schema');
// const Sanskrit_Faculty = require('../models/Academics/Departments/Psychology/Sanskrit_Faculty_Schema');
const Bot_ProgramOffered = require("../models/Academics/Departments/Botany/Bot_ProgramsOffered_Schema")
const Bot_Awards = require("../models/Academics/Departments/Botany/Awards_Schema")

const Chem_ProgramOffered = require("../models/Academics/Departments/Chemistry/Chem_ProgramsOffered_Schema")
const Chem_Awards = require("../models/Academics/Departments/Chemistry/Awards_Schema")
const Com_ProgramOffered = require("../models/Academics/Departments/Commerce/Com_ProgramsOffered_Schema")
const Com_Awards = require("../models/Academics/Departments/Commerce/Awards_Schema")
const Eco_ProgramOffered = require("../models/Academics/Departments/Economics/Eco_ProgramsOffered_Schema")
const Eco_Awards = require("../models/Academics/Departments/Economics/Awards_Schema")
const Eng_ProgramOffered = require("../models/Academics/Departments/English/Eng_ProgramsOffered_Schema")
const Eng_Awards = require("../models/Academics/Departments/English/Awards_Schema")
const Hin_ProgramOffered = require("../models/Academics/Departments/Hindi/Hin_ProgramsOffered_Schema")
const Hin_Awards = require("../models/Academics/Departments/Hindi/Awards_Schema")
const PE_ProgramOffered = require("../models/Academics/Departments/Physical_Education/PE_ProgramsOffered_Schema")
const PE_Awards = require("../models/Academics/Departments/Physical_Education/PE_Awards_Schema")
const PE_Fac = require("../models/Academics/Departments/Physical_Education/PE_Fac_Schema")
const Physics_ProgramOffered = require("../models/Academics/Departments/Physics/Physics_ProgramsOffered_Schema")
const Physics_Awards = require("../models/Academics/Departments/Physics/Physics_Awards_Schema")
const PolSci_ProgramOffered = require("../models/Academics/Departments/Political_Science/PolSci_ProgramsOffered_Schema")
const PolSci_Awards = require("../models/Academics/Departments/Political_Science/PolSci_Awards_Schema")
const Psychology_ProgramOffered = require("../models/Academics/Departments/Psychology/Psychology_ProgramsOffered_Schema")
const Psychology_Awards = require("../models/Academics/Departments/Psychology/Psychology_Awards_Schema")
const Sanskrit_ProgramOffered = require("../models/Academics/Departments/Sanskrit/Sanskrit_Programsoffered_Schema")
const Sanskrit_Awards = require("../models/Academics/Departments/Sanskrit/Sanskrit_Awards_Schema")
const Zoology_ProgramOffered = require("../models/Academics/Departments/Zoology/Zoology_Programsoffered_Schema")
const Zoology_Awards = require("../models/Academics/Departments/Zoology/Zoology_Awards_Schema");
const Hist_ProgramOffered = require("../models/Academics/Departments/History/Hist_ProgramsOffered_Schema")
const Hist_Awards = require("../models/Academics/Departments/History/Awards_Schema");
const Math_ProgramOffered = require("../models/Academics/Departments/Mathematics/Math_ProgramsOffered_Schema")
const Math_Awards = require("../models/Academics/Departments/Mathematics/Awards_Schema");
const NHE_ProgramOffered = require("../models/Academics/Departments/NHE/NHE_ProgramsOffered_Schema")
const Physics_Events = require("../models/Academics/Departments/Physics/Physics_Events_Schema")
const Sanskrit_Events = require("../models/Academics/Departments/Sanskrit/Sanskrit_Events_Schema")
const Zoology_Events = require("../models/Academics/Departments/Zoology/Zoology_Events_Schema")
const Physics_Stuachieve = require("../models/Academics/Departments/Physics/Physics_Stuachieve_Schema")
const Sanskrit_Stuachieve = require("../models/Academics/Departments/Sanskrit/Sanskrit_Stuachieve_Schema")
const Zoology_Stuachieve = require("../models/Academics/Departments/Zoology/Zoology_Stuachieve_Schema")
const Physics_Publications = require("../models/Academics/Departments/Physics/Physics_Publications_Schema")
const PS_Publications = require("../models/Academics/Departments/Political_Science/PS_Publications_Schema")
const Sanskrit_Publications = require("../models/Academics/Departments/Sanskrit/Sanskrit_Publications_Schema")
    // const Zoology_Publications = require("../models/Academics/Departments/Zoology/Zoology_Publications_Schema")





// const NHE_Awards = require("../models/Academics/Departments/NHE/Awards_Schema");
const Philo_ProgramOffered = require("../models/Academics/Departments/Philosophy/Philo_ProgramsOffered_Schema")

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

// Guidelines

router.get('/guidelines_admission', async(req, res, ) => {
    const details = await Guidelines.find()
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
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
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
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
// BioChemistry Program Offered

router.get('/Bio_ProgramOffered', async(req, res, ) => {
    const details = await Bio_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Bio_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Bio_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Bio_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bio_ProgramOffered({
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
// BioChemistry Awards

router.get('/Bio_Awards', async(req, res, ) => {
    const details = await Bio_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Bio_Awards/:id', async(req, res) => {
    const delete_user = await Bio_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
});
router.post(
    '/Bio_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bio_Awards({
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
//maths prog

router.get('/Math_ProgramOffered', async(req, res, ) => {
    const details = await Math_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Math_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Math_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Math_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Math_ProgramOffered({
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
// Maths Awards

router.get('/Math_Awards', async(req, res, ) => {
    const details = await Math_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Math_Awards/:id', async(req, res) => {
    const delete_user = await Math_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
});
router.post(
    '/Math_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Math_Awards({
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

//NHEs prog

router.get('/NHE_ProgramOffered', async(req, res, ) => {
    const details = await NHE_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_NHE_ProgramOffered/:id', async(req, res) => {
    const delete_user = await NHE_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/NHE_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new NHE_ProgramOffered({
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
// NHEs Awards

// router.get('/NHE_Awards', async (req, res,) => {
//     const details = await NHE_Awards.find()
//     res.status(200).json(details)
// });
// router.delete('/delete_NHE_Awards/:id', async (req, res) => {
//     const delete_user = await NHE_Awards.findOneAndDelete({ _id: req.params.id });
//     await unlinkAsync(delete_user.file_path)
//     res.status(200).json(delete_user + "User deleted")
// });
// router.post(
//     '/NHE_Awards_add',
//     upload.single('file'),
//     async (req, res) => {
//         try {
//             const { title, link } = req.body;
//             const { path, mimetype } = req.file;
//             const file = new NHE_Awards({
//                 title,
//                 link,
//                 file_path: path,
//                 file_mimetype: mimetype
//             });
//             await file.save();
//             res.send('file uploaded successfully.');
//         } catch (error) {
//             res.status(400).send('Error while uploading file. Try again later.');
//         }
//     },
//     (error, req, res, next) => {
//         if (error) {
//             res.status(402).send(error.message);
//         }
//     }
// );

//Philosophy prog

router.get('/Philo_ProgramOffered', async(req, res, ) => {
    const details = await Philo_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Philo_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Philo_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Philo_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Philo_ProgramOffered({
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

//history prog
router.get('/Hist_ProgramOffered', async(req, res, ) => {
    const details = await Hist_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Hist_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Hist_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Hist_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hist_ProgramOffered({
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
// History Awards

router.get('/Hist_Awards', async(req, res, ) => {
    const details = await Hist_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Hist_Awards/:id', async(req, res) => {
    const delete_user = await Hist_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})
router.post(
    '/Hist_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hist_Awards({
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


// Commerce Program Offered

router.get('/Com_ProgramOffered', async(req, res, ) => {
    const details = await Com_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Com_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Com_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Com_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Com_ProgramOffered({
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
// Commerce Awards

router.get('/Com_Awards', async(req, res, ) => {
    const details = await Com_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Com_Awards/:id', async(req, res) => {
        const delete_user = await Com_Awards.findOneAndDelete({ _id: req.params.id });
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    })
    // Chemistry Program Offered

router.get('/Chem_ProgramOffered', async(req, res, ) => {
    const details = await Chem_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Chem_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Chem_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Chem_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Chem_ProgramOffered({
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
// Chemistry Awards

router.get('/Chem_Awards', async(req, res, ) => {
    const details = await Chem_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Chem_Awards/:id', async(req, res) => {
    const delete_user = await Chem_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})
router.post(
    '/Chem_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Chem_Awards({
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
// Botany Program Offered

router.get('/Bot_ProgramOffered', async(req, res, ) => {
    const details = await Bot_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Bot_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Bot_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Bot_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bot_ProgramOffered({
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
// Botany Awards

router.get('/Bot_Awards', async(req, res, ) => {
    const details = await Bot_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Bot_Awards/:id', async(req, res) => {
    const delete_user = await Bot_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Bot_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bot_Awards({
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

// Physical_Education Program offered


router.get('/PE_ProgramOffered', async(req, res, ) => {
    const details = await PE_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_PE_ProgramOffered/:id', async(req, res) => {
    const delete_user = await PE_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/PE_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PE_ProgramOffered({
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
// Physics Program offered


router.get('/Physics_ProgramOffered', async(req, res, ) => {
    const details = await Physics_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Physics_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Physics_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Physics_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_ProgramOffered({
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
// Political Science Program offered


router.get('/PolSci_ProgramOffered', async(req, res, ) => {
    const details = await PolSci_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_PolSci_ProgramOffered/:id', async(req, res) => {
    const delete_user = await PolSci_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/PolSci_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PolSci_ProgramOffered({
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
// Psychology Program offered


router.get('/Psychology_ProgramOffered', async(req, res, ) => {
    const details = await Psychology_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Psychology_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Psychology_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Psychology_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Psychology_ProgramOffered({
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
// Sanskrit Program offered


router.get('/Sanskrit_ProgramOffered', async(req, res, ) => {
    const details = await Sanskrit_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Sanskrit_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Sanskrit_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Sanskrit_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_ProgramOffered({
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
// Zoology Program offered


router.get('/Zoology_ProgramOffered', async(req, res, ) => {
    const details = await Zoology_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Zoology_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Zoology_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Zoology_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Zoology_ProgramOffered({
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





// Physical Education Awards



router.get('/PE_Fac', async(req, res, ) => {
    const details = await PE_Fac.find()
    res.status(200).json(details)
});
router.delete('/delete_PE_Fac/:id', async(req, res) => {
    const delete_user = await PE_Fac.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/PE_Fac_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { name, Designation, Qualification, email } = req.body;
            const { path, mimetype } = req.file;
            const file = new PE_Fac({
                name,
                Designation,
                Qualification,
                email,
                file_path: path,
                file_mimetype: mimetype
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            // console.log(error);
            res.status(400).send("Error while uploading data.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Physical Education Awards



router.get('/PE_Awards', async(req, res, ) => {
    const details = await PE_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_PE_Awards/:id', async(req, res) => {
    const delete_user = await PE_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/PE_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PE_Awards({
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


// Physics Awards
router.get('/Physics_Awards', async(req, res, ) => {
    const details = await Physics_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Physics_Awards/:id', async(req, res) => {
    const delete_user = await Physics_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Physics_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Awards({
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
// Physics Events
router.get('/Physics_Events', async(req, res, ) => {
    const details = await Physics_Events.find()
    res.status(200).json(details)
});
router.delete('/delete_Physics_Events/:id', async(req, res) => {
    const delete_user = await Physics_Events.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Physics_Events_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Events({
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
// Sanskrit Events
router.get('/Sanskrit_Events', async(req, res, ) => {
    const details = await Sanskrit_Events.find()
    res.status(200).json(details)
});
router.delete('/delete_Sanskrit_Events/:id', async(req, res) => {
    const delete_user = await Sanskrit_Events.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Sanskrit_Events_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_Events({
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
// Zoology Events
router.get('/Zoology_Events', async(req, res, ) => {
    const details = await Zoology_Events.find()
    res.status(200).json(details)
});
router.delete('/delete_Zoology_Events/:id', async(req, res) => {
    const delete_user = await Zoology_Events.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Zoology_Events_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Zoology_Events({
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
//  Physics Students' Achievements
router.get('/Physics_Stuachieve', async(req, res, ) => {
    const details = await Physics_Stuachieve.find()
    res.status(200).json(details)
});
router.delete('/delete_Physics_Stuachieve/:id', async(req, res) => {
    const delete_user = await Physics_Stuachieve.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Physics_Stuachieve_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Stuachieve({
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


//  Sanskrit Students' Achievements
router.get('/Sanskrit_Stuachieve', async(req, res, ) => {
    const details = await Sanskrit_Stuachieve.find()
    res.status(200).json(details)
});
router.delete('/delete_Sanskrit_Stuachieve/:id', async(req, res) => {
    const delete_user = await Sanskrit_Stuachieve.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Sanskrit_Stuachieve_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_Stuachieve({
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

//  Zoology Students' Achievements
router.get('/Zoology_Stuachieve', async(req, res, ) => {
    const details = await Zoology_Stuachieve.find()
    res.status(200).json(details)
});
router.delete('/delete_Zoology_Stuachieve/:id', async(req, res) => {
    const delete_user = await Zoology_Stuachieve.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Zoology_Stuachieve_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Zoology_Stuachieve({
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
//  Physics Publications
router.get('/Physics_Publications', async(req, res, ) => {
    const details = await Physics_Publications.find()
    res.status(200).json(details)
});
router.delete('/delete_Physics_Publications/:id', async(req, res) => {
    const delete_user = await Physics_Publications.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Physics_Publications_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Publications({
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

//  Political Science Publications
router.get('/PS_Publications', async(req, res, ) => {
    const details = await PS_Publications.find()
    res.status(200).json(details)
});
router.delete('/delete_PS_Publications/:id', async(req, res) => {
    const delete_user = await PS_Publications.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/PS_Publications_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PS_Publications({
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
//  Sanskrit Publications
router.get('/Sanskrit_Publications', async(req, res, ) => {
    const details = await Sanskrit_Publications.find()
    res.status(200).json(details)
});
router.delete('/delete_Sanskrit_Publications/:id', async(req, res) => {
    const delete_user = await Sanskrit_Publications.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Sanskrit_Publications_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_Publications({
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

// //  Zoology Publications
// router.get('/Zoology_Publications', async(req, res, ) => {
//     const details = await Zoology_Publications.find()
//     res.status(200).json(details)
// });
// router.delete('/delete_Zoology_Publications/:id', async(req, res) => {
//     const delete_user = await Zoology_Publications.findOneAndDelete({ _id: req.params.id });
//     await unlinkAsync(delete_user.file_path)
//     res.status(200).json(delete_user + "User deleted")
// })

// router.post(
//     '/Zoology_Publications_add',
//     upload.single('file'),
//     async(req, res) => {
//         try {
//             const { title, link } = req.body;
//             const { path, mimetype } = req.file;
//             const file = new Zoology_Publications({
//                 title,
//                 link,
//                 file_path: path,
//                 file_mimetype: mimetype
//             });
//             await file.save();
//             res.send('file uploaded successfully.');
//         } catch (error) {
//             res.status(400).send('Error while uploading file. Try again later.');
//         }
//     },
//     (error, req, res, next) => {
//         if (error) {
//             res.status(402).send(error.message);
//         }
//     }
// );




// Political Science Awards
router.get('/PolSci_Awards', async(req, res, ) => {
    const details = await PolSci_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_PolSci_Awards/:id', async(req, res) => {
    const delete_user = await PolSci_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/PolSci_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PolSci_Awards({
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



// Psychology Awards



router.get('/Psychology_Awards', async(req, res, ) => {
    const details = await Psychology_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Psychology_Awards/:id', async(req, res) => {
    const delete_user = await Psychology_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Psychology_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Psychology_Awards({
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



// Sanskrit Awards




router.get('/Sanskrit_Awards', async(req, res, ) => {
    const details = await Sanskrit_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Sanskrit_Awards/:id', async(req, res) => {
    const delete_user = await Sanskrit_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Sanskrit_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_Awards({
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

// Zoology Awards




router.get('/Zoology_Awards', async(req, res, ) => {
    const details = await Zoology_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Zoology_Awards/:id', async(req, res) => {
    const delete_user = await Zoology_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Zoology_Awards_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Zoology_Awards({
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
// Admission GE Options

router.get('/GE_Options_admission', async(req, res, ) => {
    const details = await GE_Options.find()
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
});
router.delete('/delete_GE_Options/:id', async(req, res) => {
    const delete_user = await GE_Options.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === 'text/link') {
        console.log(delete_user.file_mimetype)
        res.status(200).json(delete_user + "User deleted")
    } else {
        console.log(delete_user.file_mimetype)
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    }
})
router.post('/GE_Options_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new GE_Options({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
router.post(
    '/GE_Options_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new GE_Options({
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
// Admission FAQs 

router.get('/Admission_FAQs', async(req, res, ) => {
    const details = await Admission_FAQs.find()
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
});
router.delete('/deleteAdmission_FAQs/:id', async(req, res) => {
    const delete_user = await Admission_FAQs.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === 'text/link') {
        console.log(delete_user.file_mimetype)
        res.status(200).json(delete_user + "User deleted")
    } else {
        console.log(delete_user.file_mimetype)
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    }
})
router.post('/Admission_FAQs_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new Admission_FAQs({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
router.post(
    '/Admission_FAQs_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Admission_FAQs({
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
// Admission Committee 

router.get('/Admission_comm', async(req, res, ) => {
    const details = await Admission_comm.find()
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
});
router.delete('/deleteAdmission_comm/:id', async(req, res) => {
    const delete_user = await Admission_comm.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === 'text/link') {
        console.log(delete_user.file_mimetype)
        res.status(200).json(delete_user + "User deleted")
    } else {
        console.log(delete_user.file_mimetype)
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    }
})
router.post('/Admission_comm_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new Admission_comm({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
router.post(
    '/Admission_comm_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Admission_comm({
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
// Admission Grievance Committee 

router.get('/Admission_Grievance_comm', async(req, res, ) => {
    const details = await Admission_Grievance.find()
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
});
router.delete('/deleteAdmission_Grievance_comm/:id', async(req, res) => {
    const delete_user = await Admission_Grievance.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === 'text/link') {
        console.log(delete_user.file_mimetype)
        res.status(200).json(delete_user + "User deleted")
    } else {
        console.log(delete_user.file_mimetype)
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    }
})
router.post('/Admission_Grievance_comm_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new Admission_Grievance({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
router.post(
    '/Admission_Grievance_comm_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Admission_Grievance({
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
// Admission Fee Structure 

router.get('/admission_Fee_Structure', async(req, res, ) => {
    const details = await Fee_Structure.find()
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
});
router.delete('/deleteadmission_Fee_Structure/:id', async(req, res) => {
    const delete_user = await Fee_Structure.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === 'text/link') {
        console.log(delete_user.file_mimetype)
        res.status(200).json(delete_user + "User deleted")
    } else {
        console.log(delete_user.file_mimetype)
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    }
})
router.post('/admission_Fee_Structure_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new Fee_Structure({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
router.post(
    '/admission_Fee_Structure_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Fee_Structure({
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
// Online Admission 

router.get('/admission', async(req, res, ) => {
    const details = await Adminssion.find()
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
});
router.delete('/deleteAdmission/:id', async(req, res) => {
    const delete_user = await Adminssion.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === 'text/link') {
        console.log(delete_user.file_mimetype)
        res.status(200).json(delete_user + "User deleted")
    } else {
        console.log(delete_user.file_mimetype)
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    }
})
router.post('/admission_online_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new Adminssion({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
router.post(
    '/admission_online_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Adminssion({
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

router.get('/Helpdesk', async(req, res, ) => {
    const details = await helpdesk.find()
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
});
router.delete('/deleteHelpdesk/:id', async(req, res) => {
    try {
        const delete_user = await helpdesk.findOneAndDelete({ _id: req.params.id });
        if (delete_user.file_mimetype === 'text/link') {
            console.log(delete_user.file_mimetype)
            res.status(200).json(delete_user + "User deleted")
        } else {
            console.log(delete_user.file_mimetype)
            await unlinkAsync(delete_user.file_path)
            res.status(200).json(delete_user + "User deleted")
        }
    } catch (err) {
        console.log(err)
    }
})
router.post('/helpdesk_admission_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new helpdesk({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
router.post(
    '/helpdesk_admission',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new helpdesk({
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
// Ragging 

router.get('/Anti_Ragging', async(req, res, ) => {
    const details = await Ragging.find()
    if (details.length === 0) {
        res.status(200).json(false)
    } else {
        res.status(200).json(details)
    }
});
router.delete('/deleteAntiRagging/:id', async(req, res) => {
    try {
        const delete_user = await Ragging.findOneAndDelete({ _id: req.params.id });
        if (delete_user.file_mimetype === 'text/link') {
            console.log(delete_user.file_mimetype)
            res.status(200).json(delete_user + "User deleted")
        } else {
            console.log(delete_user.file_mimetype)
            await unlinkAsync(delete_user.file_path)
            res.status(200).json(delete_user + "User deleted")
        }
    } catch (err) {
        console.log(err)
    }
})
router.post('/AntiRagging_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new Ragging({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
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
// Staff Forms

router.get('/StaffZone_forms', async(req, res, ) => {
    const details = await Staff_Forms.find()
    res.status(200).json(details)
});
router.delete('/delete_StaffZone_forms/:id', async(req, res) => {
    const delete_user = await Staff_Forms.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === 'text/link') {
        console.log(delete_user.file_mimetype)
        res.status(200).json(delete_user + "User deleted")
    } else {
        console.log(delete_user.file_mimetype)
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    }
})
router.post('/StaffZone_forms_add_link', async(req, res) => {
    try {
        console.log(req.body)
        const { file, link, title } = req.body
        if (!title || !link || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" })
        }
        const user = new Staff_Forms({ title, link, file_path: file, file_mimetype: 'text/link' });
        await user.save();
        console.log("Details Saved Successfully")
        return res.status(200).json({ message: "Details Saved Successfully " })
    } catch (err) {
        console.log(err)
    }
})
router.post(
    '/StaffZone_forms_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Staff_Forms({
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
// Economics Program Offered

router.get('/Eco_ProgramOffered', async(req, res, ) => {
    const details = await Eco_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Eco_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Eco_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Eco_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eco_ProgramOffered({
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
// Economics Awards

router.get('/Eco_Awards', async(req, res, ) => {
    const details = await Eco_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Eco_Awards/:id', async(req, res) => {
        const delete_user = await Eco_Awards.findOneAndDelete({ _id: req.params.id });
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    })
    // English Program Offered

router.get('/Eng_ProgramOffered', async(req, res, ) => {
    const details = await Eng_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Eng_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Eng_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Eng_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eng_ProgramOffered({
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
// English Awards

router.get('/Eng_Awards', async(req, res, ) => {
    const details = await Eng_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Eng_Awards/:id', async(req, res) => {
        const delete_user = await Eng_Awards.findOneAndDelete({ _id: req.params.id });
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    })
    // Hindi Program Offered

router.get('/Hin_ProgramOffered', async(req, res, ) => {
    const details = await Hin_ProgramOffered.find()
    res.status(200).json(details)
});
router.delete('/delete_Hin_ProgramOffered/:id', async(req, res) => {
    const delete_user = await Hin_ProgramOffered.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path)
    res.status(200).json(delete_user + "User deleted")
})

router.post(
    '/Hin_ProgramOffered_add',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hin_ProgramOffered({
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
// Hindi Awards

router.get('/Hin_Awards', async(req, res, ) => {
    const details = await Hin_Awards.find()
    res.status(200).json(details)
});
router.delete('/delete_Hin_Awards/:id', async(req, res) => {
        const delete_user = await Hin_Awards.findOneAndDelete({ _id: req.params.id });
        await unlinkAsync(delete_user.file_path)
        res.status(200).json(delete_user + "User deleted")
    })
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

// Hindi Faculty
router.post('/delete_hin_faculty/:id', async(req, res) => {
    const delete_user = await Hin_Faculty.findOne({ _id: req.params.id });
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

router.get('/hin_faculty', async(req, res) => {
    try {
        const files = await Hin_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/hin_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Hin_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
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
    '/hin_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Hin_Faculty({
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

router.get('/hin_faculty_download/:id', async(req, res) => {
    try {
        const file = await Hin_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
// English Faculty
router.post('/delete_eng_faculty/:id', async(req, res) => {
    const delete_user = await Eng_Faculty.findOne({ _id: req.params.id });
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

router.get('/eng_faculty', async(req, res) => {
    try {
        const files = await Eng_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/eng_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eng_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
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
    '/eng_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Eng_Faculty({
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

router.get('/eng_faculty_download/:id', async(req, res) => {
    try {
        const file = await Eng_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
//Philosophy
router.post('/delete_philo_faculty/:id', async(req, res) => {
    const delete_user = await philo_Faculty.findOne({ _id: req.params.id });
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

router.get('/philo_faculty', async(req, res) => {
    try {
        const files = await philo_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/philo_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await philo_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
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
    '/philo_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new philo_Faculty({
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

router.get('/philo_faculty_download/:id', async(req, res) => {
    try {
        const file = await philo_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});

//NHE FACULTY
router.post('/delete_NHE_faculty/:id', async(req, res) => {
    const delete_user = await NHE_Faculty.findOne({ _id: req.params.id });
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

router.get('/NHE_faculty', async(req, res) => {
    try {
        const files = await NHE_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/NHE_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await NHE_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
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
    '/NHE_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new NHE_Faculty({
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

router.get('/NHE_faculty_download/:id', async(req, res) => {
    try {
        const file = await NHE_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});

//Music

router.post('/delete_Music_faculty/:id', async(req, res) => {
    const delete_user = await Music_Faculty.findOne({ _id: req.params.id });
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

router.get('/Music_faculty', async(req, res) => {
    try {
        const files = await Music_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/Music_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Music_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
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
    '/Music_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Music_Faculty({
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

router.get('/Music_faculty_download/:id', async(req, res) => {
    try {
        const file = await Music_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
// Economics Faculty
router.post('/delete_eco_faculty/:id', async(req, res) => {
    const delete_user = await Eco_Faculty.findOne({ _id: req.params.id });
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

router.get('/eco_faculty', async(req, res) => {
    try {
        const files = await Eco_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/eco_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eco_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
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
    '/eco_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Eco_Faculty({
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

router.get('/eco_faculty_download/:id', async(req, res) => {
    try {
        const file = await Eco_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
// Chemistry Faculty
router.post('/delete_chem_faculty/:id', async(req, res) => {
    const delete_user = await Chem_Faculty.findOne({ _id: req.params.id });
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

router.get('/chem_faculty', async(req, res) => {
    try {
        const files = await Chem_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/chem_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Chem_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
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
    '/chem_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Chem_Faculty({
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

router.get('/chem_faculty_download/:id', async(req, res) => {
    try {
        const file = await Chem_Faculty.findById(req.params.id);
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
            const file = new Political_Science_Faculty({
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
// Psychology Faculty
router.post('/delete_Psychology_faculty/:id', async(req, res) => {
    const delete_user = await Psychology_Faculty.findOne({ _id: req.params.id });
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

router.get('/Psychology_faculty', async(req, res) => {
    try {
        const files = await Psychology_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/Psychology_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Psychology_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
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
    '/Psychology_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Psychology_Faculty({
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

router.get('/Psychology_Faculty_download/:id', async(req, res) => {
    try {
        const file = await Psychology_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
// Zoology Facultylty
router.post('/delete_Zoology_faculty/:id', async(req, res) => {
    const delete_user = await Zoology_Faculty.findOne({ _id: req.params.id });
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

router.get('/Zoology_faculty', async(req, res) => {
    try {
        const files = await Zoology_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send('Error while getting list of files. Try again later.');
    }
});
router.post(
    '/Zoology_faculty_cv_upload/:id',
    upload.single('file'),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Zoology_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
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
    '/Zoology_faculty_file_upload',
    upload.single('file'),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body
            const { path, mimetype } = req.file
            const file = new Zoology_Faculty({
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

router.get('/Zoology_Faculty_download/:id', async(req, res) => {
    try {
        const file = await Zoology_Faculty.findById(req.params.id);
        res.set({
            'Content-Type': file.file_mimetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Error while downloading file. Try again later.');
    }
});
// // Sanskrit Faculty
// router.post('/delete_Sanskrit_faculty/:id', async(req, res) => {
//     const delete_user = await Sanskrit_Faculty.findOne({ _id: req.params.id });
//     const pdf = delete_user.img_data.pdf_path
//     const img = delete_user.img_data.file_path
//         // console.log()
//     if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
//         if (img[0].file_path1) {
//             await delete_user.deleteOne({ _id: req.params.id })
//             await unlinkAsync(img[0].file_path1)
//             res.status(200).json(delete_user + "User deleted")
//         } else {
//             console.log("Unsuccessfully deleted")
//         }
//     } else {
//         await delete_user.deleteOne({ _id: req.params.id })
//         await unlinkAsync(img[0].file_path1)
//         await unlinkAsync(pdf[0].pdf_path1)
//         res.status(200).json("File Deleted")
//     }
// })

// router.get('/Sanskrit_faculty', async(req, res) => {
//     try {
//         const files = await Sanskrit_Faculty.find({});
//         res.json(files);
//     } catch (error) {
//         res.status(400).send('Error while getting list of files. Try again later.');
//     }
// });
// router.post(
//     '/Sanskrit_faculty_cv_upload/:id',
//     upload.single('file'),
//     async(req, res) => {
//         try {
//             const { path, mimetype } = req.file;
//             // console.log(path, mimetype)
//             const data = await Sanskrit_Faculty.findOneAndUpdate({ _id: req.params.id }, { $set: { "img_data.pdf_path": { pdf_path1: path, pdf_mimetype1: mimetype, value: true } } })
//             if (data) {
//                 // console.log(dat)
//                 res.status(200).send('file uploaded successfully.');
//             } else {
//                 res.status(401).send('Unable to upload CV, No data found');

//             }
//             // console.log(dat)
//         } catch (error) {
//             console.log(error)
//             res.status(402).send('Error while uploading file. Try again later.');
//         }
//     }
// );

// router.post(
//     '/Sanskrit_faculty_file_upload',
//     upload.single('file'),
//     async(req, res) => {
//         try {
//             const { title, description, filter } = req.body
//             const { path, mimetype } = req.file
//             const file = new Sanskrit_Faculty({
//                 title: title,
//                 description: description,
//                 filter: filter,
//                 "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
//                 "img_data.pdf_path": { value: false }
//             });
//             await file.save();
//             res.send('file uploaded successfully.');
//         } catch (error) {
//             // console.log(error)
//             res.status(400).send("Error occur while uploading data");
//         }
//     }
// );

// router.get('/Sanskrit_faculty_download/:id', async(req, res) => {
//     try {
//         const file = await Sanskrit_Faculty.findById(req.params.id);
//         res.set({
//             'Content-Type': file.file_mimetype
//         });
//         res.sendFile(path.join(__dirname, '..', file.file_path));
//     } catch (error) {
//         res.status(400).send('Error while downloading file. Try again later.');
//     }
// });


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