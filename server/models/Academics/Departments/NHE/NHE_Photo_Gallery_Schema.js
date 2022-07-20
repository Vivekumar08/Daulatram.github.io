const mongoose = require('mongoose');

const NHE_Photo_Gallery_Schema = mongoose.Schema(
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

const NHE_Photo_Gallery = mongoose.model('NHE_Photo_Gallery', NHE_Photo_Gallery_Schema);

module.exports = NHE_Photo_Gallery;