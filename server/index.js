const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes.js');

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/qa', routes);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = server;