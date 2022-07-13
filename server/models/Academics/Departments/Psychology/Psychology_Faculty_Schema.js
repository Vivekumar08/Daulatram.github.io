const mongoose = require('mongoose');

const Psychology_Faculty_Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    filter: {
        type: String,
        required: true,
    },
    img_data: {

        file_path: [{
            file_path1: {
                type: String,
                default: null
            },
            file_mimetype1: {
                type: String,
                default: null
            },
        }],
        pdf_path: [{
            pdf_path1: {
                type: String,
                default: "../daulatram/public/images/uploads"
            },
            pdf_mimetype1: {
                type: String,
                default: 'application/pdf'
            },
            value: {
                type: String,
                default: null
            },
        }],
    }
}, {
    timestamps: true
});

const Psychology_Faculty = mongoose.model('Psychology_Faculty', Psychology_Faculty_Schema);

module.exports = Psychology_Faculty;