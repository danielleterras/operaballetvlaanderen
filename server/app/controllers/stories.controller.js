const Story = require('../models/story.model.js');

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(500).send({err: 'title can not be empty'});
  }
  const story = new Story({
    title: req.body.title,
    type: req.body.type,
    genre: req.body.genre,
    author: req.body.author,
    synopsys: req.body.synopsys,
    votes: req.body.votes
  });

  story
    .save()
    .then(story => res.send(story))
    .catch(err => {
      res.status(500).send({error: err.story || 'Error'});
    });
};

exports.findAll = async (req, res) => {
  try {
    const stories = await Story.find();
    res.send(stories);
  } catch (err) {
    res.status(500).send({err: err.story || 'Error'});
  }
};
