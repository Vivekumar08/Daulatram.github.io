const mongoose = require('mongoose');

const Accreditation_Schema = new mongoose.Schema(
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


const accred = mongoose.model('ACCRED', Accreditation_Schema);
module.exports = accred;