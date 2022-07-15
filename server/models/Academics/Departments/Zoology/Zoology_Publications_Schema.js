const mongoose = require('mongoose');

const Zoology_Publications_Schema = mongoose.Schema({
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

const Zoology_Publications = mongoose.model('Zoology_Publications', Zoology_Publications_Schema);

module.exports = Zoology_Publications;