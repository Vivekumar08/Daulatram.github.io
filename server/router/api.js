const express = require("express");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const sanitize = require("mongo-sanitize");
const { promisify } = require("util");
const router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const url = require("url");
require("dotenv").config();
const nodemailer = require("nodemailer");
// const jwt = require("jsonwebtoken")
const User = require("../models/adminSchema");
const Adminssion = require("../models/Admission/onlineAdmission");
const Eresources = require("../models/StudentZone/eResources_Schema");
const Events_and_Activities = require("../models/Events_and_Activities_Schema")
const Accred = require("../models/Accreditation/Accreditation_Schema");
const Fee_Structure = require("../models/Admission/Fee_Structure_Schema");
const Admission_FAQs = require("../models/Admission/Fee_Structure_Schema");
const Admission_Grievance = require("../models/Admission/Admission_Grievance_Schema");
const Admission_comm = require("../models/Admission/Admission_comm_Schema");
const helpdesk = require("../models/Admission/helpdeskAdmission");
const GE_Options = require("../models/Admission/GE_Options_Schema");
const File = require("../models/Research/Research_fac_Schema");
const Publications = require("../models/Research/Publications_Schema");
const Icc = require("../models/StudentZone/ICC_Schema");
const Magz_and_News = require("../models/Research/Magz_and_News_Schema");
const Soc = require("../models/Societies/Societies_Schema");
const Library = require("../models/Library/Library_Schema");
const Bulletin = require("../models/Admission/AdmissionBulletin_Schema");
const Guidelines = require("../models/Admission/Admission_guidelines_Schema");
const Ragging = require("../models/Admission/Anti_Ragging_Schema");
const Training = require("../models/Academics/Training_Schema");
const U_Acad_Cal = require("../models/Academics/U_Acad_Cal_Schema");
const C_Acad_Cal = require("../models/Academics/C_Acad_Cal_Schema");
const Teacher = require("../models/Academics/Teacher_Schema");
const Resources_Innovation = require("../models/Academics/Resources_Innovation_Schema");
const Acad_Facilities = require("../models/Academics/Acad_Facilities_Schema");
const Student_Facilities = require("../models/StudentZone/Student_Facilities_Schema");

const Feedback = require("../models/StaffZone/Feedback_Form_Schema");
const Roster = require("../models/StaffZone/Roster_Schema");
const Founder = require("../models/About_Us/Founder_Schema");
const Chairperson = require("../models/About_Us/Chairperson_Schema");
const Mission = require("../models/About_Us/Mission_Schema");
const Principal = require("../models/About_Us/Principal_Schema");
const Gallery_About = require("../models/About_Us/Gallery_About_Schema");
const VicePrincipal = require("../models/About_Us/VicePrincipal_Schema");
const Student_forms = require("../models/StudentZone/StudentZone_foms_Schema");
const Ethics = require("../models/StaffZone/Ethics_Schema");
const Student_Notice = require("../models/Notices/Student_Notice_Schema");
const Staff_Notice = require("../models/Notices/Staff_Notice_Schema");
const Public_Notice = require("../models/Notices/Public_Notice_Schema");
const Archives_Notice = require("../models/Notices/Archives_Notice_Schema");
const Bulletins_Notice = require("../models/Notices/Bulletin_Schema");
const Staff_Forms = require("../models/StaffZone/Staff_Forms_Schema");
const Senior_list = require("../models/StaffZone/Senior_list_Schema");
const Student_union = require("../models/StudentZone/Student_union_Schema");
const Courses = require("../models/Academics/Courses_Schema");
const Placement_cell = require("../models/StudentZone/Placement_cell_Schema");

const Equal_opp = require("../models/StudentZone/Equal_opp_Schema");
const Bio_Research_fac = require("../models/Academics/Departments/Biochemistry/Bio_Research_fac_Schema");
const Bio_Publications = require("../models/Academics/Departments/Biochemistry/Bio_Publications_Schema");
const Bio_Awards = require("../models/Academics/Departments/Biochemistry/Bio_Awards_Schema");
const Bio_Student_Achieve = require("../models/Academics/Departments/Biochemistry/Bio_Student_Achieve_Schema");
const Bot_Student_Achieve = require("../models/Academics/Departments/Botany/StuAch_Schema");
const Chem_Student_Achieve = require("../models/Academics/Departments/Chemistry/StuAch_Schema");
const Com_Student_Achieve = require("../models/Academics/Departments/Commerce/StuAch_Schema");
const Eco_Student_Achieve = require("../models/Academics/Departments/Economics/StuAch_Schema");
const Eng_Student_Achieve = require("../models/Academics/Departments/English/StuAch_Schema");
const Hin_Student_Achieve = require("../models/Academics/Departments/Hindi/Hin_StuAch_Schema");
const His_Student_Achieve = require("../models/Academics/Departments/History/His_StuAch_Schema");
const Math_Student_Achieve = require("../models/Academics/Departments/Mathematics/Math_StuAch_Schema");
const Music_Student_Achieve = require("../models/Academics/Departments/Music/Music_StuAch_Schema");
const NHE_Student_Achieve = require("../models/Academics/Departments/NHE/NHE_StuAch_Schema");
const Philo_Student_Achieve = require("../models/Academics/Departments/Philosophy/Philo_StuAch_Schema");
const PE_Student_Achieve = require("../models/Academics/Departments/Physical_Education/PE_StuAch_Schema");
const Phy_Student_Achieve = require("../models/Academics/Departments/Physics/Physics_Stuachieve_Schema");
const PS_Student_Achieve = require("../models/Academics/Departments/Political_Science/PS_StuAch_Schema");
const Psy_Student_Achieve = require("../models/Academics/Departments/Psychology/Psy_StuAch_Schema");
const Sans_Student_Achieve = require("../models/Academics/Departments/Sanskrit/Sanskrit_Stuachieve_Schema");
const Zoo_Student_Achieve = require("../models/Academics/Departments/Zoology/Zoology_Stuachieve_Schema");

const Bio_Association = require("../models/Academics/Departments/Biochemistry/Bio_Association_Schema");
const Bio_Faculty = require("../models/Academics/Departments/Biochemistry/Bio_Faculty_Schema");
const Com_Faculty = require("../models/Academics/Departments/Commerce/Com_fac_Schema");
const Hist_Faculty = require("../models/Academics/Departments/History/Hist_Faculty_Schema");
const Music_Faculty = require("../models/Academics/Departments/Music/Music_Faculty_Schema");
const Bot_Faculty = require("../models/Academics/Departments/Botany/Bot_Faculty_Schema");
const Math_Faculty = require("../models/Academics/Departments/Mathematics/Math_fac_schema");
const Physics_Faculty = require("../models/Academics/Departments/Physics/Physics_Faculty_Schema");
const Eco_Faculty = require("../models/Academics/Departments/Economics/Eco_Faculty_Schema");
const philo_Faculty = require("../models/Academics/Departments/Philosophy/philo_Faculty_Schema");
const Eng_Faculty = require("../models/Academics/Departments/English/Eng_Faculty_Schema");
const Eng_Association = require("../models/Academics/Departments/English/Eng_Association_Schema");
const Political_Science_Faculty = require("../models/Academics/Departments/Political_Science/Political_Science_Faculty_Schema");
const NHE_Faculty = require("../models/Academics/Departments/NHE/NHE_Faculty_Schema");
const Hin_Faculty = require("../models/Academics/Departments/Hindi/Hin_Faculty_Schema");
const Bio_ProgramOffered = require("../models/Academics/Departments/Biochemistry/Bio_ProgramsOffered_Schema");
const Bio_Evetns = require("../models/Academics/Departments/Biochemistry/Bio_Evetns_Schema");
const Botany_Events = require("../models/Academics/Departments/Botany/Botany_Events_Schema");
const Phy_Events = require("../models/Academics/Departments/Physics/Phy_Events_Schema");
const Math_Events = require("../models/Academics/Departments/Mathematics/Math_Events_Schema");
const Psychology_Events = require("../models/Academics/Departments/Psychology/Psychology_Events_Schema");
const Philo_Events = require("../models/Academics/Departments/Philosophy/Philo_events_schema");
const PE_Events = require("../models/Academics/Departments/Physical_Education/PE_Events_Schema");
const NHE_Events = require("../models/Academics/Departments/NHE/NHE_Events_Schema");
const Music_Events = require("../models/Academics/Departments/Music/Music_Events_Schema");
const His_Events = require("../models/Academics/Departments/History/His_Events_Schema");
const Hin_Events = require("../models/Academics/Departments/Hindi/Hin_Events_Schema");
const Eng_Events = require("../models/Academics/Departments/English/Eng_Events_Schema");
const Eco_Events = require("../models/Academics/Departments/Economics/Eco_Events_Schema");
const Com_Events = require("../models/Academics/Departments/Commerce/Com_Events_Schema");
const PolSci_Events = require("../models/Academics/Departments/Political_Science/PolSci_Events_Schema");
const Biochem_About = require("../models/Academics/Departments/Biochemistry/About_depart_Schema");
const Bio_Photo_Gallery = require("../models/Academics/Departments/Biochemistry/Bio_Photo_Gallery_Schema");
const Hist_Photo_Gallery = require("../models/Academics/Departments/History/Hist_Photo_Gallery_Schema");
const Bot_Photo_Gallery = require("../models/Academics/Departments/Botany/Bot_Photo_Gallery_Schema");
const Chem_Photo_Gallery = require("../models/Academics/Departments/Chemistry/Chem_Photo_Gallery_Schema");
const Chem_Events = require("../models/Academics/Departments/Chemistry/Chem_Events_Schema");
const Com_Photo_Gallery = require("../models/Academics/Departments/Commerce/Com_Photo_Gallery_Schema");
const Eco_Photo_Gallery = require("../models/Academics/Departments/Economics/Eco_Photo_Gallery_Schema");
const Eng_Photo_Gallery = require("../models/Academics/Departments/English/Eng_Photo_Gallery_Schema");
const Hin_Photo_Gallery = require("../models/Academics/Departments/Hindi/Hin_Photo_Gallery_Schema");
const Music_Photo_Gallery = require("../models/Academics/Departments/Music/Music_Photo_Gallery_Schema");
const Math_Photo_Gallery = require("../models/Academics/Departments/Mathematics/Math_Photo_Gallery_Schema");
const NHE_Photo_Gallery = require("../models/Academics/Departments/NHE/NHE_Photo_Gallery_Schema");
const Philo_Photo_Gallery = require("../models/Academics/Departments/Philosophy/Philo_Photo_Gallery_Schema");
const PE_Gallery = require("../models/Academics/Departments/Physical_Education/PE_Gallery_Schema");
const Physics_Gallery = require("../models/Academics/Departments/Physics/Physics_Gallery_Schema");
const Psychology_Gallery = require("../models/Academics/Departments/Psychology/Psychology_Gallery_Schema");
const Sanskrit_Gallery = require("../models/Academics/Departments/Sanskrit/Sanskrit_Gallery_Schema");
const Zoology_Gallery = require("../models/Academics/Departments/Zoology/Zoology_Gallery_Schema");
const PS_Gallery = require("../models/Academics/Departments/Political_Science/PS_Gallery_Schema");

const Chem_Faculty = require("../models/Academics/Departments/Chemistry/Chem_Faculty_Schema");
const Psychology_Faculty = require("../models/Academics/Departments/Psychology/Psychology_Faculty_Schema");
const Zoology_Faculty = require("../models/Academics/Departments/Zoology/Zoology_Faculty_Schema");
// const Sanskrit_Faculty = require('../models/Academics/Departments/Psychology/Sanskrit_Faculty_Schema');
const Bot_ProgramOffered = require("../models/Academics/Departments/Botany/Bot_ProgramsOffered_Schema");
const Bot_Awards = require("../models/Academics/Departments/Botany/Awards_Schema");
const Bot_Lab_Staff = require("../models/Academics/Departments/Botany/Bot_Lab_Staff_Schema");

const Bot_StuAch = require("../models/Academics/Departments/Botany/StuAch_Schema");
const Bot_Association = require("../models/Academics/Departments/Botany/Bot_Association_Schema");
const Chem_Pubs = require("../models/Academics/Departments/Chemistry/Pubs_Schema");
const Chem_Association = require("../models/Academics/Departments/Chemistry/Chem_Association_Schema");
const Com_StuAch = require("../models/Academics/Departments/Commerce/StuAch_Schema");
const Com_Fac = require("../models/Academics/Departments/Commerce/Fac");
const Com_Pubs = require("../models/Academics/Departments/Commerce/Pubs_Schema");
const Eco_Fac = require("../models/Academics/Departments/Economics/Fac");
const Eco_Pubs = require("../models/Academics/Departments/Economics/Pubs_Schema");
const Eco_Eve = require("../models/Academics/Departments/Economics/Events");
const Com_Association = require("../models/Academics/Departments/Commerce/Association");
const Eng_Fac = require("../models/Academics/Departments/English/Fac");
const Eng_Pubs = require("../models/Academics/Departments/English/Pubs_Schema");
const Eng_Eve = require("../models/Academics/Departments/English/Events");
const Hin_Fac = require("../models/Academics/Departments/Hindi/Fac");
const Hin_Pubs = require("../models/Academics/Departments/Hindi/Pubs_Schema");
const Hindi_Association = require("../models/Academics/Departments/Hindi/Hindi_Association_Schema");

