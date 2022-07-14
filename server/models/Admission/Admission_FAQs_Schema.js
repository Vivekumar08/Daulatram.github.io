const mongoose = require('mongoose');

const Admission_FAQs_Schema = mongoose.Schema(
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

const Admission_FAQs = mongoose.model('Admission_FAQs', Admission_FAQs_Schema);

module.exports = Admission_FAQs;