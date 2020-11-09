'use strict';
const bcrypt = require('bcryptjs');
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
    User.hasMany(models.Server_Member, { foreignKey: 'userId'});
  };

  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.prototype.getUsername = function() {
    return this.username;
  }
  return User;
};
