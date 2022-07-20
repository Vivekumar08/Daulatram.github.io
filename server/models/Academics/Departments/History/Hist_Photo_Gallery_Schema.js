const mongoose = require('mongoose');

const Hist_Photo_Gallery_Schema = mongoose.Schema(
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

const Hist_Photo_Gallery = mongoose.model('Hist_Photo_Gallery', Hist_Photo_Gallery_Schema);

module.exports = Hist_Photo_Gallery;