'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    avatarUrl: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Server, { foreignKey: 'ownerId'});
    User.hasMany(models.Channel_Message, { foreignKey: 'userId'});
    User.hasMany(models.Direct_Message, { foreignKey: 'userId'});

    const columnMappingServerMembers = {
      through: 'Server_Member',
      foreignKey: "userId",
      otherKey: "serverId",
    };
    User.belongsToMany(models.Server, columnMappingServerMembers);

    const columnMappingDMServerUsers = {
      through: 'DM_Server_User',
      foreignKey: "userId",
      otherKey: "DMServerId",
    };
    User.belongsToMany(models.DM_Server, columnMappingDMServerUsers);

  };
  return User;
};