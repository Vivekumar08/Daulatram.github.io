const mongoose = require('mongoose');

const eres = new mongoose.Schema(
    {
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
    },
    {
        timestamps: true
    }
)


const eresources = mongoose.model('e-Resources', eres);
module.exports = eresources;