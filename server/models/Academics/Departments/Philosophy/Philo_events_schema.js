const mongoose = require('mongoose');

const Philo_Events_Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    img_data: {

      file_path: [
        {
          file_path1: {
            type: String,
            default: null
          },
          file_mimetype1: {
            type: String,
            default: null
          },
        }
      ],
      pdf_path: [
        {
          pdf_path1: {
            type: String,
            default: "../daulatram/public/images/uploads"
          },
          pdf_mimetype1: {
            type: String,
            default: 'application/pdf'
          },
          value: {
            type: String,
            default: null
          },
        }
      ],
    }
  },
  {
    timestamps: true
  }
);

const Philo_Events = mongoose.model('Philo_Events', Philo_Events_Schema);

module.exports = Philo_Events;