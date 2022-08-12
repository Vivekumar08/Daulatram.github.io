const mongoose = require('mongoose');

const Icc_Schema = new mongoose.Schema(
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


const ICC = mongoose.model('ICC', Icc_Schema);
module.exports =ICC;