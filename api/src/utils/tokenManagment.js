const jwt = require('jsonwebtoken');

const { SECRET } = require('../config/keys');

const generateToken = user => {
  return jwt.sign({ user: user.id }, SECRET, { expiresIn: 1000 * 60 * 60 * 24 * 7 });
};

const verifyToken = token => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, verifyToken };
