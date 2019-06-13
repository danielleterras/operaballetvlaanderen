const StoryTemplate = require('../models/storyTemplate.model.js');

exports.create = (req, res) => {
  const storytemplate = new StoryTemplate({
    genre: req.body.genre,
    story: req.body.story
  });

  storytemplate
    .save()
    .then(story => res.send(story))
    .catch(err => {
      res.status(500).send({error: err.story || 'Error'});
    });
};
exports.findAll = async (req, res) => {
  try {
    const storiesTemplates = await StoryTemplate.find();
    res.send(storiesTemplates);
  } catch (err) {
    res.status(500).send({err: err.story || 'Error'});
  }
};
