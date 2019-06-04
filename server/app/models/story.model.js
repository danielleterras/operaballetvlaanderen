const mongoose = require('mongoose');

const StorySchema = mongoose.Schema(
  {
    title: String,
    type: String,
    genre: String,
    author: String,
    synopsys: String,
    votes: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Story', StorySchema);
