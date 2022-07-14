const mongoose = require('mongoose');

const PolSci_ProgramsOffered_Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    link: {
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

const PolSci_ProgramsOffered = mongoose.model('PolSci_ProgramsOffered', PolSci_ProgramsOffered_Schema);

module.exports = PolSci_ProgramsOffered;