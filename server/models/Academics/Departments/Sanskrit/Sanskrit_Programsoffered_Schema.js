const mongoose = require('mongoose');

const Sanskrit_ProgramsOffered_Schema = mongoose.Schema({
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

const Sanskrit_ProgramsOffered = mongoose.model('Sanskrit_ProgramsOffered', Sanskrit_ProgramsOffered_Schema);

module.exports = Sanskrit_ProgramsOffered;