'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.addColumn(
          'question_attempts',
          'grading_output',
          {
            type: Sequelize.TEXT,
            allowNull: true
          }
      );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('question_attempts', 'grading_output');
  }
};
