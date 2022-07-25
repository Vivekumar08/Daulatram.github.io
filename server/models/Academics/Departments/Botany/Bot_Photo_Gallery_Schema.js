const mongoose = require('mongoose');

const Bot_Photo_Gallery_Schema = mongoose.Schema(
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

const Bot_Photo_Gallery = mongoose.model('Bot_Photo_Gallery', Bot_Photo_Gallery_Schema);

module.exports = Bot_Photo_Gallery;