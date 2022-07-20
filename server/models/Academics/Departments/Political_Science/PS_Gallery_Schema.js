const mongoose = require('mongoose');

const PS_Gallery_Schema = mongoose.Schema({
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

const PS_Gallery = mongoose.model('PS_Gallery', PS_Gallery_Schema);

module.exports = PS_Gallery;