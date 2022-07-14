const mongoose = require('mongoose');

const PolSci_Awards_Schema = mongoose.Schema({
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

const PolSci_Awards = mongoose.model('PolSci_Awards', PolSci_Awards_Schema);

module.exports = PolSci_Awards;