const Story = require('../models/story.model.js');

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(500).send({err: 'Title can not be empty'});
  }
  if (!req.body.genre) {
    return res.status(500).send({err: 'Genre can not be empty'});
  }
  if (!req.body.author) {
    return res.status(500).send({err: 'Author can not be empty'});
  }
  if (!req.body.synopsys) {
    return res.status(500).send({err: 'Synopsis can not be empty'});
  }
  if (!req.body.story) {
    return res.status(500).send({err: 'Story can not be empty'});
  }
  const story = new Story({
    title: req.body.title,
    genre: req.body.genre,
    author: req.body.author,
    synopsys: req.body.synopsys,
    story: req.body.story,
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

exports.findOne = async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.storyId
    });
    if (story) {
      res.send(story);
    } else {
      res.status(404).send('No stories found');
    }
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(500).send('No valid ID');
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  try {
    const story = await Story.findByIdAndUpdate(
      req.params.id,
      {
        votes: req.body.votes
      },
      {
        new: true
      }
    );

    if (!story) {
      return res.status(404).send('No story found');
    }
    res.send(story);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(417).send('No valid ID');
    }
    return res.status(500).send(err);
  }
};
