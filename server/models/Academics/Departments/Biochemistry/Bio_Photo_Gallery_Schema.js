const mongoose = require('mongoose');

const Bio_Photo_Gallery_Schema = mongoose.Schema(
  {
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

const Bio_Photo_Gallery = mongoose.model('Bio_Photo_Gallery', Bio_Photo_Gallery_Schema);

module.exports = Bio_Photo_Gallery;