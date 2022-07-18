const mongoose = require('mongoose');

const Archives_Notice_Schema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        date: {
            type: String,
            required: true,
            trim: true
        },
        new_: Boolean,
        date_exp: {
            type: String,
            default: null,
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
);

const Archives_Notice = mongoose.model('Archives_Notice', Archives_Notice_Schema);

module.exports = Archives_Notice;