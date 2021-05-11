const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  return sequelize.define('operation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    type_id: {
      type: DataTypes.INTEGER,
    },
  });
};
