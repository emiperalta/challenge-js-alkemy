require('dotenv/config');
require('./database');
const app = require('./app');

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`\nServer running at http://localhost:${PORT}\n`)
);
