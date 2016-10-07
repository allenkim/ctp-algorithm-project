'use strict';
module.exports = function(sequelize, DataTypes) {
  var question_attempts = sequelize.define('question_attempts', {
    question_id: {
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
      type: Sequelize.INTEGER
    },
    user_id: {
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
      type: Sequelize.INTEGER
    },
    code_id: {
      allowNull: false,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
      type: Sequelize.INTEGER
    },
    success: {
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      type: Sequelize.BOOLEAN
    },
    upload_time: {
      allowNull: false,
      type: Sequelize.DATE_TIME
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return question_attempts;
};
