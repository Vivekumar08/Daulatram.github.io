const mongoose = require('mongoose');

const Student_Grievance_Schema = mongoose.Schema(
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

const Student_Grievance = mongoose.model('Student_Grievance', Student_Grievance_Schema);

module.exports = Student_Grievance;