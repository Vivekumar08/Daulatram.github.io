const mongoose = require('mongoose');

const Com_ProgramsOffered_Schema = mongoose.Schema(
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

const Com_ProgramsOffered = mongoose.model('Com_ProgramsOffered', Com_ProgramsOffered_Schema);

module.exports = Com_ProgramsOffered;