const mongoose = require('mongoose');

const Psychology_ProgramsOffered_Schema = mongoose.Schema({
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

const Psychology_ProgramsOffered = mongoose.model('Psychology_ProgramsOffered', Psychology_ProgramsOffered_Schema);

module.exports = Psychology_ProgramsOffered;