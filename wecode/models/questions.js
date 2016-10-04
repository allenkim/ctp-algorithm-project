'use strict';
module.exports = function(sequelize, DataTypes) {
  var questions = sequelize.define('questions', {
    question_id: DataTypes.INTEGER,
    question_title: DataTypes.STRING,
    input: DataTypes.TEXT,
    output: DataTypes.TEXT,
    number_attempts: DataTypes.INTEGER,
    number_success: DataTypes.INTEGER,
    date: DataTypes.DATE_TIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return questions;
};