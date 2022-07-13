const mongoose = require('mongoose');

const Chem_ProgramsOffered_Schema = mongoose.Schema(
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

const Chem_ProgramsOffered = mongoose.model('Chem_ProgramsOffered', Chem_ProgramsOffered_Schema);

module.exports = Chem_ProgramsOffered;