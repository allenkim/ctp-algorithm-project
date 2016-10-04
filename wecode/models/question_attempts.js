'use strict';
module.exports = function(sequelize, DataTypes) {
  var question_attempts = sequelize.define('question_attempts', {
    attempt_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    code_id: DataTypes.INTEGER,
    success: DataTypes.BOOLEAN,
    upload_time: DataTypes.DATE_TIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return question_attempts;
};