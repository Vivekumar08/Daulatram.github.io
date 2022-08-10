const mongoose = require('mongoose');

const Feedback_Student_Schema = mongoose.Schema(
    {
        Caption: {
            type: String,
            required: true,
            trim: true
        },
        Link: {
            type: String,
            required: true,
            trim: true
        },
        text: {
            type: String,
            trim: true
        }
    }
);

const Feedback_Student = mongoose.model('Feedback_Student', Feedback_Student_Schema);

module.exports = Feedback_Student;