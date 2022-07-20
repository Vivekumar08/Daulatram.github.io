const mongoose = require('mongoose');

const Music_Photo_Gallery_Schema = mongoose.Schema(
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

const Music_Photo_Gallery = mongoose.model('Music_Photo_Gallery', Music_Photo_Gallery_Schema);

module.exports = Music_Photo_Gallery;