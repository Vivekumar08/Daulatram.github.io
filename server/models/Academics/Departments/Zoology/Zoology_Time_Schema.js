const mongoose = require('mongoose');

const Zoology_Time_Schema = mongoose.Schema({
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

const Zoology_Time = mongoose.model('Zoology_Time', Zoology_Time_Schema);

module.exports = Zoology_Time;