const mongoose = require('mongoose');

const StudentZone_Examform_Schema = mongoose.Schema({
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

const Student_Examform = mongoose.model('Student_Examform', StudentZone_Examform_Schema);

module.exports = Student_Examform;