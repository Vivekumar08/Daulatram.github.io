const mongoose = require('mongoose');

const Chem_Photo_Gallery_Schema = mongoose.Schema(
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

const Chem_Photo_Gallery = mongoose.model('Chem_Photo_Gallery', Chem_Photo_Gallery_Schema);

module.exports = Chem_Photo_Gallery;