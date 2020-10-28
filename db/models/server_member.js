'use strict';
module.exports = (sequelize, DataTypes) => {
  const Server_Member = sequelize.define('Server_Member', {
    userId: DataTypes.INTEGER,
    serverId: DataTypes.INTEGER
  }, {});
  Server_Member.associate = function(models) {
    // associations can be defined here

  };
  return Server_Member;
};