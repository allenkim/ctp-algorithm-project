'use strict';
module.exports = function(sequelize, DataTypes) {
  var uploaded_code = sequelize.define('uploaded_code', {
    code_id: DataTypes.INTEGER,
    uploaded_text: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return uploaded_code;
};