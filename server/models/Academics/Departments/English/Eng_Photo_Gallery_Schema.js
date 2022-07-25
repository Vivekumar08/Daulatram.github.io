const mongoose = require('mongoose');

const Eng_Photo_Gallery_Schema = mongoose.Schema(
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

const Eng_Photo_Gallery = mongoose.model('Eng_Photo_Gallery', Eng_Photo_Gallery_Schema);

module.exports = Eng_Photo_Gallery;