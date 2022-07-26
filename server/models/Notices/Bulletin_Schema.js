const mongoose = require('mongoose');

const Bulletin_Schema = mongoose.Schema(
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

const Bulletin_Notice = mongoose.model('Bulletin_Notice', Bulletin_Schema);

module.exports = Bulletin_Notice;