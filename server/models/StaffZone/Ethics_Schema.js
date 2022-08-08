const mongoose = require('mongoose');

const Ethics_Schema = new mongoose.Schema(
    {
        heading: {
            type: String,
            required: true,
            trim: true
        },
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


const Ethics = mongoose.model('Ethics', Ethics_Schema);
module.exports = Ethics;