const mongoose = require('mongoose');

const Job_schema = mongoose.Schema(
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

const Job = mongoose.model('Job', Job_schema);

module.exports = Job;