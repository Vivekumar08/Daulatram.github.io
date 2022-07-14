const mongoose = require('mongoose');

const PE_Fac_Schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    Designation: {
        type: String,
        required: true,
        trim: true
    },
    Qualification: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    file_path: {
        type: String,
        required: true
    },
    file_mimetype: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const PE_Fac = mongoose.model('PE_Fac', PE_Fac_Schema);

module.exports = PE_Fac;