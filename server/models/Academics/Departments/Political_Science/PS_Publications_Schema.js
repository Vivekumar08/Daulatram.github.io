const mongoose = require('mongoose');

const PS_Publications_Schema = mongoose.Schema({
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

const PS_Publications = mongoose.model('PS_Publications', PS_Publications_Schema);

module.exports = PS_Publications;