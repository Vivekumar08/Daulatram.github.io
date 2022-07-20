const mongoose = require('mongoose');

const Math_Photo_Gallery_Schema = mongoose.Schema(
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

const Math_Photo_Gallery = mongoose.model('Math_Photo_Gallery', Math_Photo_Gallery_Schema);

module.exports = Math_Photo_Gallery;