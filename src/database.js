const mysql = require('mysql2/promise');

const { connectionOptions } = require('./config/keys');

async function connect() {
  try {
    return await mysql.createPool(connectionOptions);
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;
