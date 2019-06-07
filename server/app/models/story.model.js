const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const StorySchema = mongoose.Schema(
  {
    title: String,
    genre: String,
    author: String,
    synopsys: String,
    story: String,
    votes: Number
    // storyId: ObjectId
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Story', StorySchema);
