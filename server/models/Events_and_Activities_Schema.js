const mongoose = require('mongoose');

const Events_and_Activities_Schema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        img_data: {
            file_path: [
                {
                    file_path1: {
                        type: String,
                        default: null
                    },
                    file_mimetype1: {
                        type: String,
                        default: null
                    },
                }
            ],
            pdf_path: [
                {
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
                }
            ],
        }
    },
    {
        timestamps: true
    }
);

const Events_and_Activities = mongoose.model('Events_and_Activities', Events_and_Activities_Schema);

module.exports = Events_and_Activities;