const Chem_ProgramOffered = require("../models/Academics/Departments/Chemistry/Chem_ProgramsOffered_Schema");
const Chem_Awards = require("../models/Academics/Departments/Chemistry/Chem_Awards_Schema");
const Com_ProgramOffered = require("../models/Academics/Departments/Commerce/Com_ProgramsOffered_Schema");
const Com_Awards = require("../models/Academics/Departments/Commerce/Awards_Schema");
const Eco_ProgramOffered = require("../models/Academics/Departments/Economics/Eco_ProgramsOffered_Schema");
const Eco_Awards = require("../models/Academics/Departments/Economics/Eco_Awards_Schema");
const Eco_Association = require("../models/Academics/Departments/Economics/Eco_Association_Schema");
const Eng_ProgramOffered = require("../models/Academics/Departments/English/Eng_ProgramsOffered_Schema");
const Eng_Awards = require("../models/Academics/Departments/English/Eng_Awards_Schema");
const Hin_ProgramOffered = require("../models/Academics/Departments/Hindi/Hin_ProgramsOffered_Schema");
const Hin_Awards = require("../models/Academics/Departments/Hindi/Hin_Awards_Schema");
const Hin_Magazine = require("../models/Academics/Departments/Hindi/Magazine");
const PE_ProgramOffered = require("../models/Academics/Departments/Physical_Education/PE_ProgramsOffered_Schema");
const PE_Awards = require("../models/Academics/Departments/Physical_Education/PE_Awards_Schema");
const PE_Fac = require("../models/Academics/Departments/Physical_Education/PE_Fac_Schema");
const Physics_ProgramOffered = require("../models/Academics/Departments/Physics/Physics_ProgramsOffered_Schema");
const Physics_Awards = require("../models/Academics/Departments/Physics/Physics_Awards_Schema");
const PolSci_ProgramOffered = require("../models/Academics/Departments/Political_Science/PolSci_ProgramsOffered_Schema");
const PolSci_Awards = require("../models/Academics/Departments/Political_Science/PolSci_Awards_Schema");
const Psychology_ProgramOffered = require("../models/Academics/Departments/Psychology/Psychology_ProgramsOffered_Schema");
const Psychology_Awards = require("../models/Academics/Departments/Psychology/Psychology_Awards_Schema");
const Sanskrit_ProgramOffered = require("../models/Academics/Departments/Sanskrit/Sanskrit_Programsoffered_Schema");
const Sanskrit_Awards = require("../models/Academics/Departments/Sanskrit/Sanskrit_Awards_Schema");
const Zoology_ProgramOffered = require("../models/Academics/Departments/Zoology/Zoology_Programsoffered_Schema");
const Zoology_Awards = require("../models/Academics/Departments/Zoology/Zoology_Awards_Schema");
const Hist_ProgramOffered = require("../models/Academics/Departments/History/Hist_ProgramsOffered_Schema");
const Hist_Awards = require("../models/Academics/Departments/History/Hist_Awards_Schema");
const Math_ProgramOffered = require("../models/Academics/Departments/Mathematics/Math_ProgramsOffered_Schema");
const Math_Awards = require("../models/Academics/Departments/Mathematics/Math_Awards_Schema");
const NHE_ProgramOffered = require("../models/Academics/Departments/NHE/NHE_ProgramsOffered_Schema");
// const Physics_Events = require("../models/Academics/Departments/Physics/Physics_Events_Schema");
const Sanskrit_Events = require("../models/Academics/Departments/Sanskrit/Sanskrit_Events_Schema");
const Zoology_Events = require("../models/Academics/Departments/Zoology/Zoology_Events_Schema");
const Physics_Publications = require("../models/Academics/Departments/Physics/Physics_Publications_Schema");
const PS_Publications = require("../models/Academics/Departments/Political_Science/PS_Publications_Schema");
const Sanskrit_Publications = require("../models/Academics/Departments/Sanskrit/Sanskrit_Publications_Schema");
// const Zoology_Publications = require("../models/Academics/Departments/Zoology/Zoology_Publications_Schema")
const Physics_Facilities = require("../models/Academics/Departments/Physics/Physics_Facilities_Schema");
const Physics_Association = require("../models/Academics/Departments/Physics/Physics_Association_Schema");
const PS_Association = require("../models/Academics/Departments/Political_Science/PS_Association_Schema");
const Sanskrit_Association = require("../models/Academics/Departments/Sanskrit/Sanskrit_Association_Schema");
const Physics_Newsletter = require("../models/Academics/Departments/Physics/Physics_Newsletter_Schema");

const Bot_Publications = require("../models/Academics/Departments/Botany/Pubs_Schema");
const Useful_Links = require("../models/Useful_Links_schema");


// const NHE_Awards = require("../models/Academics/Departments/NHE/Awards_Schema");
const Philo_ProgramOffered = require("../models/Academics/Departments/Philosophy/Philo_ProgramsOffered_Schema");

const unlinkAsync = promisify(fs.unlink);

// SET STORAGE
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "../daulatram/public/images/uploads");
    },
    filename(req, file, cb) {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
});
const upload = multer({
    storage: storage,
    limits: {
        // max file size 100MB = 100000000 bytes
        fileSize: 100000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
            return cb(
                new Error(
                    "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
                )
            );
        }
        cb(undefined, true);
    },
});

// Admin
router.get("/getdata", async(req, res) => {
    const details = await User.find();
    res.status(200).json(details);
});
router.get("/resetData", async(req, res) => {
    const tok = req.query.resetPasswordToken;

    const details = await User.findOne({
        resetPasswordToken: tok,
    });
    if (!details) {
        console.log("password reset link is invalid");
        res.status(400).json("password reset link is invalid");
    } else {
        const exp = details.resetPasswordExpires;
        const diff = exp - Date.now();
        // console.log(exp)

        if (diff > 0) {
            res.status(200).json({
                username: details.Username,
                message: "password reset link a-ok",
            });
        } else {
            // console.log('password reset link has expired')
            res.status(400).json("password reset link has expired");
        }
    }
});

router.put("/updatePasswordViaEmail", async(req, res) => {
    try {
        // console.log(req.body)
        const { Username, Password } = req.body;

        const details = await User.findOne({
            Username: Username,
        });
        if (details) {
            const salt = await bcrypt.genSalt();

            // console.log('User exists in the database')
            const hashedPassword = await bcrypt.hash(Password, salt);
            const data = await details.updateOne({
                Password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null,
            });
            if (data) {
                // console.log('password updated');
                res.status(200).json({ message: "password updated" });
            } else {
                // console.log("Password can't be update")
                res.status(403).json("Password can't be update");
            }
        } else {
            // console.log('no user exists in db to update')
            res.status(404).json("no user exists in db to update");
        }
    } catch (err) {
        console.log("err");
    }
});

router.post("/NewAdmin", async(req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const { Username, Email, Password } = req.body;
        console.log(req.body);

        if (!Username || !Email || !Password) {
            return res.status(400).json({ error: "Fill the complete form" });
        }
        // const hashedUser = await bcrypt.hash(Username, salt)
        const hashedPassword = await bcrypt.hash(Password, salt);

        const user = new User({
            Username: Username,
            Email: Email,
            Password: hashedPassword,
        });
        await user.save();
        // console.log("Form filled Successfully")
        return res.status(200).json({ message: "Form filled Successfully " });
    } catch (err) {
        console.log("err");
    }
});

router.post("/forgotEmail", async(req, res) => {
    try {
        const { Email } = req.body;
        if (!Email) {
            return res.status(400).json("email required");
        }
        const user = await User.findOne({ Email: Email });
        if (!user) {
            return res.status(401).json("email not in the database");
        } else {
            const token = crypto.randomBytes(20).toString("hex");
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
                        "Please click on the following link, or paste this into your browser to complete the process within 10 mins of receiving it:\n\n" +
                        `http://localhost:3000/reset/${token}\n\n` +
                        `This link is valid only upto 10 mins\n\n` +
                        "If you did not request this, please ignore this email and your password will remain unchanged",
                };

                console.log("Sending email.....");

                transporter.sendMail(mailOptions, (err, response) => {
                    if (err) {
                        console.log("There was an error: ", err);
                    } else {
                        console.log("There you Go: ", response);
                        return res.status(200).json("Recovery email sent");
                    }
                });
            } else {
                console.log("Unable to give token ");
            }
        }
    } catch (err) {
        console.log(" External err");
    }
});

router.post("/AdminLogin", async(req, res) => {
    try {
        const { Username, Password } = req.body;
        if (!Username || !Password) {
            return res
                .status(400)
                .json({ error: "Fill the Admin Login Form Properly" });
        }
        const username_ = sanitize(Username);

        const UserLogin = await User.findOne({ Username: username_ });
        //   const UserLogin = await User.findOne({ Username: username_ })

        if (UserLogin) {
            const isMatch = await bcrypt.compare(Password, UserLogin.Password);
            // console.log(isMatch)
            if (!isMatch) {
                console.log("Invalid Credentials");
                res.status(402).json({ error: "Invalid Credentials" });
            } else {
                console.log("Signin Successful");
                res.status(200).json({ message: "user Signin Sucessfully" });
                await UserLogin.save();
            }
        } else {
            console.log("Login Failed");
            res.status(401).json({ error: "Login Failed" });
        }
    } catch (err) {
        console.log(err);
    }
});

router.delete("/delete/:id", async(req, res) => {
    const delete_user = await User.findOneAndDelete({ _id: req.params.id });
    res.send(delete_user + "User deleted");
});

// Feedback Form Staff Zone

router.get("/feedback", async(req, res) => {
    // res.send(`Hello World from the server`);
    const details = await Feedback.find();
    res.status(200).json(details);
});

router.post("/StaffZone_feedback", async(req, res) => {
    const { Link, Caption, text } = req.body;
    if (!Link || !Caption) {
        return res
            .status(400)
            .json({ error: "Fill the Admission Details Properly" });
    }
    const user = new Feedback(req.body);
    await user.save();
    console.log("Details Saved Successfully");
    return res.status(200).json({ message: "Details Saved Successfully " });
});
router.delete("/deletefeedback/:id", async(req, res) => {
    const delete_user = await Feedback.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(delete_user + "User deleted");
});

// Guidelines

