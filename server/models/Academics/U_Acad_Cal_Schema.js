const mongoose = require('mongoose');

const U_Acad_Cal_Schema = mongoose.Schema(
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

const U_Acad_Cal = mongoose.model('U_Acad_Cal', U_Acad_Cal_Schema);

module.exports = U_Acad_Cal;