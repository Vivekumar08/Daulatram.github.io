const mongoose = require('mongoose');

const StudentZone_Feepayment_Schema = mongoose.Schema({
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

const Student_Feepayment = mongoose.model('Student_Feepayment', StudentZone_Feepayment_Schema);

module.exports = Student_Feepayment;