const mongoose = require('mongoose');

const Staff_Notice_Schema = mongoose.Schema(
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

const Staff_Notice = mongoose.model('Staff_Notice', Staff_Notice_Schema);

module.exports = Staff_Notice;