const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/qa', routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});