const mongoose = require('mongoose');

const Admission_Grievance_Schema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true
  }
);

const Admission_Grievance = mongoose.model('Admission_Grievance', Admission_Grievance_Schema);

module.exports = Admission_Grievance;