const mongoose = require('mongoose');

const PE_Gallery_Schema = mongoose.Schema({
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

const PE_Gallery = mongoose.model('PE_Gallery', PE_Gallery_Schema);

module.exports = PE_Gallery;