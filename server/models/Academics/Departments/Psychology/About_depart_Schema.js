const mongoose = require('mongoose');

const Psy_About_depart_Schema = mongoose.Schema(
  {
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
          value: {
            type: String,
            default: null
          },
        }
      ],
      para: [
        {
          para1: {
            type: String,
          },
        }
      ],
    }
  },
  {
    timestamps: true
  }
);

const Psy_About_depart = mongoose.model('Psy_About_depart', Psy_About_depart_Schema);

module.exports = Psy_About_depart;