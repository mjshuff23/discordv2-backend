'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel_Message = sequelize.define('Channel_Message', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    channelId: DataTypes.INTEGER
  }, {});
  Channel_Message.associate = function(models) {
    // associations can be defined here
  };
  return Channel_Message;
};