'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    title: DataTypes.STRING,
    topic: DataTypes.STRING,
    serverId: DataTypes.INTEGER
  }, {});
  Channel.associate = function(models) {
    // associations can be defined here
    Channel.hasMany(models.Channel_Message, { foreignKey: 'channelId' })
    Channel.belongsTo(models.Server, { foreignKey: 'serverId'})
  };
  return Channel;
};