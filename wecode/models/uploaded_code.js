'use strict';
module.exports = function(sequelize, DataTypes) {
  var uploaded_code = sequelize.define('uploaded_code', {
    code_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uploaded_text: {
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
  return uploaded_code;
};
