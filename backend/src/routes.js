const express = require('express');
const devController = require('./controllers/devController');
const dislikeController = require('./controllers/dislikeController');
const likeController = require('./controllers/likeController');
const limpardb = require('./limpardb');

const routes = express.Router();

routes.post('/dev', devController.store);
routes.get('/devs', devController.index);
routes.post('/limpar', limpardb.store);

routes.post('/dev/:id/likes', likeController.store);
routes.post('/dev/:id/dislikes', dislikeController.store);

module.exports = routes;
