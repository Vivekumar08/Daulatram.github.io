const mongoose = require('mongoose');

const Magz_and_News_Schema = mongoose.Schema(
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

const Magz_and_News = mongoose.model('Magz_and_News', Magz_and_News_Schema);

module.exports = Magz_and_News;