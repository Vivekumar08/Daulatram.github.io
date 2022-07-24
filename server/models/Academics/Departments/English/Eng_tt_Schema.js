const mongoose = require('mongoose');

const Timetable_Schema = mongoose.Schema(
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

const Eng_Timetable_Schema = mongoose.model('Eng_Timetable_Schema', Timetable_Schema);

module.exports = Eng_Timetable_Schema;