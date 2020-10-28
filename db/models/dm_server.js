'use strict';
module.exports = (sequelize, DataTypes) => {
  const DM_Server = sequelize.define('DM_Server', {
    title: DataTypes.STRING
  }, {});
  DM_Server.associate = function(models) {
    // associations can be defined here
  };
  return DM_Server;
};