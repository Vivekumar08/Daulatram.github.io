const mongoose = require('mongoose');

const RTI_Footer_Schema = mongoose.Schema(
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
        filter: {
            type: String,
            required: true,
        },
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

const RTI_Footer = mongoose.model('RTI_Footer', RTI_Footer_Schema);

module.exports = RTI_Footer;