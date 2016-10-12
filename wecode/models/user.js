'use strict';

const bcrypt = require('bcrypt-nodejs');


module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    email: {
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
      type: DataTypes.STRING
    },
    username: {
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isAlphanumeric: true,
      },
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  user.beforeCreate((user) =>
    new sequelize.Promise((resovle) => {
      bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
        resovle(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password = hashedPw;
    })
  );
  
  return user;
};
