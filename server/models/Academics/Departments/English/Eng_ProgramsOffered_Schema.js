const mongoose = require('mongoose');

const Eng_ProgramsOffered_Schema = mongoose.Schema(
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

const Eng_ProgramsOffered = mongoose.model('Eng_ProgramsOffered', Eng_ProgramsOffered_Schema);

module.exports = Eng_ProgramsOffered;