const mongoose = require('mongoose');

const Psychology_Gallery_Schema = mongoose.Schema({
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

const Psychology_Gallery = mongoose.model('Psychology_Gallery', Psychology_Gallery_Schema);

module.exports = Psychology_Gallery;