module.exports = app => {
  const controller = require('../controllers/stories.controller.js');
  app.post('/api/stories', controller.create);
  app.get('/api/stories', controller.findAll);
  // app.get("/stories/:storiesId", controller.findOne);
};
