const mongoose = require('mongoose');

const Pol_Sci_About_depart_Schema = mongoose.Schema(
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

const Pol_Sci_About_depart = mongoose.model('Pol_Sci_About_depart', Pol_Sci_About_depart_Schema);

module.exports = Pol_Sci_About_depart;