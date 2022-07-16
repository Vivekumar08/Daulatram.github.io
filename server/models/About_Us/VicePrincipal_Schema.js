const mongoose = require('mongoose');

const VicePrincipal_Schema = mongoose.Schema(
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

const VicePrincipal = mongoose.model('VicePrincipal', VicePrincipal_Schema);

module.exports = VicePrincipal;