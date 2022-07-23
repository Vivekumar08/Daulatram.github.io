const mongoose = require('mongoose');

const Zoology_Gallery_Schema = mongoose.Schema({
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

const Zoology_Gallery = mongoose.model('Zoology_Gallery', Zoology_Gallery_Schema);

module.exports = Zoology_Gallery;