const express = require('express');
const UserController = require('./controllers/UserController');
// Define a rota
const routes = express.Router();

routes.post('/users', UserController.store);

//listagem de ususarios

routes.get('/users', UserController.index);


// como exporta arquivo

module.exports = routes; 

// UserController é um objeto...
// Revisar P.O