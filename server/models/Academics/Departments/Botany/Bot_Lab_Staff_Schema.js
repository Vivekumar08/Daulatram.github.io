const mongoose = require('mongoose');

const Bot_Lab_Staff_Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    DOJ: {
      type: String,
      required: true,
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
    }
  },
  {
    timestamps: true
  }
);

const Bot_Lab_Staff = mongoose.model('Bot_Lab_Staff', Bot_Lab_Staff_Schema);

module.exports = Bot_Lab_Staff;