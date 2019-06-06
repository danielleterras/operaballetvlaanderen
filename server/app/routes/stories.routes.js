module.exports = app => {
  const controller = require('../controllers/stories.controller.js');
  app.post('/api/stories', controller.create);
  app.get('/api/stories', controller.findAll);
  app.get('/api/stories/:id', controller.findOne);
  app.put('/api/stories/:id', controller.update);
};
