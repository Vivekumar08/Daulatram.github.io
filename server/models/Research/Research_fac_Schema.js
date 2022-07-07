const mongoose = require('mongoose');

const Research_fac_Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    file_path: {
      file_path1:{
        type: String,
        // required: true
        default: ''
      },
    },
    file_mimetype: {
      file_mimetype1:{
        type: String,
        // required: true
        default: ''
      },
    }
  },
  {
    timestamps: true
  }
);

const Research = mongoose.model('Research', Research_fac_Schema);

module.exports = Research;