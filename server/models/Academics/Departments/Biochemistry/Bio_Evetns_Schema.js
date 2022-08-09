const mongoose = require('mongoose');

const Bio_Evetns_Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    link: {
      type: String,
      required: true,
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

const Bio_Evetns = mongoose.model('Bio_Evetns', Bio_Evetns_Schema);

module.exports = Bio_Evetns;