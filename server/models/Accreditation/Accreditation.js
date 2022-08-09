const mongoose = require('mongoose');

const accreditation = new mongoose.Schema(
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


const accred = mongoose.model('ACCRED', accreditation);
module.exports = accred;