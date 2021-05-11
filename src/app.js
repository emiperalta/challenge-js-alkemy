const express = require('express');

const indexRoutes = require('./routes/index.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/index', indexRoutes);

module.exports = app;
