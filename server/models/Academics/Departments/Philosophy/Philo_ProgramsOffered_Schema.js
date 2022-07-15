const mongoose = require('mongoose');

const Philo_ProgramsOffered_Schema = mongoose.Schema(
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

const Philo_ProgramsOffered = mongoose.model('Philo_ProgramsOffered', Philo_ProgramsOffered_Schema);

module.exports = Philo_ProgramsOffered;