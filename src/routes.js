const express = require('express');
const TakeController = require('./controllers/TakeController');

const routes = express.Router();

routes.get('/', TakeController.request);

module.exports = routes;