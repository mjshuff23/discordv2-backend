'use strict';
module.exports = (sequelize, DataTypes) => {
  const Server = sequelize.define('Server', {
    title: DataTypes.STRING,
    ownId: DataTypes.INTEGER
  }, {});
  Server.associate = function(models) {
    // associations can be defined here
  };
  return Server;
};