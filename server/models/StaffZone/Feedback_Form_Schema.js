const mongoose = require('mongoose');

const Feedback_Form_Schema = mongoose.Schema(
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

const Feedback = mongoose.model('Feedback', Feedback_Form_Schema);

module.exports = Feedback;