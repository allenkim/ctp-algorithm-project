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
        allowNull: false,
        type: Sequelize.STRING
      },
      input: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      output: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      number_attempts: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      number_success: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
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
