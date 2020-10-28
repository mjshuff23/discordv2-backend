'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    title: DataTypes.STRING,
    topic: DataTypes.STRING,
    serverId: DataTypes.INTEGER
  }, {});
  Channel.associate = function(models) {
    // associations can be defined here
  };
  return Channel;
};