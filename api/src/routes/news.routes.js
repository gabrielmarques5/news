const { Router } = require('express');

const NewsController = require('../controller/NewsController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const newsRoutes = Router();

const newsController = new NewsController();

newsRoutes.get('/', newsController.index)
newsRoutes.get('/:id', newsController.show)
newsRoutes.post('/', ensureAuthenticated, newsController.create)
newsRoutes.delete('/:id', ensureAuthenticated, newsController.delete)

module.exports = newsRoutes;