module.exports = (sequelize, DataTypes) => {
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
