const mongoose = require('mongoose');

const Gallery_About_Schema = mongoose.Schema(
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

const Gallery_About = mongoose.model('Gallery_About', Gallery_About_Schema);

module.exports = Gallery_About;