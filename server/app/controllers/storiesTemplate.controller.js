const StoryTemplate = require('../models/storyTemplate.model.js');

exports.create = (req, res) => {
  // if (!req.body.title) {
  //   return res.status(500).send({err: 'Title can not be empty'});
  // }

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

// exports.findOne = async (req, res) => {
//   try {
//     const storiesTemplate = await StoryTemplate.findOne({
//       _id: req.params.storyId
//     });
//     if (storiesTemplate) {
//       res.send(storiesTemplate);
//     } else {
//       res.status(404).send('No stories found');
//     }
//   } catch (err) {
//     if (err.kind === 'ObjectId') {
//       return res.status(500).send('No valid ID');
//     }
//     return res.status(500).send(err);
//   }
// };
