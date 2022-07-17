const mongoose = require('mongoose');

const Zoology_Stuachieve_Schema = mongoose.Schema({
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

const Zoology_Stuachieve = mongoose.model('Zoology_Stuachieve', Zoology_Stuachieve_Schema);

module.exports = Zoology_Stuachieve;