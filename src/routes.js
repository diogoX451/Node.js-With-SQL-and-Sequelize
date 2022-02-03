const express = require('express');
const UserController = require('./controllers/UserController');
// Define a rota
const routes = express.Router();

routes.post('/users', UserController.store);

// como exporta arquivo

module.exports = routes; 