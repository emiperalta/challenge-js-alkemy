const express = require('express');
const morgan = require('morgan');

const operationRoutes = require('./routes/operation.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/ops', operationRoutes);

module.exports = app;
