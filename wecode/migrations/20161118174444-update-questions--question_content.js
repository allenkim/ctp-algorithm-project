'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn('questions', "question_content", {
        allowNull: false,
        type: Sequelize.TEXT
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('questions', "question_content");
  }
};
