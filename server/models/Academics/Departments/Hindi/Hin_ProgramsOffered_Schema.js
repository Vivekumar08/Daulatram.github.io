const mongoose = require('mongoose');

const Hin_ProgramsOffered_Schema = mongoose.Schema(
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

const Hin_ProgramsOffered = mongoose.model('Hin_ProgramsOffered', Hin_ProgramsOffered_Schema);

module.exports = Hin_ProgramsOffered;