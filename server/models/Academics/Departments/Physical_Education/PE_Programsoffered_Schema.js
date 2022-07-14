const mongoose = require('mongoose');

const PE_ProgramsOffered_Schema = mongoose.Schema({
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

const PE_ProgramsOffered = mongoose.model('PE_ProgramsOffered', PE_ProgramsOffered_Schema);

module.exports = PE_ProgramsOffered;