const mongoose = require('mongoose');

const Sanskrit_Gallery_Schema = mongoose.Schema({
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

const Sanskrit_Gallery = mongoose.model('Sanskrit_Gallery', Sanskrit_Gallery_Schema);

module.exports = Sanskrit_Gallery;