require('./database');
const app = require('./app');
const { PORT } = require('./config/keys');

app.listen(PORT, () =>
  console.log(`\nServer running at http://localhost:${PORT}\n`)
);
