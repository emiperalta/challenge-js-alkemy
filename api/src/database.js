const { Sequelize } = require('sequelize');

const { conOpt } = require('./config/keys');
const OperationModel = require('./model/Operation');

const sequelize = new Sequelize(conOpt.database, conOpt.user, conOpt.password, {
  host: conOpt.host,
  port: conOpt.port,
  dialect: conOpt.dialect,
});

const Operation = OperationModel(sequelize);

sequelize.sync().then(() => console.log('\nDb connected, sinchronized tables\n'));

module.exports = { Operation };
