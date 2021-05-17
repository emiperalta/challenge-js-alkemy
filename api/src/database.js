const { Sequelize, DataTypes } = require('sequelize');

const { conOpt } = require('./config/keys');

const OperationModel = require('./models/Operation');
const TypeModel = require('./models/Type');
const UserModel = require('./models/User');

const sequelize = new Sequelize(conOpt.database, conOpt.user, conOpt.password, {
  host: conOpt.host,
  port: conOpt.port,
  dialect: conOpt.dialect,
});

const Operation = OperationModel(sequelize, DataTypes);
const Type = TypeModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

//tables associations
Type.hasMany(Operation);
Operation.belongsTo(Type);
User.hasMany(Operation);
Operation.belongsTo(User);

sequelize.authenticate().then(() => console.log('\nDb connected\n'));
sequelize.sync().then(() => console.log('\nSinchronized tables\n'));

module.exports = { Operation, Type, User };
