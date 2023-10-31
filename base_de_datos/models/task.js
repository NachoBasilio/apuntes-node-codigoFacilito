'use strict';
module.exports = (sequelize, DataTypes) => {

  let Task = sequelize.define('Task', {
    description: DataTypes.TEXT
  }, {});

  return Task;
}