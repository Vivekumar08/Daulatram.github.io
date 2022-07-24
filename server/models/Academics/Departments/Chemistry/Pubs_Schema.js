const mongoose = require('mongoose');

const Pubs_Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    link: {
      type: String,
      required: true,
      trim: true
    },
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

const Chem_Pubs_Schema = mongoose.model('Chem_Pubs_Schema', Pubs_Schema);

module.exports = Chem_Pubs_Schema;