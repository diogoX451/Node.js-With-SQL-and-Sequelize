const express = require('express');
// Define a rota
const routes = express.Router();

routes.get('/', (req, res)=> {
    return res.json({Hello: 'galerinha'});

});

// como exporta arquivo

module.exports = routes; 