const mongoose = require('mongoose');

const Hin_Photo_Gallery_Schema = mongoose.Schema(
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

const Hin_Photo_Gallery = mongoose.model('Hin_Photo_Gallery', Hin_Photo_Gallery_Schema);

module.exports = Hin_Photo_Gallery;