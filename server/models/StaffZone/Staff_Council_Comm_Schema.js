const mongoose = require('mongoose');

const Staff_Council_Comm_Schema = mongoose.Schema(
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

const Staff_Council_Comm = mongoose.model('Staff_Council_Comm', Staff_Council_Comm_Schema);

module.exports = Staff_Council_Comm;