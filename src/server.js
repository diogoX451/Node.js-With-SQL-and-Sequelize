const express =  require('express');
const routes = require('./routes');
// chama padrão do express

const app = express();
app.use(express.json());
app.use(routes);


const port = 3333;
app.listen(port);