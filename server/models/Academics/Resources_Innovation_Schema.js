const mongoose = require('mongoose');

const Resources_Innovation_Schema = mongoose.Schema(
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
      ],
    }
  },
  {
    timestamps: true
  }
);

const Resources_Innovation = mongoose.model('Resources_Innovation', Resources_Innovation_Schema);

module.exports = Resources_Innovation;