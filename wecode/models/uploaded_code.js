'use strict';
module.exports = function(sequelize, DataTypes) {
  var uploaded_code = sequelize.define('uploaded_code', {
    uploaded_text: {
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
