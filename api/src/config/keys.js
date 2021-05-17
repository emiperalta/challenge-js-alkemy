require('dotenv/config');

module.exports = {
  conOpt: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'mysql',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
};
