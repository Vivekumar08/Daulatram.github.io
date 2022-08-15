const mongoose = require('mongoose');

const Music_Association_Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
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
                default: null
            },
            value: {
                type: String,
                default: null
            },
        }],
        para: [{
            para1: {
                type: String,
            },
        }],
    }
}, {
    timestamps: true
});

const Music_Association = mongoose.model('Music_Association', Music_Association_Schema);

module.exports = Music_Association;