const mongoose = require('mongoose');

const PE_Events_Schema = mongoose.Schema(
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

const PE_Events = mongoose.model('PE_Events', PE_Events_Schema);

module.exports = PE_Events;