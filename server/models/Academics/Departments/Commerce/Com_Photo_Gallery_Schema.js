const mongoose = require('mongoose');

const Com_Photo_Gallery_Schema = mongoose.Schema(
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

const Com_Photo_Gallery = mongoose.model('Com_Photo_Gallery', Com_Photo_Gallery_Schema);

module.exports = Com_Photo_Gallery;