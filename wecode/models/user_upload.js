'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_upload = sequelize.define('user_upload', {
    code_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    upload_code: {
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      type: DataTypes.TEXT
    },
    upload_output: {
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_upload;
};
