'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Time.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    distance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Time',
    tableName: 'times'
  });
  return Time;
};