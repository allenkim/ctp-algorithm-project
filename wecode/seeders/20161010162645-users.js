'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('users', [{
        email: 'khadeeja@wecode.com',
        username: 'khadeeja',
        password: 'mostsecurepassword',
        createdAt: '2016/10/12',
        updatedAt: '2016/10/12'
      },
      {
        email: 'allen@wecode.com',
        username: 'allen',
        password: 'thebeast',
        createdAt: '2016/10/12',
        updatedAt: '2016/10/12'
      },
      {
        email: 'alan@wecode.com',
        username: 'alan',
        password: 'thisbetterwork',
        createdAt: '2016/10/12',
        updatedAt: '2016/10/12'
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('users', null, {});
  }
};
