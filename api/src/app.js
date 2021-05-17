const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const operationRoutes = require('./routes/operation.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/ops', operationRoutes);
app.use('/api/users', authRoutes);

module.exports = app;
