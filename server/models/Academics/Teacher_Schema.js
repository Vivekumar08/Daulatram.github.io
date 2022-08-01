const mongoose = require('mongoose');

const Teacher_Schema = mongoose.Schema(
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
    Tic1: {
      type: String,
      required: true
    },
    Tic2: {
      type: String,
      required: true
    }
  }
);

const Teacher = mongoose.model('Teacher', Teacher_Schema);

module.exports = Teacher;