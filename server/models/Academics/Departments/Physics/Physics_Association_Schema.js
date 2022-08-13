const mongoose = require('mongoose');

const Physics_Association_Schema = mongoose.Schema({
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

const Physics_Association = mongoose.model('Physics_Association', Physics_Association_Schema);

module.exports = Physics_Association;