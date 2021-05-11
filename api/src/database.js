const { Sequelize } = require('sequelize');

const { conOpt } = require('./config/keys');

const OperationModel = require('./model/Operation');
const TypeModel = require('./model/Type');

const sequelize = new Sequelize(conOpt.database, conOpt.user, conOpt.password, {
  host: conOpt.host,
  port: conOpt.port,
  dialect: conOpt.dialect,
});

const Operation = OperationModel(sequelize);
const Type = TypeModel(sequelize);

Type.hasMany(Operation, {
  foreignKey: 'typeId',
});
Operation.belongsTo(Type);

sequelize.authenticate().then(() => console.log('\nDb connected'));

sequelize.sync().then(() => console.log('Sinchronized tables\n'));

module.exports = { Operation, Type };
