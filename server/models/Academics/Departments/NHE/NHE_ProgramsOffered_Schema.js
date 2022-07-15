const mongoose = require('mongoose');

const NHE_ProgramsOffered_Schema = mongoose.Schema(
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

const NHE_ProgramsOffered = mongoose.model('NHE_ProgramsOffered', NHE_ProgramsOffered_Schema);

module.exports = NHE_ProgramsOffered;