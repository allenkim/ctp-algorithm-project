'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('question_attempts', {
      attempt_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_id: {
        allowNull: false,
        references: { model: 'questions', key: 'question_id' },
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        references: { model: 'users', key: 'user_id' },
        type: Sequelize.INTEGER
      },
      code_id: {
        allowNull: false,
        references: { model: 'uploaded_codes', key: 'code_id' },
        type: Sequelize.INTEGER
      },
      success: {
        type: Sequelize.BOOLEAN
      },
      upload_time: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('question_attempts');
  }
};
