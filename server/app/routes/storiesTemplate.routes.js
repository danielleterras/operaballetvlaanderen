module.exports = app => {
  const controller = require('../controllers/storiesTemplate.controller.js');
  app.post('/api/template', controller.create);
  app.get('/api/template', controller.findAll);
  // app.get('/api/storiesTemplate/:id', controller.findOne);
  // app.put('/api/stories/:id', controller.update);
};
