const mongoose = require('mongoose');

const Eco_Photo_Gallery_Schema = mongoose.Schema(
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

const Eco_Photo_Gallery = mongoose.model('Eco_Photo_Gallery', Eco_Photo_Gallery_Schema);

module.exports = Eco_Photo_Gallery;