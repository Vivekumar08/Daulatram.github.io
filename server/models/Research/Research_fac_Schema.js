const mongoose = require('mongoose');

const Research_fac_Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img_data: {

      file_path: [
        {
          file_path1: {
            type: String,
            default: null
          },
          file_mimetype1: {
            type: String,
            default: null
          },
        }
      ]
    }
  },
  {
    timestamps: true
  }
);

const Research = mongoose.model('Research', Research_fac_Schema);

module.exports = Research;