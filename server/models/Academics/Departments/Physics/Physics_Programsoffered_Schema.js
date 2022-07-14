const mongoose = require('mongoose');

const Physics_ProgramsOffered_Schema = mongoose.Schema({
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

const Physics_ProgramsOffered = mongoose.model('Physics_ProgramsOffered', Physics_ProgramsOffered_Schema);

module.exports = Physics_ProgramsOffered;