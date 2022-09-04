const mongoose = require('mongoose');

const Job_Opportunities_Schema = mongoose.Schema({
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
    date: {
        type: String,
        required: true,
        trim: true
    },
    new_: Boolean,
    date_exp: {
        type: String,
        default: null,
    },
    file_path: {
        type: String,
        required: true
    },
    file_mimetype: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Job_Opportunities = mongoose.model('Job_Opportunities', Job_Opportunities_Schema);

module.exports = Job_Opportunities;