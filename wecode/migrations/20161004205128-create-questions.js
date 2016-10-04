'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('questions', {
      question_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_title: {
        type: Sequelize.STRING
      },
      input: {
        type: Sequelize.TEXT
      },
      output: {
        type: Sequelize.TEXT
      },
      number_attempts: {
        type: Sequelize.INTEGER
      },
      number_success: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE_TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('questions');
  }
};
