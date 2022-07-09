const mongoose = require('mongoose');

const Bio_Faculty_Schema = mongoose.Schema(
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
          file_path2: {
            type: String,
            default: null
          },
          file_mimetype2: {
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

const Bio_Faculty = mongoose.model('Bio_Faculty', Bio_Faculty_Schema);

module.exports = Bio_Faculty;