const mongoose = require('mongoose');

const StuAch_Schema = mongoose.Schema(
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

const Eng_StuAch_Schema = mongoose.model('Eng_StuAch_Schema', StuAch_Schema);

module.exports = Eng_StuAch_Schema;