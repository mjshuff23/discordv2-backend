'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Channels', [
        { title: 'Home', topic: 'Home Channel', serverId: 1, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Home', topic: 'Home Channel', serverId: 2, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Home', topic: 'Home Channel', serverId: 3, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Home', topic: 'Home Channel', serverId: 4, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Home', topic: 'Home Channel', serverId: 5, createdAt: new Date(), updatedAt: new Date() },
        { title: 'Home', topic: 'Home Channel', serverId: 6, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Channels', null, {});
  }
};
