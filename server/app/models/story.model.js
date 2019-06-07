const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const StorySchema = mongoose.Schema(
  {
    title: String,
    genre: String,
    author: String,
    synopsis: String,
    story: String,
    votes: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Story', StorySchema);
