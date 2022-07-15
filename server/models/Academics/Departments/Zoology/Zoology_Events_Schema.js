const mongoose = require('mongoose');

const Zoology_Events_Schema = mongoose.Schema({
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

const Zoology_Events = mongoose.model('Zoology_Events', Zoology_Events_Schema);

module.exports = Zoology_Events;