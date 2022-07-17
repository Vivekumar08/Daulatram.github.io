const mongoose = require('mongoose');

const Sanskrit_Stuachieve_Schema = mongoose.Schema({
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

const Sanskrit_Stuachieve = mongoose.model('Sanskrit_Stuachieve', Sanskrit_Stuachieve_Schema);

module.exports = Sanskrit_Stuachieve;