module.exports = app => {
  const controller = require('../controllers/storiesTemplate.controller.js');
  app.post('/api/storiesTemplate', controller.create);
  app.get('/api/storiesTemplate', controller.findAll);
  // app.get('/api/storiesTemplate/:id', controller.findOne);
  // app.put('/api/stories/:id', controller.update);
};
