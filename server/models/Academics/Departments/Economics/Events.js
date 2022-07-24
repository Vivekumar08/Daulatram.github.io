const mongoose = require('mongoose');

const Eve_Schema = mongoose.Schema(
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

const Eco_Eve_Schema = mongoose.model('Eco_Eve_Schema', Eve_Schema);

module.exports = Eco_Eve_Schema;