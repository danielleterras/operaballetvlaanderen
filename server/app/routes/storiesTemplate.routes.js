module.exports = app => {
  const controller = require('../controllers/storiesTemplate.controller.js');
  app.post('/api/template', controller.create);
  app.get('/api/template', controller.findAll);
};
