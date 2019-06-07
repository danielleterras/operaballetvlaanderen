const mongoose = require('mongoose');

const StorySchema = mongoose.Schema(
  {
    title: String,
    genre: String,
    author: String,
    synopsys: String,
    story: String,
    votes: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Story', StorySchema);
