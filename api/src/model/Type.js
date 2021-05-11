const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  return sequelize.define('types', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
