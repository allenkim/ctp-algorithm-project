'use strict';
module.exports = function(sequelize, DataTypes) {
  var questions = sequelize.define('questions', {
    question_title: {
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      type: Sequelize.STRING
    },
    input: {
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      type: Sequelize.TEXT
    },
    output: {
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      type: Sequelize.TEXT
    },
    number_attempts: {
      type: Sequelize.INTEGER
    },
    number_success: {
      type: Sequelize.INTEGER
    },
    date: {
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      type: Sequelize.DATE_TIME
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return questions;
};
