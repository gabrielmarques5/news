const { Router } = require('express');

const userRoutes = require('./user.routes')
const newsRoutes = require('./news.routes')
const sessionsRoutes = require('./sessions.routes')

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/news', newsRoutes);
routes.use('/sessions', sessionsRoutes);

module.exports = routes;