'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('uploaded_codes', "uploaded_text", {
      allowNull: false,
      type: Sequelize.TEXT
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn('uploaded_codes', "uploaded_text", {
      allowNull: true,
      type: Sequelize.TEXT
    });
  }
};
