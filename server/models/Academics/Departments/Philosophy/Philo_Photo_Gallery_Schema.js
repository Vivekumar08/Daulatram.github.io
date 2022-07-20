const mongoose = require('mongoose');

const Philo_Photo_Gallery_Schema = mongoose.Schema(
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

const Philo_Photo_Gallery = mongoose.model('Philo_Photo_Gallery', Philo_Photo_Gallery_Schema);

module.exports = Philo_Photo_Gallery;