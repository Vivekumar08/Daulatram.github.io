const mongoose = require('mongoose');

const Student_Facilities_Schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
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

const Student_Facilities = mongoose.model('Student_Facilities', Student_Facilities_Schema);

module.exports = Student_Facilities;