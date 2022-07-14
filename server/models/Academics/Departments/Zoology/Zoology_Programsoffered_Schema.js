const mongoose = require('mongoose');

const Zoology_ProgramsOffered_Schema = mongoose.Schema({
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

const Zoology_ProgramsOffered = mongoose.model('Zoology_ProgramsOffered', Zoology_ProgramsOffered_Schema);

module.exports = Zoology_ProgramsOffered;