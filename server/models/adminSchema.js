const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    resetPasswordToken: {
        type: String,
        default: ""
    },
    resetPasswordExpires: {
        type: String,
        default: ""
    }
})


const admin = mongoose.model('ADMIN', adminSchema);
module.exports = admin;