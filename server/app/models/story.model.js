const mongoose = require('mongoose');

const StorySchema = mongoose.Schema(
  {
    title: String,
    genre: String,
    author: String,
    story: String,
    synopsys: String,
    votes: Number,
    personage: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Story', StorySchema);
