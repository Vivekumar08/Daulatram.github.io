const mongoose = require('mongoose');

const C_Acad_Cal_Schema = mongoose.Schema(
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

const C_Acad_Cal = mongoose.model('C_Acad_Cal', C_Acad_Cal_Schema);

module.exports = C_Acad_Cal;