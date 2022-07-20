const mongoose = require('mongoose');

const Physics_Gallery_Schema = mongoose.Schema({
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

const Physics_Gallery = mongoose.model('Physics_Gallery', Physics_Gallery_Schema);

module.exports = Physics_Gallery;