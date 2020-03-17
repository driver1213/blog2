'use strict';
module.exports = (sequelize, DataTypes) => {
  const tests = sequelize.define('tests', {
    title: DataTypes.STRING,
    count: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  tests.associate = function(models) {
    // associations can be defined here
  };
  return tests;
};