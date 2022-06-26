const express = require('express');
const router = express.Router();
const Adminssion = require('../../models/Admission/onlineAdmission');
const helpdesk = require('../../models/Admission/helpdeskAdmission');

// Online Admission
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

// Helpdesk

router.get('/helpdesk', async (req, res,) => {
    // res.send(`Hello World from the server`);
    const details = await helpdesk.find()
    res.status(200).json(details)
});

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