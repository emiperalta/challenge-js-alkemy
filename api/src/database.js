const { Sequelize, DataTypes } = require('sequelize');

const { conOpt } = require('./config/keys');

const OperationModel = require('./model/Operation');
const TypeModel = require('./model/Type');

const sequelize = new Sequelize(conOpt.database, conOpt.user, conOpt.password, {
  host: conOpt.host,
  port: conOpt.port,
  dialect: conOpt.dialect,
});

const Operation = OperationModel(sequelize, DataTypes);
const Type = TypeModel(sequelize, DataTypes);

Type.hasMany(Operation);
Operation.belongsTo(Type);

sequelize.authenticate().then(() => console.log('\nDb connected\n'));
sequelize.sync().then(() => console.log('\nSinchronized tables\n'));

module.exports = { Operation, Type };
