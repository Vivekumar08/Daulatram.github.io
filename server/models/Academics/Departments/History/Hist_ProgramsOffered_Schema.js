const mongoose = require('mongoose');

const Hist_ProgramsOffered_Schema = mongoose.Schema(
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

const Hist_ProgramsOffered = mongoose.model('Hist_ProgramsOffered', Hist_ProgramsOffered_Schema);

module.exports = Hist_ProgramsOffered;