router.post("/delete_Guidelines_fac/:id", async(req, res) => {
    const delete_user = await Guidelines.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Guidelines_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Guidelines.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.get("/Guidelines", async(req, res) => {
    try {
        const files = await Guidelines.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post("/Guidelines_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Guidelines({
            title: title,
            description: description,
        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Guidelines_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Guidelines.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Guidelines.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Guidelines_download/:id", async(req, res) => {
    try {
        const file = await Guidelines.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});


// About Us Founder

router.get("/Founder_About", async(req, res) => {
    const details = await Founder.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});

router.post("/delete_Founder_About_data/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Founder.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Founder.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});

router.post(
    "/Founder_About_add_data/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Founder.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.post(
    "/Founder_About_add",
    upload.single("file"),
    async(req, res) => {
        try {
            // console.log(req.body);
            const file = new Founder({
                "img_data.file_path": {
                    file_path1: req.file.path,
                    file_mimetype1: req.file.mimetype,
                    value: false,
                },
            });
            await file.save();
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            console.log(error);
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// About Us Chairperson

router.get("/Chairperson_About", async(req, res) => {
    const details = await Chairperson.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});

router.post("/delete_Chairperson_About_data/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Chairperson.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Chairperson.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});

router.post(
    "/Chairperson_About_add_data/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Chairperson.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.post(
    "/Chairperson_About_add",
    upload.single("file"),
    async(req, res) => {
        try {
            // console.log(req.body);
            const file = new Chairperson({
                "img_data.file_path": {
                    file_path1: req.file.path,
                    file_mimetype1: req.file.mimetype,
                    value: false,
                },
            });
            await file.save();
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            console.log(error);
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// About Us College Profile Mission and Vision

router.get("/Mission_About", async(req, res) => {
    const details = await Mission.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});

router.post("/delete_Mission_About_data/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Mission.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Mission.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});

router.post(
    "/Mission_About_add_data/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Mission.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.post(
    "/Mission_About_add",
    upload.single("file"),
    async(req, res) => {
        try {
            // console.log(req.body);
            const file = new Mission({
                "img_data.file_path": {
                    file_path1: req.file.path,
                    file_mimetype1: req.file.mimetype,
                    value: false,
                },
            });
            await file.save();
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            console.log(error);
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// About Us Principal

router.get("/Principal_About", async(req, res) => {
    const details = await Principal.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});

router.post("/delete_Principal_About_data/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Principal.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Principal.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});

router.post(
    "/Principal_About_add_data/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Principal.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.post(
    "/Principal_About_add",
    upload.single("file"),
    async(req, res) => {
        try {
            // console.log(req.body);
            const file = new Principal({
                "img_data.file_path": {
                    file_path1: req.file.path,
                    file_mimetype1: req.file.mimetype,
                    value: false,
                },
            });
            await file.save();
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            console.log(error);
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// About Us VicePrincipal

router.get("/VicePrincipal_About", async(req, res) => {
    const details = await VicePrincipal.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});

router.post("/delete_VicePrincipal_About_data/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await VicePrincipal.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await VicePrincipal.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});

router.post(
    "/VicePrincipal_About_add_data/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await VicePrincipal.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.post(
    "/VicePrincipal_About_add",
    upload.single("file"),
    async(req, res) => {
        try {
            // console.log(req.body);
            const file = new VicePrincipal({
                "img_data.file_path": {
                    file_path1: req.file.path,
                    file_mimetype1: req.file.mimetype,
                    value: false,
                },
            });
            await file.save();
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            console.log(error);
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Staff Roster

router.get("/Staff_Roster", async(req, res) => {
    const details = await Roster.find();
    res.status(200).json(details);
});
router.delete("/delete_Staff_Roster/:id", async(req, res) => {
    const delete_user = await Roster.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Staff_Roster_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Roster({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Bulletin

router.get("/bulletin", async(req, res) => {
    const details = await Bulletin.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/delete_admissionbulletin/:id", async(req, res) => {
    const delete_user = await Bulletin.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/bulletin_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bulletin({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Biochemistry About The Department 

router.get("/Biochem_About", async(req, res) => {
    const details = await Biochem_About.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});

router.post("/delete_Biochem_About_data/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Biochem_About.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Biochem_About.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});

router.post(
    "/Biochem_About_add_data/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Biochem_About.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.post(
    "/Biochem_About_add",
    upload.single("file"),
    async(req, res) => {
        try {
            // console.log(req.body);
            const file = new Biochem_About({
                "img_data.file_path": {
                    file_path1: req.file.path,
                    file_mimetype1: req.file.mimetype,
                    value: false,
                },
            });
            await file.save();
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            console.log(error);
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// BioChemistry Program Offered

router.get("/Bio_ProgramOffered", async(req, res) => {
    const details = await Bio_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Bio_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Bio_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Bio_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bio_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// BioChemistry Awards
router.post("/delete_Bio_Awards/:id", async(req, res) => {
    const delete_user = await Bio_Awards.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Bio_Awards_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Bio_Awards.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Bio_Awards_fac/:id", async(req, res) => {
    const delete_user = await Bio_Awards.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Bio_Awards_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Bio_Awards.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Bio_Awards.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Bio_Awards", async(req, res) => {
    try {
        const files = await Bio_Awards.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Bio_Awards_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Bio_Awards.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Bio_Awards_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bio_Awards.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Bio_Awards_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Bio_Awards.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Bio_Awards_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Bio_Awards({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Bio_Awards_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Bio_Awards.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Bio_Awards.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Bio_Association_download/:id", async(req, res) => {
    try {
        const file = await Bio_Awards.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

//maths prog

router.get("/Math_ProgramOffered", async(req, res) => {
    const details = await Math_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Math_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Math_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Math_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Math_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Maths Awards

router.get("/Math_Awards", async(req, res) => {
    const details = await Math_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Math_Awards/:id", async(req, res) => {
    const delete_user = await Math_Awards.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});
router.post(
    "/Math_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Math_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

//NHEs prog

router.get("/NHE_ProgramOffered", async(req, res) => {
    const details = await NHE_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_NHE_ProgramOffered/:id", async(req, res) => {
    const delete_user = await NHE_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/NHE_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new NHE_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
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

router.get("/Philo_ProgramOffered", async(req, res) => {
    const details = await Philo_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Philo_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Philo_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Philo_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Philo_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

//history prog
router.get("/Hist_ProgramOffered", async(req, res) => {
    const details = await Hist_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Hist_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Hist_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Hist_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hist_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// History Awards

router.get("/Hist_Awards", async(req, res) => {
    const details = await Hist_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Hist_Awards/:id", async(req, res) => {
    const delete_user = await Hist_Awards.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});
router.post(
    "/Hist_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hist_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Commerce Program Offered

router.get("/Com_ProgramOffered", async(req, res) => {
    const details = await Com_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Com_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Com_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Com_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Com_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Commerce Awards

router.get("/Com_Awards", async(req, res) => {
    const details = await Com_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Com_Awards/:id", async(req, res) => {
    const delete_user = await Com_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});
router.post(
    "/Com_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Com_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Chemistry Program Offered

router.get("/Chem_ProgramOffered", async(req, res) => {
    const details = await Chem_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Chem_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Chem_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Chem_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Chem_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Chemistry Awards

router.get("/Chem_Awards", async(req, res) => {
    const details = await Chem_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Chem_Awards/:id", async(req, res) => {
    const delete_user = await Chem_Awards.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});
router.post(
    "/Chem_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Chem_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Botany Program Offered

router.get("/Bot_ProgramOffered", async(req, res) => {
    const details = await Bot_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Bot_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Bot_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Bot_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bot_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Senior staff list

router.get("/Senior_list", async(req, res) => {
    const details = await Senior_list.find();
    res.status(200).json(details);
});
router.delete("/delete_Senior_list/:id", async(req, res) => {
    const delete_user = await Senior_list.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Senior_list_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Senior_list({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Botany Awards

router.get("/Bot_Awards", async(req, res) => {
    const details = await Bot_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Bot_Awards/:id", async(req, res) => {
    const delete_user = await Bot_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Bot_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bot_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Bot_StuAch", async(req, res) => {
    const details = await Bot_StuAch.find();
    res.status(200).json(details);
});
router.delete("/delete_Bot_StuAch/:id", async(req, res) => {
    const delete_user = await Bot_StuAch.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Bot_StuAch_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bot_StuAch({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Chemistry Student Achievements

router.get("/Chem_StuAch", async(req, res) => {
    const details = await Chem_StuAch.find();
    res.status(200).json(details);
});
router.delete("/delete_Chem_StuAch/:id", async(req, res) => {
    const delete_user = await Chem_StuAch.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Chem_StuAch_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Chem_StuAch({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Commerce Student Achievements

router.get("/Com_StuAch", async(req, res) => {
    const details = await Com_StuAch.find();
    res.status(200).json(details);
});
router.delete("/delete_Com_StuAch/:id", async(req, res) => {
    const delete_user = await Com_StuAch.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Com_StuAch_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Com_StuAch({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Economics Student Achievements

router.get("/Eco_StuAch", async(req, res) => {
    const details = await Eco_StuAch.find();
    res.status(200).json(details);
});
router.delete("/delete_Eco_StuAch/:id", async(req, res) => {
    const delete_user = await Eco_StuAch.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eco_StuAch_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eco_StuAch({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// English Student Achievements

router.get("/Eng_StuAch", async(req, res) => {
    const details = await Eng_StuAch.find();
    res.status(200).json(details);
});
router.delete("/delete_Eng_StuAch/:id", async(req, res) => {
    const delete_user = await Eng_StuAch.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eng_StuAch_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eng_StuAch({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


// Chemistry Publication

router.get("/Chem_Pubs", async(req, res) => {
    const details = await Chem_Pubs.find();
    res.status(200).json(details);
});
router.delete("/delete_Chem_Pubs/:id", async(req, res) => {
    const delete_user = await Chem_Pubs.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Chem_Pubs_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Chem_Pubs({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Commerce Publication

router.get("/Com_Pubs", async(req, res) => {
    const details = await Com_Pubs.find();
    res.status(200).json(details);
});
router.delete("/delete_Com_Pubs/:id", async(req, res) => {
    const delete_user = await Com_Pubs.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Com_Pubs_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Com_Pubs({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Economics Publication

router.get("/Eco_Pubs", async(req, res) => {
    const details = await Eco_Pubs.find();
    res.status(200).json(details);
});
router.delete("/delete_Eco_Pubs/:id", async(req, res) => {
    const delete_user = await Eco_Pubs.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eco_Pubs_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eco_Pubs({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// English Publication

router.get("/Eng_Pubs", async(req, res) => {
    const details = await Eng_Pubs.find();
    res.status(200).json(details);
});
router.delete("/delete_Eng_Pubs/:id", async(req, res) => {
    const delete_user = await Eng_Pubs.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eng_Pubs_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eng_Pubs({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Hindi Publication

router.get("/Hin_Pubs", async(req, res) => {
    const details = await Hin_Pubs.find();
    res.status(200).json(details);
});
router.delete("/delete_Hin_Pubs/:id", async(req, res) => {
    const delete_user = await Hin_Pubs.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Hin_Pubs_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hin_Pubs({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Chemistry Association

router.post("/delete_Chem_Association/:id", async(req, res) => {
    const delete_user = await Chem_Association.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Chem_Association_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Chem_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Chem_Association_fac/:id", async(req, res) => {
    const delete_user = await Chem_Association.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Chem_Association_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Chem_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Chem_Association.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Chem_Association", async(req, res) => {
    try {
        const files = await Chem_Association.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Chem_Association_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Chem_Association.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Chem_Association_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Chem_Association.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Chem_Association_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Chem_Association.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Chem_Association_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Chem_Association({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Chem_Association_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Chem_Association.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Chem_Association.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Chem_Association_download/:id", async(req, res) => {
    try {
        const file = await Chem_Association.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Commerce Association

router.post("/delete_Com_Association/:id", async(req, res) => {
    const delete_user = await Com_Association.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Com_Association_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Com_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Com_Association_fac/:id", async(req, res) => {
    const delete_user = await Com_Association.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Com_Association_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Com_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Com_Association.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Com_Association", async(req, res) => {
    try {
        const files = await Com_Association.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Com_Association_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Com_Association.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Com_Association_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Com_Association.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Com_Association_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Com_Association.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Com_Association_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Com_Association({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Com_Association_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Com_Association.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Com_Association.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Com_Association_download/:id", async(req, res) => {
    try {
        const file = await Com_Association.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Economics Association

router.post("/delete_Eco_Association/:id", async(req, res) => {
    const delete_user = await Eco_Association.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Eco_Association_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Eco_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Eco_Association_fac/:id", async(req, res) => {
    const delete_user = await Eco_Association.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Eco_Association_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Eco_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Eco_Association.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Eco_Association", async(req, res) => {
    try {
        const files = await Eco_Association.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Eco_Association_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Eco_Association.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Eco_Association_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eco_Association.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Eco_Association_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Eco_Association.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Eco_Association_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Eco_Association({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Eco_Association_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Eco_Association.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Eco_Association.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Eco_Association_download/:id", async(req, res) => {
    try {
        const file = await Eco_Association.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// English Association

router.post("/delete_Eng_Association/:id", async(req, res) => {
    const delete_user = await Eng_Association.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Eng_Association_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Eng_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Eng_Association_fac/:id", async(req, res) => {
    const delete_user = await Eng_Association.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Eng_Association_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Eng_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Eng_Association.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Eng_Association", async(req, res) => {
    try {
        const files = await Eng_Association.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Eng_Association_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Eng_Association.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Eng_Association_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eng_Association.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Eng_Association_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Eng_Association.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Eng_Association_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Eng_Association({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Eng_Association_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Eng_Association.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Eng_Association.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Eng_Association_download/:id", async(req, res) => {
    try {
        const file = await Eng_Association.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});







// Hindi Association


router.post("/delete_Hindi_Association/:id", async(req, res) => {
    const delete_user = await Hindi_Association.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Hindi_Association_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Hindi_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Hindi_Association_fac/:id", async(req, res) => {
    const delete_user = await Hindi_Association.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Hindi_Association_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Hindi_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Hindi_Association.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Hindi_Association", async(req, res) => {
    try {
        const files = await Hindi_Association.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Hindi_Association_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Hindi_Association.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Hindi_Association_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Hindi_Association.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Hindi_Association_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Hindi_Association.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Hindi_Association_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Hindi_Association({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Hindi_Association_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Hindi_Association.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Hindi_Association.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Hindi_Association_download/:id", async(req, res) => {
    try {
        const file = await Hindi_Association.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Chemistry Facilities

router.get("/Chem_Fac", async(req, res) => {
    const details = await Chem_Fac.find();
    res.status(200).json(details);
});
router.delete("/delete_Chem_Fac/:id", async(req, res) => {
    const delete_user = await Chem_Fac.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Chem_Fac_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Chem_Fac({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Commerce Facilities

router.get("/Com_Fac", async(req, res) => {
    const details = await Com_Fac.find();
    res.status(200).json(details);
});
router.delete("/delete_Com_Fac/:id", async(req, res) => {
    const delete_user = await Com_Fac.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Com_Fac_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Com_Fac({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Economics Facilities

router.get("/Eco_Fac", async(req, res) => {
    const details = await Eco_Fac.find();
    res.status(200).json(details);
});
router.delete("/delete_Eco_Fac/:id", async(req, res) => {
    const delete_user = await Eco_Fac.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eco_Fac_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eco_Fac({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// English Facilities

router.get("/Eng_Fac", async(req, res) => {
    const details = await Eng_Fac.find();
    res.status(200).json(details);
});
router.delete("/delete_Eng_Fac/:id", async(req, res) => {
    const delete_user = await Eng_Fac.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eng_Fac_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eng_Fac({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Hindi Facilities

router.get("/Hin_Fac", async(req, res) => {
    const details = await Hin_Fac.find();
    res.status(200).json(details);
});
router.delete("/delete_Hin_Fac/:id", async(req, res) => {
    const delete_user = await Hin_Fac.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Hin_Fac_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hin_Fac({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Economics Events

router.get("/Eco_Eve", async(req, res) => {
    const details = await Eco_Eve.find();
    res.status(200).json(details);
});
router.delete("/delete_Eco_Eve/:id", async(req, res) => {
    const delete_user = await Eco_Eve.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eco_Eve_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eco_Eve({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// English Events

router.get("/Eng_Eve", async(req, res) => {
    const details = await Eng_Eve.find();
    res.status(200).json(details);
});
router.delete("/delete_Eng_Eve/:id", async(req, res) => {
    const delete_user = await Eng_Eve.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eng_Eve_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eng_Eve({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


// Physical_Education Program offered

router.get("/PE_ProgramOffered", async(req, res) => {
    const details = await PE_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_PE_ProgramOffered/:id", async(req, res) => {
    const delete_user = await PE_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/PE_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PE_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Physics Program offered

router.get("/Physics_ProgramOffered", async(req, res) => {
    const details = await Physics_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Physics_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Physics_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Physics_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Political Science Program offered

router.get("/PolSci_ProgramOffered", async(req, res) => {
    const details = await PolSci_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_PolSci_ProgramOffered/:id", async(req, res) => {
    const delete_user = await PolSci_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/PolSci_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PolSci_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Psychology Program offered

router.get("/Psychology_ProgramOffered", async(req, res) => {
    const details = await Psychology_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Psychology_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Psychology_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Psychology_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Psychology_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Sanskrit Program offered

router.get("/Sanskrit_ProgramOffered", async(req, res) => {
    const details = await Sanskrit_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Sanskrit_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Sanskrit_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Sanskrit_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Zoology Program offered

router.get("/Zoology_ProgramOffered", async(req, res) => {
    const details = await Zoology_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Zoology_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Zoology_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Zoology_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Zoology_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Physical Education Awards

router.get("/PE_Fac", async(req, res) => {
    const details = await PE_Fac.find();
    res.status(200).json(details);
});
router.delete("/delete_PE_Fac/:id", async(req, res) => {
    const delete_user = await PE_Fac.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/PE_Fac_add",
    upload.single("file"),
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
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
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

router.get("/PE_Awards", async(req, res) => {
    const details = await PE_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_PE_Awards/:id", async(req, res) => {
    const delete_user = await PE_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/PE_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PE_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Physics Awards
router.get("/Physics_Awards", async(req, res) => {
    const details = await Physics_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Physics_Awards/:id", async(req, res) => {
    const delete_user = await Physics_Awards.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Physics_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// PolSci Events
router.post("/delete_PolSci_Events/:id", async(req, res) => {
    const delete_user = await PolSci_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/PolSci_Events", async(req, res) => {
    try {
        const files = await PolSci_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/PolSci_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetyPolSci } = req.file;
            // console.log(path, mimetyPolSci)
            const data = await PolSci_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetyPolSci1: mimetyPolSci,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/PolSci_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetyPolSci } = req.file;
            // console.log(title,path,mimetyPolSci)
            const file = new PolSci_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetyPolSci1: mimetyPolSci },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// Sanskrit Events
router.post("/delete_Sanskrit_Events/:id", async(req, res) => {
    const delete_user = await Sanskrit_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Sanskrit_Events", async(req, res) => {
    try {
        const files = await Sanskrit_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Sanskrit_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetySanskrit } = req.file;
            // console.log(path, mimetySanskrit)
            const data = await Sanskrit_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetySanskrit1: mimetySanskrit,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Sanskrit_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetySanskrit } = req.file;
            // console.log(title,path,mimetySanskrit)
            const file = new Sanskrit_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetySanskrit1: mimetySanskrit },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// Zoology Events
router.post("/delete_Zoology_Events/:id", async(req, res) => {
    const delete_user = await Zoology_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Zoology_Events", async(req, res) => {
    try {
        const files = await Zoology_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Zoology_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetyZoology } = req.file;
            // console.log(path, mimetyZoology)
            const data = await Zoology_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetyZoology1: mimetyZoology,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Zoology_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetyZoology } = req.file;
            // console.log(title,path,mimetyZoology)
            const file = new Zoology_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetyZoology1: mimetyZoology },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

//  Physics Students' Achievements
router.get("/Physics_Stuachieve", async(req, res) => {
    const details = await Physics_Stuachieve.find();
    res.status(200).json(details);
});
router.delete("/delete_Physics_Stuachieve/:id", async(req, res) => {
    const delete_user = await Physics_Stuachieve.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Physics_Stuachieve_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Stuachieve({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

//  Sanskrit Students' Achievements
router.get("/Sanskrit_Stuachieve", async(req, res) => {
    const details = await Sanskrit_Stuachieve.find();
    res.status(200).json(details);
});
router.delete("/delete_Sanskrit_Stuachieve/:id", async(req, res) => {
    const delete_user = await Sanskrit_Stuachieve.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Sanskrit_Stuachieve_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_Stuachieve({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

//  Zoology Students' Achievements
router.get("/Zoology_Stuachieve", async(req, res) => {
    const details = await Zoology_Stuachieve.find();
    res.status(200).json(details);
});
router.delete("/delete_Zoology_Stuachieve/:id", async(req, res) => {
    const delete_user = await Zoology_Stuachieve.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Zoology_Stuachieve_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Zoology_Stuachieve({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

//  Botany Publications
router.get("/Bot_Publications", async(req, res) => {
    const details = await Bot_Publications.find();
    res.status(200).json(details);
});
router.delete("/delete_Bot_Publications/:id", async(req, res) => {
    const delete_user = await Bot_Publications.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Bot_Publications_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bot_Publications({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
//  Physics Publications
router.get("/Physics_Publications", async(req, res) => {
    const details = await Physics_Publications.find();
    res.status(200).json(details);
});
router.delete("/delete_Physics_Publications/:id", async(req, res) => {
    const delete_user = await Physics_Publications.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Physics_Publications_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Publications({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

//  Political Science Publications
router.get("/PS_Publications", async(req, res) => {
    const details = await PS_Publications.find();
    res.status(200).json(details);
});
router.delete("/delete_PS_Publications/:id", async(req, res) => {
    const delete_user = await PS_Publications.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/PS_Publications_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PS_Publications({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
//  Sanskrit Publications
router.get("/Sanskrit_Publications", async(req, res) => {
    const details = await Sanskrit_Publications.find();
    res.status(200).json(details);
});
router.delete("/delete_Sanskrit_Publications/:id", async(req, res) => {
    const delete_user = await Sanskrit_Publications.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Sanskrit_Publications_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_Publications({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
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

//   Physics Facilities
router.get("/Physics_Facilities", async(req, res) => {
    const details = await Physics_Facilities.find();
    res.status(200).json(details);
});
router.delete("/delete_Physics_Facilities/:id", async(req, res) => {
    const delete_user = await Physics_Facilities.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Physics_Facilities_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Facilities({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

//   Physics Association
router.get("/Physics_Association", async(req, res) => {
    const details = await Physics_Association.find();
    res.status(200).json(details);
});
router.delete("/delete_Physics_Association/:id", async(req, res) => {
    const delete_user = await Physics_Association.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Physics_Association_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Association({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
//   Physics Newsletter & Magazines
router.get("/Physics_Newsletter", async(req, res) => {
    const details = await Physics_Newsletter.find();
    res.status(200).json(details);
});
router.delete("/delete_Physics_Newsletter/:id", async(req, res) => {
    const delete_user = await Physics_Newsletter.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Physics_Newsletter_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Newsletter({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
//   Political Science Association
router.get("/PS_Association", async(req, res) => {
    const details = await PS_Association.find();
    res.status(200).json(details);
});
router.delete("/delete_PS_Association/:id", async(req, res) => {
    const delete_user = await PS_Association.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/PS_Association_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PS_Association({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
//   Sanskrit Association
router.get("/Sanskrit_Association", async(req, res) => {
    const details = await Sanskrit_Association.find();
    res.status(200).json(details);
});
router.delete("/delete_Sanskrit_Association/:id", async(req, res) => {
    const delete_user = await Sanskrit_Association.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Sanskrit_Association_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_Association({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Political Science Awards
router.get("/PolSci_Awards", async(req, res) => {
    const details = await PolSci_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_PolSci_Awards/:id", async(req, res) => {
    const delete_user = await PolSci_Awards.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/PolSci_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new PolSci_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Psychology Awards

router.get("/Psychology_Awards", async(req, res) => {
    const details = await Psychology_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Psychology_Awards/:id", async(req, res) => {
    const delete_user = await Psychology_Awards.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Psychology_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Psychology_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Sanskrit Awards

router.get("/Sanskrit_Awards", async(req, res) => {
    const details = await Sanskrit_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Sanskrit_Awards/:id", async(req, res) => {
    const delete_user = await Sanskrit_Awards.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Sanskrit_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Sanskrit_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Zoology Awards

router.get("/Zoology_Awards", async(req, res) => {
    const details = await Zoology_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Zoology_Awards/:id", async(req, res) => {
    const delete_user = await Zoology_Awards.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Zoology_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Zoology_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Academics Training

router.get("/Training_", async(req, res) => {
    const details = await Training.find();
    res.status(200).json(details);
});
router.delete("/delete_academicsTraings/:id", async(req, res) => {
    const delete_user = await Training.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Academics_Training_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Training({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Admission GE Options

router.get("/GE_Options_admission", async(req, res) => {
    const details = await GE_Options.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/delete_GE_Options/:id", async(req, res) => {
    const delete_user = await GE_Options.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/GE_Options_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new GE_Options({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/GE_Options_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new GE_Options({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Admission FAQs

router.get("/Admission_FAQs", async(req, res) => {
    const details = await Admission_FAQs.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/deleteAdmission_FAQs/:id", async(req, res) => {
    const delete_user = await Admission_FAQs.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/Admission_FAQs_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new Admission_FAQs({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/Admission_FAQs_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Admission_FAQs({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Admission Committee

router.get("/Admission_comm", async(req, res) => {
    const details = await Admission_comm.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/deleteAdmission_comm/:id", async(req, res) => {
    const delete_user = await Admission_comm.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/Admission_comm_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new Admission_comm({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/Admission_comm_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Admission_comm({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Admission Grievance Committee

router.get("/Admission_Grievance_comm", async(req, res) => {
    const details = await Admission_Grievance.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/deleteAdmission_Grievance_comm/:id", async(req, res) => {
    const delete_user = await Admission_Grievance.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/Admission_Grievance_comm_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new Admission_Grievance({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/Admission_Grievance_comm_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Admission_Grievance({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Admission Fee Structure

router.get("/admission_Fee_Structure", async(req, res) => {
    const details = await Fee_Structure.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/deleteadmission_Fee_Structure/:id", async(req, res) => {
    const delete_user = await Fee_Structure.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/admission_Fee_Structure_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new Fee_Structure({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/admission_Fee_Structure_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Fee_Structure({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Professional Code of Ethics

router.get("/Ethics_", async(req, res) => {
    const details = await Ethics.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/delete_Ethics/:id", async(req, res) => {
    const delete_user = await Ethics.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/Ethics_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title, heading } = req.body;
        if (!title || !link || !file || !heading) {
            return res
                .status(400)
                .json({ error: "Fill the Ethics Details Properly" });
        }
        const user = new Ethics({
            heading,
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/Ethics_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link, heading } = req.body;
            const { path, mimetype } = req.file;
            if (!title || !link || !heading) {
                return res
                    .status(400)
                    .json({ error: "Fill the Ethics Details Properly" });
            }
            const file = new Ethics({
                heading,
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Online Admission

router.get("/admission", async(req, res) => {
    const details = await Adminssion.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/deleteAdmission/:id", async(req, res) => {
    const delete_user = await Adminssion.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/admission_online_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new Adminssion({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/admission_online_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Adminssion({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// e-resources

router.get("/eresources", async(req, res) => {
    const details = await Eresources.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/deleteeresources/:id", async(req, res) => {
    const delete_user = await Eresources.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/eresources_online_add_link", async(req, res) => {
    try {
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Details Properly" });
        }
        const user = new Eresources({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/eresources_online_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eresources({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// ICC

router.get("/ICC", async(req, res) => {
    const details = await Icc.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/deleteICC/:id", async(req, res) => {
    const delete_user = await Icc.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/ICC_online_add_link", async(req, res) => {
    try {
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Details Properly" });
        }
        const user = new Icc({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/ICC_online_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Icc({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Accreditation


router.get("/accred", async(req, res) => {
    const details = await Accred.find();


    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});

router.delete("/deleteaccred/:id", async(req, res) => {
    const delete_user = await Accred.findOneAndDelete({ _id: req.params.id });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/accred_online_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Details Properly" });
        }
        const user = new Accred({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/accred_online_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Accred({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Helpdesk

router.get("/Helpdesk", async(req, res) => {
    const details = await helpdesk.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/deleteHelpdesk/:id", async(req, res) => {
    try {
        const delete_user = await helpdesk.findOneAndDelete({ _id: req.params.id });
        if (delete_user.file_mimetype === "text/link") {
            console.log(delete_user.file_mimetype);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log(delete_user.file_mimetype);
            await unlinkAsync(delete_user.file_path);
            res.status(200).json(delete_user + "User deleted");
        }
    } catch (err) {
        console.log(err);
    }
});
router.post("/helpdesk_admission_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new helpdesk({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/helpdesk_admission",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new helpdesk({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Ragging

router.get("/Anti_Ragging", async(req, res) => {
    const details = await Ragging.find();
    if (details.length === 0) {
        res.status(200).json(false);
    } else {
        res.status(200).json(details);
    }
});
router.delete("/deleteAntiRagging/:id", async(req, res) => {
    try {
        const delete_user = await Ragging.findOneAndDelete({ _id: req.params.id });
        if (delete_user.file_mimetype === "text/link") {
            console.log(delete_user.file_mimetype);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log(delete_user.file_mimetype);
            await unlinkAsync(delete_user.file_path);
            res.status(200).json(delete_user + "User deleted");
        }
    } catch (err) {
        console.log(err);
    }
});
router.post("/AntiRagging_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new Ragging({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/admission_Anti_Ragging",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Ragging({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Biochemistry Photo Gallery
router.get("/Bio_Photo_Gallery", async(req, res) => {
    const details = await Bio_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Bio_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Bio_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Bio_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Bio_Photo_Gallery.find()
            if (dat.length <= 5) {

                const file = new Bio_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send("Delete previous Images there is only a limit of 6 images");
        }
    }
);

// History Photo Gallery
router.get("/Hist_Photo_Gallery", async(req, res) => {
    const details = await Hist_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Hist_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Hist_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Hist_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Hist_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Hist_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }

        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Hindi Photo Gallery
router.get("/Hin_Photo_Gallery", async(req, res) => {
    const details = await Hin_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Hin_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Hin_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Hin_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Hin_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Hin_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// English Photo Gallery
router.get("/Eng_Photo_Gallery", async(req, res) => {
    const details = await Eng_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Eng_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Eng_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eng_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Eng_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Eng_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Economics Photo Gallery
router.get("/Eco_Photo_Gallery", async(req, res) => {
    const details = await Eco_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Eco_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Eco_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eco_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Eco_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Eco_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Commerce Photo Gallery
router.get("/Com_Photo_Gallery", async(req, res) => {
    const details = await Com_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Com_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Com_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Com_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Com_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Com_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Chemistry Photo Gallery
router.get("/Chem_Photo_Gallery", async(req, res) => {
    const details = await Chem_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Chem_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Chem_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Chem_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Chem_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Chem_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Botany Photo Gallery
router.get("/Bot_Photo_Gallery", async(req, res) => {
    const details = await Bot_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Bot_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Bot_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Bot_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Bot_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Bot_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Math Photo Gallery
router.get("/Math_Photo_Gallery", async(req, res) => {
    const details = await Math_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Math_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Math_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Math_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Math_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Math_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Music Photo Gallery
router.get("/Music_Photo_Gallery", async(req, res) => {
    const details = await Music_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Music_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Music_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Music_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Music_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Music_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// NHE Photo Gallery
router.get("/NHE_Photo_Gallery", async(req, res) => {
    const details = await NHE_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_NHE_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await NHE_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/NHE_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await NHE_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new NHE_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Philo Photo Gallery
router.get("/Philo_Photo_Gallery", async(req, res) => {
    const details = await Philo_Photo_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Philo_Photo_Gallery/:id", async(req, res) => {
    const delete_user = await Philo_Photo_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Philo_Photo_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Philo_Photo_Gallery.find()
            if (dat.length <= 5) {
                const file = new Philo_Photo_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Physical_Education Gallery
router.get("/PE_Gallery", async(req, res) => {
    const details = await PE_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_PE_Gallery/:id", async(req, res) => {
    const delete_user = await PE_Gallery.findOneAndDelete({ _id: req.params.id });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/PE_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await PE_Gallery.find()
            if (dat.length <= 5) {
                const file = new PE_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Physics Gallery
router.get("/Physics_Gallery", async(req, res) => {
    const details = await Physics_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Physics_Gallery/:id", async(req, res) => {
    const delete_user = await Physics_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Physics_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Physics_Gallery.find()
            if (dat.length <= 5) {
                const file = new Physics_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Zoology Gallery
router.get("/Zoology_Gallery", async(req, res) => {
    const details = await Zoology_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Zoology_Gallery/:id", async(req, res) => {
    const delete_user = await Zoology_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Zoology_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Zoology_Gallery.find()
            if (dat.length <= 5) {
                const file = new Zoology_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Sanskrit Gallery
router.get("/Sanskrit_Gallery", async(req, res) => {
    const details = await Sanskrit_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Sanskrit_Gallery/:id", async(req, res) => {
    const delete_user = await Sanskrit_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Sanskrit_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Sanskrit_Gallery.find()
            if (dat.length <= 5) {
                const file = new Sanskrit_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Psychology Gallery
router.get("/Psychology_Gallery", async(req, res) => {
    const details = await Psychology_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_Psychology_Gallery/:id", async(req, res) => {
    const delete_user = await Psychology_Gallery.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Psychology_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Psychology_Gallery.find()
            if (dat.length <= 5) {
                const file = new Psychology_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// PS Gallery
router.get("/PS_Gallery", async(req, res) => {
    const details = await PS_Gallery.find();
    res.status(200).json(details);
});

router.delete("/delete_PS_Gallery/:id", async(req, res) => {
    const delete_user = await PS_Gallery.findOneAndDelete({ _id: req.params.id });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/PS_Gallery_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await PS_Gallery.find()
            if (dat.length <= 5) {
                const file = new PS_Gallery({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// About Us Gallery
router.get("/About_Gallery", async(req, res) => {
    const details = await Gallery_About.find();
    res.status(200).json(details);
});

router.delete("/delete_Gallery_About/:id", async(req, res) => {
    const delete_user = await Gallery_About.findOneAndDelete({
        _id: req.params.id,
    });
    console.log(delete_user.file_path);
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Gallery_About_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Gallery_About.find()
            if (dat.length <= 25) {
                const file = new Gallery_About({
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await file.save();
                res.send("file uploaded successfully.");
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Staff Forms

router.get("/StaffZone_forms", async(req, res) => {
    const details = await Staff_Forms.find();
    res.status(200).json(details);
});
router.delete("/delete_StaffZone_forms/:id", async(req, res) => {
    const delete_user = await Staff_Forms.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/StaffZone_forms_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new Staff_Forms({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/StaffZone_forms_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Staff_Forms({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Archives Notices

router.get("/Archives_notice", async(req, res) => {
    try {
        const files = await Archives_Notice.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.status(200).send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post("/Archive_notice_add", async(req, res) => {
    try {
        var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
        const { file_path, file_mimetype, date, title, date_exp, new_ } = req.body;
        if (!title || !date || !file_path) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        if (new_) {
            if (date_regex.test(date_exp)) {
                const user = new Archives_Notice({
                    date,
                    title,
                    date_exp,
                    new_,
                    file_path: file_path,
                    file_mimetype: file_mimetype,
                });
                await user.save();
                return res.status(200).json({ message: "Details Saved Successfully " });
            } else {
                return res.status(401).json({ message: "Expiry date invalid " });
            }
        } else {
            const user = new Archives_Notice({
                date,
                title,
                new_,
                file_path: file_path,
                file_mimetype: file_mimetype,
            });
            await user.save();
            return res.status(200).json({ message: "Details Saved Successfully " });
        }
    } catch (err) {
        console.log(err);
    }
});
router.delete("/delete_archives_notice/:id", async(req, res) => {
    const delete_user = await Archives_Notice.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
//  Bulletin Notices

router.get("/Bulletins_notice", async(req, res) => {
    try {
        const files = await Bulletins_Notice.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.status(200).send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post("/Bulletins_notice_add", async(req, res) => {
    try {
        var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
        const { file_path, file_mimetype, date, title, date_exp, new_ } = req.body;
        if (!title || !date || !file_path) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        if (new_) {
            if (date_regex.test(date_exp)) {
                const user = await Bulletins_Notice.find();
                if (user.length >= 12) {
                    return res
                        .status(402)
                        .json({ message: "Delete some previous bulletin" });
                } else {
                    const user_save = new Bulletins_Notice({
                        date,
                        title,
                        date_exp,
                        new_,
                        file_path: file_path,
                        file_mimetype: file_mimetype,
                    });
                    await user_save.save();
                    return res
                        .status(200)
                        .json({ message: "Details Saved Successfully " });
                }
            } else {
                return res.status(401).json({ message: "Expiry date invalid " });
            }
        } else {
            const user = await Bulletins_Notice.find();
            if (user.length >= 12) {
                return res
                    .status(402)
                    .json({ message: "Delete some previous bulletin" });
            } else {
                const user_save = new Bulletins_Notice({
                    date,
                    title,
                    new_,
                    file_path: file_path,
                    file_mimetype: file_mimetype,
                });
                await user_save.save();
                return res.status(200).json({ message: "Details Saved Successfully " });
            }
            // const user = new Bulletins_Notice({ date, title, new_, file_path: file_path, file_mimetype: file_mimetype });
            // await user.save();
            // return res.status(200).json({ message: "Details Saved Successfully " })
        }
    } catch (err) {
        console.log(err);
    }
});
router.delete("/delete_Bulletins_notice/:id", async(req, res) => {
    try {
        const delete_user = await Bulletins_Notice.findOneAndDelete({
            _id: req.params.id,
        });
        if (delete_user.file_mimetype === "text/link") {
            res.status(200).json(delete_user + "User deleted");
        } else {
            await unlinkAsync(delete_user.file_path);
            res.status(200).json(delete_user + "User deleted");
        }
    } catch (err) {
        console.log("error in deleting the bulletins");
    }
});
// Public Notices

router.get("/Public_notice", async(req, res) => {
    try {
        const files = await Public_Notice.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.status(200).send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.delete("/delete_Public_notice/:id", async(req, res) => {
    const delete_user = await Public_Notice.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.delete("/delete_Public_archive_notice/:id", async(req, res) => {
    const delete_user = await Public_Notice.findOneAndDelete({
        _id: req.params.id,
    });
    res.status(200).json(delete_user + "User deleted");
});
router.post("/Public_notice_add_link", async(req, res) => {
    try {
        var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
        const { file, date, title, date_exp, new_ } = req.body;
        if (!title || !date || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        if (new_) {
            if (date_regex.test(date_exp)) {
                const user = new Public_Notice({
                    date,
                    title,
                    date_exp,
                    new_,
                    file_path: file,
                    file_mimetype: "text/link",
                });
                await user.save();
                return res.status(200).json({ message: "Details Saved Successfully " });
            } else {
                return res.status(401).json({ message: "Expiry date invalid " });
            }
        } else {
            const user = new Public_Notice({
                date,
                title,
                new_,
                file_path: file,
                file_mimetype: "text/link",
            });
            await user.save();
            return res.status(200).json({ message: "Details Saved Successfully " });
        }
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/Public_notice_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { date, title, date_exp, new_ } = req.body;
            const { path, mimetype } = req.file;
            var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (new_) {
                if (date_regex.test(date_exp)) {
                    const user = new Public_Notice({
                        date,
                        title,
                        date_exp,
                        new_,
                        file_path: path,
                        file_mimetype: mimetype,
                    });
                    await user.save();
                    console.log("Details Saved Successfully");
                    return res
                        .status(200)
                        .json({ message: "Details Saved Successfully " });
                } else {
                    return res.status(401).json({ message: "Expiry date invalid " });
                }
            } else {
                const user = new Public_Notice({
                    date,
                    title,
                    new_,
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await user.save();
                console.log("Details Saved Successfully");
                return res.status(200).json({ message: "Details Saved Successfully " });
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Staff Notices

router.get("/Staff_notice", async(req, res) => {
    try {
        const files = await Staff_Notice.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.status(200).send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.delete("/delete_Staff_notice/:id", async(req, res) => {
    const delete_user = await Staff_Notice.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.delete("/delete_Staff_archive_notice/:id", async(req, res) => {
    const delete_user = await Staff_Notice.findOneAndDelete({
        _id: req.params.id,
    });
    res.status(200).json(delete_user + "User deleted");
});
router.post("/Staff_notice_add_link", async(req, res) => {
    try {
        var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
        const { file, date, title, date_exp, new_ } = req.body;
        if (!title || !date || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" });
        }
        if (new_) {
            if (date_regex.test(date_exp)) {
                const user = new Staff_Notice({
                    date,
                    title,
                    date_exp,
                    new_,
                    file_path: file,
                    file_mimetype: "text/link",
                });
                await user.save();
                return res.status(200).json({ message: "Details Saved Successfully " });
            } else {
                return res.status(401).json({ message: "Expiry date invalid " });
            }
        } else {
            const user = new Staff_Notice({
                date,
                title,
                new_,
                file_path: file,
                file_mimetype: "text/link",
            });
            await user.save();
            return res.status(200).json({ message: "Details Saved Successfully " });
        }
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/Staff_notice_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { date, title, date_exp, new_ } = req.body;
            const { path, mimetype } = req.file;
            var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (new_) {
                if (date_regex.test(date_exp)) {
                    const user = new Staff_Notice({
                        date,
                        title,
                        date_exp,
                        new_,
                        file_path: path,
                        file_mimetype: mimetype,
                    });
                    await user.save();
                    console.log("Details Saved Successfully");
                    return res
                        .status(200)
                        .json({ message: "Details Saved Successfully " });
                } else {
                    return res.status(401).json({ message: "Expiry date invalid " });
                }
            } else {
                const user = new Staff_Notice({
                    date,
                    title,
                    new_,
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await user.save();
                console.log("Details Saved Successfully");
                return res.status(200).json({ message: "Details Saved Successfully " });
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Student Notices

router.get("/Student_notice", async(req, res) => {
    try {
        const files = await Student_Notice.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.status(200).send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.delete("/delete_Student_notice/:id", async(req, res) => {
    const delete_user = await Student_Notice.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.delete("/delete_Student_archive_notice/:id", async(req, res) => {
    const delete_user = await Student_Notice.findOneAndDelete({
        _id: req.params.id,
    });
    res.status(200).json(delete_user + "User deleted");
});
router.post("/Student_notice_add_link", async(req, res) => {
    try {
        var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
        const { file, date, title, date_exp, new_ } = req.body;
        if (!title || !date || !file) {
            return res.status(400).json({ error: "Fill the Admission Details Properly" });
        }
        if (new_) {
            if (date_regex.test(date_exp)) {
                const user = new Student_Notice({
                    date,
                    title,
                    date_exp,
                    new_,
                    file_path: file,
                    file_mimetype: "text/link",
                });
                await user.save();
                return res.status(200).json({ message: "Details Saved Successfully " });
            } else {
                return res.status(401).json({ message: "Expiry date invalid " });
            }
        } else {
            const user = new Student_Notice({
                date,
                title,
                new_,
                file_path: file,
                file_mimetype: "text/link",
            });
            await user.save();
            return res.status(200).json({ message: "Details Saved Successfully " });
        }
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/Student_notice_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { date, title, date_exp, new_ } = req.body;
            const { path, mimetype } = req.file;
            var date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
            if (new_) {
                if (date_regex.test(date_exp)) {
                    const user = new Student_Notice({
                        date,
                        title,
                        date_exp,
                        new_,
                        file_path: path,
                        file_mimetype: mimetype,
                    });
                    await user.save();
                    console.log("Details Saved Successfully");
                    return res
                        .status(200)
                        .json({ message: "Details Saved Successfully " });
                } else {
                    return res.status(401).json({ message: "Expiry date invalid " });
                }
            } else {
                const user = new Student_Notice({
                    date,
                    title,
                    new_,
                    file_path: path,
                    file_mimetype: mimetype,
                });
                await user.save();
                console.log("Details Saved Successfully");
                return res.status(200).json({ message: "Details Saved Successfully " });
            }
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Student Union
router.post("/delete_Student_union/:id", async(req, res) => {
    const delete_user = await Student_union.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Student_union_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Student_union.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Student_union_fac/:id", async(req, res) => {
    const delete_user = await Student_union.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Student_union_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Student_union.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Student_union.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Student_union", async(req, res) => {
    try {
        const files = await Student_union.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Student_union_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Student_union.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Student_union_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Student_union.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Student_union_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Student_union.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Student_union_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Student_union({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Student_union_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Student_union.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Student_union.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Student_union_download/:id", async(req, res) => {
    try {
        const file = await Student_union.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Add on Courses
router.post("/delete_Courses/:id", async(req, res) => {
    const delete_user = await Courses.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Courses_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Courses.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Courses_fac/:id", async(req, res) => {
    const delete_user = await Courses.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Courses_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Courses.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Courses.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Courses", async(req, res) => {
    try {
        const files = await Courses.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Courses_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Courses.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Courses_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Courses.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Courses_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Courses.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Courses_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Courses({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Courses_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Courses.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Courses.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Courses_download/:id", async(req, res) => {
    try {
        const file = await Courses.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Placement Cell
router.post("/delete_Placement_cell/:id", async(req, res) => {
    const delete_user = await Placement_cell.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Placement_cell_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Placement_cell.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Placement_cell_fac/:id", async(req, res) => {
    const delete_user = await Placement_cell.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Placement_cell_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Placement_cell.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Placement_cell.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Placement_cell", async(req, res) => {
    try {
        const files = await Placement_cell.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Placement_cell_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Placement_cell.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Placement_cell_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Placement_cell.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Placement_cell_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Placement_cell.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Placement_cell_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Placement_cell({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Placement_cell_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Placement_cell.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Placement_cell.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Placement_cell_download/:id", async(req, res) => {
    try {
        const file = await Placement_cell.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Equal Opportunities
router.post("/delete_Equal_opp/:id", async(req, res) => {
    const delete_user = await Equal_opp.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Equal_opp_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Equal_opp.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Equal_opp_fac/:id", async(req, res) => {
    const delete_user = await Equal_opp.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Equal_opp_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Equal_opp.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Equal_opp.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Equal_opp", async(req, res) => {
    try {
        const files = await Equal_opp.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Equal_opp_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Equal_opp.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Equal_opp_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Equal_opp.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Equal_opp_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Equal_opp.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Equal_opp_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Equal_opp({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Equal_opp_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Equal_opp.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Equal_opp.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Equal_opp_download/:id", async(req, res) => {
    try {
        const file = await Equal_opp.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});


// Student Zone Feedback

router.get("/Studfeedback", async(req, res) => {
    // res.send(`Hello World from the server`);
    const details = await Feedback.find();
    res.status(200).json(details);
});

router.post("/StudentZone_feedback", async(req, res) => {
    const { Link, Caption, text } = req.body;
    if (!Link || !Caption) {
        return res
            .status(400)
            .json({ error: "Fill the Admission Details Properly" });
    }
    const user = new Feedback(req.body);
    await user.save();
    console.log("Details Saved Successfully");
    return res.status(200).json({ message: "Details Saved Successfully " });
});
router.delete("/deletestudfeedback/:id", async(req, res) => {
    const delete_user = await Feedback.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(delete_user + "User deleted");
});


// Student-Zone Forms

router.get("/StudentZone_forms", async(req, res) => {
    const details = await Student_forms.find();
    res.status(200).json(details);
});
router.delete("/delete_StudentZone_forms/:id", async(req, res) => {
    const delete_user = await Student_forms.findOneAndDelete({
        _id: req.params.id,
    });
    if (delete_user.file_mimetype === "text/link") {
        console.log(delete_user.file_mimetype);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(delete_user.file_mimetype);
        await unlinkAsync(delete_user.file_path);
        res.status(200).json(delete_user + "User deleted");
    }
});
router.post("/StudentZone_forms_add_link", async(req, res) => {
    try {
        console.log(req.body);
        const { file, link, title } = req.body;
        if (!title || !link || !file) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }
        const user = new Student_forms({
            title,
            link,
            file_path: file,
            file_mimetype: "text/link",
        });
        await user.save();
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/StudentZone_forms_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Student_forms({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Teacher-In Charge

router.get("/Teacher_In_Charge", async(req, res) => {
    const details = await Teacher.find();
    res.status(200).json(details);
});
router.delete("/delete_Teacher_In_Charge/:id", async(req, res) => {
    const delete_user = await Teacher.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Teacher_In_Charge_add",
    async(req, res) => {
        try {
            const { title, link, Tic1, Tic2 } = req.body;
            console.log(title, link, Tic1, Tic2)
            const file = new Teacher({
                title,
                link,
                Tic1,
                Tic2
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// College Academics Calendar

router.get("/C_Acad_Cal", async(req, res) => {
    const details = await C_Acad_Cal.find();
    res.status(200).json(details);
});
router.delete("/delete_C_Acad_Cal/:id", async(req, res) => {
    const delete_user = await C_Acad_Cal.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/C_Acad_Cal_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new C_Acad_Cal({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// University Academics Calendar

router.get("/U_Acad_Cal", async(req, res) => {
    const details = await U_Acad_Cal.find();
    res.status(200).json(details);
});
router.delete("/delete_U_Acad_Cal/:id", async(req, res) => {
    const delete_user = await U_Acad_Cal.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/U_Acad_Cal_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new U_Acad_Cal({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Magzine and Newsletter
router.post("/delete_Magz_and_News_res_fac/:id", async(req, res) => {
    const delete_user = await Magz_and_News.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Magz_and_News_res_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Magz_and_News.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.get("/Magz_and_News_res", async(req, res) => {
    try {
        const files = await Magz_and_News.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post("/Magz_and_News_res_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Magz_and_News({
            title: title,
            description: description,
        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Magz_and_News_res_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path,mimetype)
            const dat = await Magz_and_News.findOneAndUpdate({ _id: req.params.id }, {
                $push: {
                    "img_data.file_path": {
                        file_path1: path,
                        file_mimetype1: mimetype,
                    },
                },
            });
            // console.log(dat)
            if (dat) {
                res.status(200).send("file uploaded successfully.");
            }
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Magz_and_News_res_download/:id", async(req, res) => {
    try {
        const file = await Magz_and_News.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Useful Links
router.post("/delete_Useful_Links/:id", async(req, res) => {
    const delete_user = await Useful_Links.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Useful_Links_res_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Useful_Links.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.get("/Useful_Links_res", async(req, res) => {
    try {
        const files = await Useful_Links.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post("/Useful_Links_res_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Useful_Links({
            title: title,
            description: description,
        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Useful_Links_res_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path,mimetype)
            const dat = await Useful_Links.findOneAndUpdate({ _id: req.params.id }, {
                $push: {
                    "img_data.file_path": {
                        file_path1: path,
                        file_mimetype1: mimetype,
                    },
                },
            });
            // console.log(dat)
            if (dat) {
                res.status(200).send("file uploaded successfully.");
            }
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Useful_Links_res_download/:id", async(req, res) => {
    try {
        const file = await Useful_Links.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Research
router.post("/delete_research_fac/:id", async(req, res) => {
    const delete_user = await File.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_research_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await File.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.get("/research", async(req, res) => {
    try {
        const files = await File.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post("/research_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new File({
            title: title,
            description: description,
        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/research_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path,mimetype)
            const dat = await File.findOneAndUpdate({ _id: req.params.id }, {
                $push: {
                    "img_data.file_path": {
                        file_path1: path,
                        file_mimetype1: mimetype,
                    },
                },
            });
            // console.log(dat)
            if (dat) {
                res.status(200).send("file uploaded successfully.");
            }
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/research_download/:id", async(req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Student Facilities
router.post("/delete_Student_Facilities_fac/:id", async(req, res) => {
    const delete_user = await Student_Facilities.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Student_Facilities_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Student_Facilities.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.get("/Student_Facilities", async(req, res) => {
    try {
        const files = await Student_Facilities.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post("/Student_Facilities_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Student_Facilities({
            title: title,
            description: description,
        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Student_Facilities_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Student_Facilities.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Student_Facilities.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Student_Facilities_download/:id", async(req, res) => {
    try {
        const file = await Student_Facilities.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Academics Facilities
router.post("/delete_Academics_Facilities_fac/:id", async(req, res) => {
    const delete_user = await Acad_Facilities.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Academics_Facilities_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Acad_Facilities.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.get("/Academics_Facilities", async(req, res) => {
    try {
        const files = await Acad_Facilities.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post("/Academics_Facilities_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Acad_Facilities({
            title: title,
            description: description,
        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Academics_Facilities_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Acad_Facilities.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Acad_Facilities.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Academics_Facilities_download/:id", async(req, res) => {
    try {
        const file = await Acad_Facilities.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// Resources Centre for Innovation
router.post("/delete_Resource_centre_fac/:id", async(req, res) => {
    const delete_user = await Resources_Innovation.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Resource_centre_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Resources_Innovation.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.get("/Resource_centre", async(req, res) => {
    try {
        const files = await Resources_Innovation.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post("/Resource_centre_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Resources_Innovation({
            title: title,
            description: description,
        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Resource_center_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Resources_Innovation.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Resources_Innovation.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },

                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Resource_center_download/:id", async(req, res) => {
    try {
        const file = await Resources_Innovation.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});


// Biochemistry Publications
router.post("/delete_Bio_Publications/:id", async(req, res) => {
    const delete_user = await Bio_Publications.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Bio_Publications_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Bio_Publications.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Bio_Publications_fac/:id", async(req, res) => {
    const delete_user = await Bio_Publications.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Bio_Publications_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Bio_Publications.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Bio_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Bio_Publications", async(req, res) => {
    try {
        const files = await Bio_Publications.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Bio_Publications_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Bio_Publications.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Bio_Publications_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bio_Publications.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Bio_Publications_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Bio_Publications.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Bio_Publications_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Bio_Publications({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Bio_Publications_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Bio_Publications.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Bio_Publications.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Bio_Publications_download/:id", async(req, res) => {
    try {
        const file = await Bio_Publications.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// Biochemistry Student Achievements
router.post("/delete_Bio_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Bio_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Bio_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Bio_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Bio_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Bio_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Bio_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Bio_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Bio_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Bio_Student_Achievement", async(req, res) => {
    try {
        const files = await Bio_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Bio_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Bio_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Bio_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bio_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Bio_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Bio_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Bio_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Bio_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Bio_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Bio_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Bio_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Bio_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Bio_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Sanskrit Student Achievements
router.post("/delete_Sans_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Sans_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Sans_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Sans_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Sans_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Sans_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Sans_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Sans_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Sans_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Sans_Student_Achievement", async(req, res) => {
    try {
        const files = await Sans_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Sans_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Sans_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Sans_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Sans_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Sans_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Sans_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Sans_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Sans_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Sans_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Sans_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Sans_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Sans_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Sans_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Zoology Student Achievements
router.post("/delete_Zoo_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Zoo_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Zoo_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Zoo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Zoo_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Zoo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Zoo_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Zoo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Zoo_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Zoo_Student_Achievement", async(req, res) => {
    try {
        const files = await Zoo_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Zoo_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Zoo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Zoo_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Zoo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Zoo_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Zoo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Zoo_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Zoo_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Zoo_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Zoo_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Zoo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Zoo_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Zoo_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Chemistry Student Achievements
router.post("/delete_Chem_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Chem_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Chem_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Chem_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Chem_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Chem_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Chem_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Chem_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Chem_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Chem_Student_Achievement", async(req, res) => {
    try {
        const files = await Chem_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Chem_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Chem_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Chem_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Chem_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Chem_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Chem_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Chem_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Chem_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Chem_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Chem_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Chem_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Chem_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Chem_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// Botany Student Achievements
router.post("/delete_Bot_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Bot_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Bot_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Bot_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Bot_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Bot_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Bot_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Bot_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Bot_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Bot_Student_Achievement", async(req, res) => {
    try {
        const files = await Bot_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Bot_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Bot_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Bot_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bot_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Bot_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Bot_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Bot_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Bot_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Bot_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Bot_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Bot_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Bot_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Bot_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Commerce Student Achievements

router.post("/delete_Com_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Com_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Com_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Com_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Com_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Com_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Com_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Com_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Com_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Com_Student_Achievement", async(req, res) => {
    try {
        const files = await Com_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Com_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Com_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Com_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Com_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Com_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Com_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Com_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Com_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Com_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Com_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Com_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Com_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Com_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Economics Student Achievements

router.post("/delete_Eco_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Eco_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Eco_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Eco_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Eco_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Eco_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Eco_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Eco_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Eco_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Eco_Student_Achievement", async(req, res) => {
    try {
        const files = await Eco_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Eco_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Eco_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Eco_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eco_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Eco_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Eco_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Eco_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Eco_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Eco_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Eco_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Eco_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Eco_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Eco_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// English Student Achievements

router.post("/delete_Eng_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Eng_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Eng_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Eng_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Eng_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Eng_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Eng_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Eng_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Eng_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Eng_Student_Achievement", async(req, res) => {
    try {
        const files = await Eng_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Eng_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Eng_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Eng_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eng_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Eng_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Eng_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Eng_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Eng_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Eng_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Eng_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Eng_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Eng_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Eng_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Hindi Student Achievements

router.post("/delete_Hin_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Hin_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Hin_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Hin_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Hin_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Hin_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Hin_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Hin_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Hin_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Hin_Student_Achievement", async(req, res) => {
    try {
        const files = await Hin_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Hin_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Hin_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Hin_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Hin_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Hin_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Hin_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Hin_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Hin_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Hin_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Hin_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Hin_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Hin_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Hin_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// History Student Achievements

router.post("/delete_His_Student_Achievement/:id", async(req, res) => {
    const delete_user = await His_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_His_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await His_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_His_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await His_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_His_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await His_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await His_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/His_Student_Achievement", async(req, res) => {
    try {
        const files = await His_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/His_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await His_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/His_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await His_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/His_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await His_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/His_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new His_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/His_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await His_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await His_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/His_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await His_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Mathematics Student Achievements

router.post("/delete_Math_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Math_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Math_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Math_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Math_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Math_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Math_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Math_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Math_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Math_Student_Achievement", async(req, res) => {
    try {
        const files = await Math_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Math_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Math_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Math_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Math_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Math_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Math_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Math_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Math_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Math_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Math_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Math_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Math_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Math_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Music Student Achievements

router.post("/delete_Music_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Music_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Music_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Music_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Music_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Music_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Music_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Music_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Music_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Music_Student_Achievement", async(req, res) => {
    try {
        const files = await Music_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Music_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Music_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Music_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Music_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Music_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Music_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Music_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Music_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Music_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Music_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Music_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Music_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Music_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// NHE Student Achievements

router.post("/delete_NHE_Student_Achievement/:id", async(req, res) => {
    const delete_user = await NHE_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_NHE_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await NHE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_NHE_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await NHE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_NHE_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await NHE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await NHE_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/NHE_Student_Achievement", async(req, res) => {
    try {
        const files = await NHE_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/NHE_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await NHE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/NHE_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await NHE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/NHE_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await NHE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/NHE_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new NHE_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/NHE_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await NHE_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await NHE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/NHE_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await NHE_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Philosophy Student Achievements

router.post("/delete_Philo_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Philo_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Philo_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Philo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Philo_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Philo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Philo_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Philo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Philo_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Philo_Student_Achievement", async(req, res) => {
    try {
        const files = await Philo_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Philo_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Philo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Philo_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Philo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Philo_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Philo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Philo_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Philo_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Philo_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Philo_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Philo_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Philo_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Philo_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// PE Student Achievements

router.post("/delete_PE_Student_Achievement/:id", async(req, res) => {
    const delete_user = await PE_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_PE_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await PE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_PE_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await PE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_PE_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await PE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await PE_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/PE_Student_Achievement", async(req, res) => {
    try {
        const files = await PE_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/PE_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await PE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/PE_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await PE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/PE_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await PE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/PE_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new PE_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/PE_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await PE_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await PE_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/PE_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await PE_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Physics Student Achievements

router.post("/delete_Phy_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Phy_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Phy_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Phy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Phy_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Phy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Phy_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Phy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Phy_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Phy_Student_Achievement", async(req, res) => {
    try {
        const files = await Phy_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Phy_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Phy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Phy_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Phy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Phy_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Phy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Phy_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Phy_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Phy_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Phy_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Phy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Phy_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Phy_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Political Science Student Achievements

router.post("/delete_PS_Student_Achievement/:id", async(req, res) => {
    const delete_user = await PS_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_PS_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await PS_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_PS_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await PS_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_PS_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await PS_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await PS_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/PS_Student_Achievement", async(req, res) => {
    try {
        const files = await PS_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/PS_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await PS_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/PS_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await PS_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/PS_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await PS_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/PS_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new PS_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/PS_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await PS_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await PS_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/PS_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await PS_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Psychology Student Achievements

router.post("/delete_Psy_Student_Achievement/:id", async(req, res) => {
    const delete_user = await Psy_Student_Achieve.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Psy_Student_Achievement_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Psy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Psy_Student_Achievement_fac/:id", async(req, res) => {
    const delete_user = await Psy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Psy_Student_Achievement_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Psy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Psy_Student_Achieve.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Psy_Student_Achievement", async(req, res) => {
    try {
        const files = await Psy_Student_Achieve.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Psy_Student_Achievement_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Psy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Psy_Student_Achievement_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Psy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Psy_Student_Achievement_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Psy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Psy_Student_Achievement_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Psy_Student_Achieve({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Psy_Student_Achievement_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Psy_Student_Achieve.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Psy_Student_Achieve.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Psy_Student_Achievement_download/:id", async(req, res) => {
    try {
        const file = await Psy_Student_Achieve.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// Biochemistry Research And Publications
router.post("/delete_Bio_Research_facilities/:id", async(req, res) => {
    const delete_user = await Bio_Research_fac.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Bio_Research_facilities_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Bio_Research_fac.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Bio_Research_facilities_fac/:id", async(req, res) => {
    const delete_user = await Bio_Research_fac.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Bio_Research_facilities_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Bio_Research_fac.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Bio_Research_fac.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Bio_Research_facilities", async(req, res) => {
    try {
        const files = await Bio_Research_fac.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Bio_Research_facilities_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Bio_Research_fac.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Bio_Research_facilities_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bio_Research_fac.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Bio_Research_facilities_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Bio_Research_fac.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Bio_Research_facilities_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Bio_Research_fac({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Bio_Research_facilities_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Bio_Research_fac.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Bio_Research_fac.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Bio_Research_facilities_upload_download/:id", async(req, res) => {
    try {
        const file = await Bio_Research_fac.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// Biochemistry Association
router.post("/delete_Bio_Association/:id", async(req, res) => {
    const delete_user = await Bio_Association.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Bio_Association_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Bio_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Bio_Association_fac/:id", async(req, res) => {
    const delete_user = await Bio_Association.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Bio_Association_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Bio_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Bio_Association.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Bio_Association", async(req, res) => {
    try {
        const files = await Bio_Association.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Bio_Association_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Bio_Association.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Bio_Association_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bio_Association.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Bio_Association_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Bio_Association.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Bio_Association_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Bio_Association({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Bio_Association_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Bio_Association.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Bio_Association.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Bio_Association_download/:id", async(req, res) => {
    try {
        const file = await Bio_Association.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Botany Association
router.post("/delete_Bot_Association/:id", async(req, res) => {
    const delete_user = await Bot_Association.findOne({ _id: req.params.id });
    const arr = delete_user.img_data.file_path;
    if (arr.length === 0) {
        await delete_user.deleteOne({ _id: req.params.id });
        // console.log(delete_user.img_data.file_path)
        res.status(200).json(delete_user + "User deleted");
    } else {
        res.status(400).json("First Delete all the images related to this section");
    }
});
router.post("/delete_img_Bot_Association_fac/:id", async(req, res) => {
    // console.log(req.body.file_path1)
    const delete_user = await Bot_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.file_path": { _id: req.body.pid } } });
    await unlinkAsync(req.body.file_path1);
    res.status(200).json(delete_user + "User deleted");
});

router.post("/delete_pdf_link_Bot_Association_fac/:id", async(req, res) => {
    const delete_user = await Bot_Association.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "img_data.pdf_path": {
                pdf_path1: "../daulatram/public/images/uploads",
                pdf_mimetype1: null,
                value: null,
            },
        },
    });
    const pdf = delete_user.img_data.pdf_path;

    if (pdf[0].pdf_mimetype1 !== "text/link") {
        console.log(pdf[0].pdf_mimetype1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log(pdf[0].pdf_mimetype1);
        res.status(200).json(delete_user + "User deleted");
    }
});

router.post("/delete_Bot_Association_para/:id", async(req, res) => {
    try {
        const { pid, type } = req.body;
        if (type === "para") {
            const delete_user = await Bot_Association.findOneAndUpdate({ _id: req.params.id }, { $pull: { "img_data.para": { _id: pid } } });
            res.status(200).json(delete_user + "User deleted");
        } else {
            const delete_user = await Bot_Association.findOneAndDelete({
                _id: req.params.id,
            });
            const img = delete_user.img_data.file_path;
            await unlinkAsync(img[0].file_path1);
            res.status(202).json(delete_user + "User deleted");
        }
    } catch (error) {
        console.log(error);
    }
});


router.get("/Bot_Association", async(req, res) => {
    try {
        const files = await Bot_Association.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Bot_Association_add_para/:id",
    async(req, res) => {
        try {
            const { para1 } = req.body;
            await Bot_Association.findOneAndUpdate({ _id: req.params.id }, { $push: { "img_data.para": { para1: para1 } } });
            res.status(200).send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);


router.post(
    "/Bot_Association_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bot_Association.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Bot_Association_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Bot_Association.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});

router.post("/Bot_Association_upload", async(req, res) => {
    try {
        // console.log(req.body)
        const { title, description } = req.body;
        const file = new Bot_Association({
            title: title,
            description: description,
            "img_data.pdf_path": { value: false },

        });
        await file.save();
        res.send("file uploaded successfully.");
    } catch (error) {
        // console.log(error)
        res.status(400).send("Error occur while uploading data");
    }
});
router.post(
    "/Bot_Association_img_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            const dat = await Bot_Association.findOne({ _id: req.params.id })
            const arr = dat.img_data.file_path;
            if (arr.length <= 4) {
                const data = await Bot_Association.findOneAndUpdate({ _id: req.params.id }, {
                    $push: {
                        "img_data.file_path": {
                            file_path1: path,
                            file_mimetype1: mimetype,
                        },
                    },
                });
                // console.log(dat)
                if (data) {
                    res.status(200).send("file uploaded successfully.");
                }
            } else {
                await unlinkAsync(path);
                res.status(402).send("Delete previous Images there is only a limit of 6 images");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Bot_Association_download/:id", async(req, res) => {
    try {
        const file = await Bot_Association.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Economics Program Offered

router.get("/Eco_ProgramOffered", async(req, res) => {
    const details = await Eco_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Eco_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Eco_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eco_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eco_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Economics Awards

router.get("/Eco_Awards", async(req, res) => {
    const details = await Eco_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Eco_Awards/:id", async(req, res) => {
    const delete_user = await Eco_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});
router.post(
    "/Eco_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eco_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// English Program Offered

router.get("/Eng_ProgramOffered", async(req, res) => {
    const details = await Eng_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Eng_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Eng_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Eng_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eng_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// English Awards

router.get("/Eng_Awards", async(req, res) => {
    const details = await Eng_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Eng_Awards/:id", async(req, res) => {
    const delete_user = await Eng_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});
router.post(
    "/Eng_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eng_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Hindi Program Offered

router.get("/Hin_ProgramOffered", async(req, res) => {
    const details = await Hin_ProgramOffered.find();
    res.status(200).json(details);
});
router.delete("/delete_Hin_ProgramOffered/:id", async(req, res) => {
    const delete_user = await Hin_ProgramOffered.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Hin_ProgramOffered_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hin_ProgramOffered({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Hindi Awards

router.get("/Hin_Awards", async(req, res) => {
    const details = await Hin_Awards.find();
    res.status(200).json(details);
});
router.delete("/delete_Hin_Awards/:id", async(req, res) => {
    const delete_user = await Hin_Awards.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});
router.post(
    "/Hin_Awards_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hin_Awards({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Hindi Magazine

router.get("/Hin_Magazine", async(req, res) => {
    const details = await Hin_Magazine.find();
    res.status(200).json(details);
});
router.delete("/delete_Hin_Magazine/:id", async(req, res) => {
    const delete_user = await Hin_Magazine.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});
router.post(
    "/Hin_Magazine_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hin_Magazine({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);
// Events and Activities
router.post("/delete_Events_and_Activities/:id", async(req, res) => {
    const delete_user = await Events_and_Activities.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else if (pdf[0].pdf_mimetype1 === "text/link") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }

    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Events_and_Activities", async(req, res) => {
    try {
        const files = await Events_and_Activities.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/Events_and_Activities_file_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Events_and_Activities.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);
router.post("/Events_and_Activities_add_link/:id", async(req, res) => {
    try {
        const { link } = req.body;
        console.log(link)
        if (!link) {
            return res
                .status(400)
                .json({ error: "Fill the Admission Details Properly" });
        }

        const data = await Events_and_Activities.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                "img_data.pdf_path": {
                    pdf_path1: link,
                    pdf_mimetype1: "text/link",
                    value: true,
                },
            },
        });
        if (data) {
            // console.log(dat)
            res.status(200).send("file uploaded successfully.");
        } else {
            res.status(401).send("Unable to update link, No data found");
        }
        console.log("Details Saved Successfully");
        return res.status(200).json({ message: "Details Saved Successfully " });
    } catch (err) {
        console.log(err);
    }
});
router.post(
    "/Events_and_Activities_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            const file = new Events_and_Activities({
                title: title,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/Events_and_Activities_download/:id", async(req, res) => {
    try {
        const file = await Events_and_Activities.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// Biochemistry Faculty
router.post("/delete_bio_faculty/:id", async(req, res) => {
    const delete_user = await Bio_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/bio_faculty", async(req, res) => {
    try {
        const files = await Bio_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/bio_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bio_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/bio_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bio_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/bio_faculty_download/:id", async(req, res) => {
    try {
        const file = await Bio_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// Hindi Faculty
router.post("/delete_hin_faculty/:id", async(req, res) => {
    const delete_user = await Hin_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/hin_faculty", async(req, res) => {
    try {
        const files = await Hin_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/hin_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Hin_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/hin_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hin_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/hin_faculty_download/:id", async(req, res) => {
    try {
        const file = await Hin_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// English Faculty
router.post("/delete_eng_faculty/:id", async(req, res) => {
    const delete_user = await Eng_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/eng_faculty", async(req, res) => {
    try {
        const files = await Eng_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/eng_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eng_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/eng_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eng_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/eng_faculty_download/:id", async(req, res) => {
    try {
        const file = await Eng_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
//Philosophy
router.post("/delete_philo_faculty/:id", async(req, res) => {
    const delete_user = await philo_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/philo_faculty", async(req, res) => {
    try {
        const files = await philo_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/philo_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await philo_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/philo_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new philo_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/philo_faculty_download/:id", async(req, res) => {
    try {
        const file = await philo_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

//NHE FACULTY
router.post("/delete_NHE_faculty/:id", async(req, res) => {
    const delete_user = await NHE_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/NHE_faculty", async(req, res) => {
    try {
        const files = await NHE_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/NHE_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await NHE_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/NHE_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new NHE_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/NHE_faculty_download/:id", async(req, res) => {
    try {
        const file = await NHE_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

//Music

router.post("/delete_Music_faculty/:id", async(req, res) => {
    const delete_user = await Music_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Music_faculty", async(req, res) => {
    try {
        const files = await Music_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/Music_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Music_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/Music_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Music_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/Music_faculty_download/:id", async(req, res) => {
    try {
        const file = await Music_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Economics Faculty
router.post("/delete_eco_faculty/:id", async(req, res) => {
    const delete_user = await Eco_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/eco_faculty", async(req, res) => {
    try {
        const files = await Eco_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/eco_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eco_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/eco_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Eco_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/eco_faculty_download/:id", async(req, res) => {
    try {
        const file = await Eco_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Chemistry Faculty
router.post("/delete_chem_faculty/:id", async(req, res) => {
    const delete_user = await Chem_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/chem_faculty", async(req, res) => {
    try {
        const files = await Chem_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/chem_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Chem_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/chem_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Chem_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/chem_faculty_download/:id", async(req, res) => {
    try {
        const file = await Chem_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Botany Faculty
router.post("/delete_bot_faculty/:id", async(req, res) => {
    const delete_user = await Bot_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/bot_faculty", async(req, res) => {
    try {
        const files = await Bot_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/bot_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bot_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/bot_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Bot_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/bot_faculty_download/:id", async(req, res) => {
    try {
        const file = await Bot_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// Botany Lab Staff
router.post("/delete_bot_Lab_faculty/:id", async(req, res) => {
    const delete_user = await Bot_Lab_Staff.findOne({ _id: req.params.id });
    const img = delete_user.img_data.file_path;
    // console.log()
    if (img[0].file_path1) {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        res.status(200).json(delete_user + "User deleted");
    } else {
        console.log("Unsuccessfully deleted");
    }
});

router.get("/bot_Lab_faculty", async(req, res) => {
    try {
        const files = await Bot_Lab_Staff.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post(
    "/bot_Lab_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {

            const { title, description, DOJ } = req.body;
            const { path, mimetype } = req.file;

            const file = new Bot_Lab_Staff({
                title: title,
                description: description,
                DOJ: DOJ,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/bot_Lab_faculty_download/:id", async(req, res) => {
    try {
        const file = await Bot_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

//History Faculty
router.post("/delete_Hist_faculty/:id", async(req, res) => {
    const delete_user = await Hist_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Hist_faculty", async(req, res) => {
    try {
        const files = await Hist_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/Hist_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Hist_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/Hist_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Hist_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/Hist_faculty_download/:id", async(req, res) => {
    try {
        const file = await Hist_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
//Mathematics faculty
router.post("/delete_Math_faculty/:id", async(req, res) => {
    const delete_user = await Math_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Math_faculty", async(req, res) => {
    try {
        const files = await Math_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/Math_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Math_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/Math_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Math_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/Math_faculty_download/:id", async(req, res) => {
    try {
        const file = await Math_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});

// Physics Faculty
router.post("/delete_Physics_fac/:id", async(req, res) => {
    const delete_user = await Physics_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Physics_faculty", async(req, res) => {
    try {
        const files = await Physics_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/Physics_fac_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Physics_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/Physics_fac_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Physics_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/Physics_fac_download/:id", async(req, res) => {
    try {
        const file = await Physics_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Political Science Faculty
router.post("/delete_Political_Science_faculty/:id", async(req, res) => {
    const delete_user = await Political_Science_Faculty.findOne({
        _id: req.params.id,
    });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Political_Science_faculty", async(req, res) => {
    try {
        const files = await Political_Science_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/Political_Science_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Political_Science_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/Political_Science_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Political_Science_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/Political_Science_Faculty_download/:id", async(req, res) => {
    try {
        const file = await Political_Science_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Psychology Faculty
router.post("/delete_Psychology_faculty/:id", async(req, res) => {
    const delete_user = await Psychology_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Psychology_faculty", async(req, res) => {
    try {
        const files = await Psychology_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/Psychology_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Psychology_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/Psychology_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Psychology_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/Psychology_Faculty_download/:id", async(req, res) => {
    try {
        const file = await Psychology_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Zoology Facultylty
router.post("/delete_Zoology_faculty/:id", async(req, res) => {
    const delete_user = await Zoology_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Zoology_faculty", async(req, res) => {
    try {
        const files = await Zoology_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/Zoology_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Zoology_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/Zoology_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Zoology_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/Zoology_Faculty_download/:id", async(req, res) => {
    try {
        const file = await Zoology_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
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
router.post("/delete_com_faculty/:id", async(req, res) => {
    const delete_user = await Com_Faculty.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log()
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/com_faculty", async(req, res) => {
    try {
        const files = await Com_Faculty.find({});
        res.json(files);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});
router.post(
    "/com_faculty_cv_upload/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            console.log(path, mimetype);
            const data = await Com_Faculty.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);

router.post(
    "/com_faculty_file_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description, filter } = req.body;
            const { path, mimetype } = req.file;
            const file = new Com_Faculty({
                title: title,
                description: description,
                filter: filter,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            // console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

router.get("/com_faculty_download/:id", async(req, res) => {
    try {
        const file = await Com_Faculty.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});
// Publications
router.delete("/delete_Publications_res/:id", async(req, res) => {
    const delete_user = await Publications.findOneAndDelete({
        _id: req.params.id,
    });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.get("/Publications_res", async(req, res) => {
    try {
        const files = await Publications.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post(
    "/Publications_res_upload",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, description } = req.body;
            const { path, mimetype } = req.file;
            const file = new Publications({
                title,
                description,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

router.get("/Publications_res_download/:id", async(req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.set({
            "Content-Type": file.file_mimetype,
        });
        res.sendFile(path.join(__dirname, "..", file.file_path));
    } catch (error) {
        res.status(400).send("Error while downloading file. Try again later.");
    }
});


// Library

router.get("/Library_details", async(req, res) => {
    const details = await Library.find();
    res.status(200).json(details);
});
router.delete("/delete_Library/:id", async(req, res) => {
    const delete_user = await Library.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.post(
    "/Library_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Library({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

// Biochemistry Events
router.post("/delete_Bio_Evetns/:id", async(req, res) => {
    const delete_user = await Bio_Evetns.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Bio_Evetns", async(req, res) => {
    try {
        const files = await Bio_Evetns.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Bio_Evetns_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Bio_Evetns.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Bio_Evetns_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Bio_Evetns({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// Botany Events
router.post("/delete_Botany_Events/:id", async(req, res) => {
    const delete_user = await Botany_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Botany_Events", async(req, res) => {
    try {
        const files = await Botany_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Botany_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Botany_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Botany_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Botany_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);
// Music Events
router.post("/delete_Music_Events/:id", async(req, res) => {
    const delete_user = await Music_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Music_Events", async(req, res) => {
    try {
        const files = await Music_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Music_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Music_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Music_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Music_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// NHE Events
router.post("/delete_NHE_Events/:id", async(req, res) => {
    const delete_user = await NHE_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/NHE_Events", async(req, res) => {
    try {
        const files = await NHE_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/NHE_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await NHE_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/NHE_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new NHE_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// Philo Events
router.post("/delete_Philo_Events/:id", async(req, res) => {
    const delete_user = await Philo_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Philo_Events", async(req, res) => {
    try {
        const files = await Philo_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Philo_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Philo_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Philo_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Philo_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// PE Events
router.post("/delete_PE_Events/:id", async(req, res) => {
    const delete_user = await PE_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/PE_Events", async(req, res) => {
    try {
        const files = await PE_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/PE_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await PE_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/PE_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new PE_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// Psychology Events
router.post("/delete_Psychology_Events/:id", async(req, res) => {
    const delete_user = await Psychology_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Psychology_Events", async(req, res) => {
    try {
        const files = await Psychology_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Psychology_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetyPsychology } = req.file;
            // console.log(path, mimetyPsychology)
            const data = await Psychology_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetyPsychology1: mimetyPsychology,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Psychology_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetyPsychology } = req.file;
            // console.log(title,path,mimetyPsychology)
            const file = new Psychology_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetyPsychology1: mimetyPsychology },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);


// Math Events
router.post("/delete_Math_Events/:id", async(req, res) => {
    const delete_user = await Math_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Math_Events", async(req, res) => {
    try {
        const files = await Math_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Math_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Math_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Math_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Math_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);


// Eco Events
router.post("/delete_Eco_Events/:id", async(req, res) => {
    const delete_user = await Eco_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Eco_Events", async(req, res) => {
    try {
        const files = await Eco_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Eco_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eco_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Eco_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Eco_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// Phy Events
router.post("/delete_Phy_Events/:id", async(req, res) => {
    const delete_user = await Phy_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Phy_Events", async(req, res) => {
    try {
        const files = await Phy_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Phy_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetyPhy } = req.file;
            // console.log(path, mimetyPhy)
            const data = await Phy_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetyPhy1: mimetyPhy,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Phy_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetyPhy } = req.file;
            // console.log(title,path,mimetyPhy)
            const file = new Phy_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetyPhy1: mimetyPhy },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);


// Hin Events
router.post("/delete_Hin_Events/:id", async(req, res) => {
    const delete_user = await Hin_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Hin_Events", async(req, res) => {
    try {
        const files = await Hin_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Hin_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Hin_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Hin_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Hin_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// His Events
router.post("/delete_His_Events/:id", async(req, res) => {
    const delete_user = await His_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/His_Events", async(req, res) => {
    try {
        const files = await His_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/His_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await His_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/His_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new His_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);


// Com Events
router.post("/delete_Com_Events/:id", async(req, res) => {
    const delete_user = await Com_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Com_Events", async(req, res) => {
    try {
        const files = await Com_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Com_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Com_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Com_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Com_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);

// Eng Events
router.post("/delete_Eng_Events/:id", async(req, res) => {
    const delete_user = await Eng_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Eng_Events", async(req, res) => {
    try {
        const files = await Eng_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Eng_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Eng_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Eng_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Eng_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);


// Com Events
router.post("/delete_Com_Events/:id", async(req, res) => {
    const delete_user = await Com_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Com_Events", async(req, res) => {
    try {
        const files = await Com_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Com_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Com_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Com_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Com_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);


// Chem Events
router.post("/delete_Chem_Events/:id", async(req, res) => {
    const delete_user = await Chem_Events.findOne({ _id: req.params.id });
    const pdf = delete_user.img_data.pdf_path;
    const img = delete_user.img_data.file_path;
    // console.log(pdf, img)
    if (pdf[0].pdf_path1 === "../daulatram/public/images/uploads") {
        if (img[0].file_path1) {
            await delete_user.deleteOne({ _id: req.params.id });
            await unlinkAsync(img[0].file_path1);
            res.status(200).json(delete_user + "User deleted");
        } else {
            console.log("Unsuccessfully deleted");
        }
    } else {
        await delete_user.deleteOne({ _id: req.params.id });
        await unlinkAsync(img[0].file_path1);
        await unlinkAsync(pdf[0].pdf_path1);
        res.status(200).json("File Deleted");
    }
});

router.get("/Chem_Events", async(req, res) => {
    try {
        const files = await Chem_Events.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});


router.post(
    "/Chem_Events_file_add/:id",
    upload.single("file"),
    async(req, res) => {
        try {
            const { path, mimetype } = req.file;
            // console.log(path, mimetype)
            const data = await Chem_Events.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    "img_data.pdf_path": {
                        pdf_path1: path,
                        pdf_mimetype1: mimetype,
                        value: true,
                    },
                },
            });
            if (data) {
                // console.log(dat)
                res.status(200).send("file uploaded successfully.");
            } else {
                res.status(401).send("Unable to upload CV, No data found");
            }
            // console.log(dat)
        } catch (error) {
            console.log(error);
            res.status(402).send("Error while uploading file. Try again later.");
        }
    }
);


router.post(
    "/Chem_Events_add",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title } = req.body;
            const { path, mimetype } = req.file;
            // console.log(title,path,mimetype)
            const file = new Chem_Events({
                title: title,
                // description: description,
                "img_data.file_path": { file_path1: path, file_mimetype1: mimetype },
                "img_data.pdf_path": { value: false },
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            console.log(error)
            res.status(400).send("Error occur while uploading data");
        }
    }
);





// Societies
router.delete("/delete_Socities/:id", async(req, res) => {
    const delete_user = await Soc.findOneAndDelete({ _id: req.params.id });
    await unlinkAsync(delete_user.file_path);
    res.status(200).json(delete_user + "User deleted");
});

router.get("/Socitie", async(req, res) => {
    try {
        const files = await Soc.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createdAt - a.createdAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send("Error while getting list of files. Try again later.");
    }
});

router.post(
    "/Soc",
    upload.single("file"),
    async(req, res) => {
        try {
            const { title, link } = req.body;
            const { path, mimetype } = req.file;
            const file = new Soc({
                title,
                link,
                file_path: path,
                file_mimetype: mimetype,
            });
            await file.save();
            res.send("file uploaded successfully.");
        } catch (error) {
            res.status(400).send("Error while uploading file. Try again later.");
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(402).send(error.message);
        }
    }
);

module.exports = router;