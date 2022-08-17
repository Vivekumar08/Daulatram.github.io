const mongoose = require('mongoose');

const PE_Facilities_Schema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
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
                        default: null
                    },
                    value: {
                        type: String,
                        default: null
                    },
                }
            ],
            para: [
                {
                    para1: {
                        type: String,
                    },
                }
            ],
        }
    },
    {
        timestamps: true
    }
);

const PE_Facilities = mongoose.model('PE_Facilities', PE_Facilities_Schema);

module.exports = PE_Facilities;