const mongoose = require('mongoose');

const Physics_Stuachieve_Schema = mongoose.Schema({
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

const Physics_Stuachieve = mongoose.model('Physics_Stuachieve', Physics_Stuachieve_Schema);

module.exports = Physics_Stuachieve;