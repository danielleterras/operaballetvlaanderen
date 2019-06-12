const mongoose = require('mongoose');

const StoryTemplateSchema = mongoose.Schema(
  {
    genre: String,
    story: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  'StoryTemplate',
  StoryTemplateSchema,
  'storiesTemplates'
);
