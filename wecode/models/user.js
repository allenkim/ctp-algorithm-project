'use strict';
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
    new.sequelize.Promise((resolve) => {
      bcrypt.hash(user.passwprd, null, null, (err, hashedPasswprd) => {
        resolve(hashedPassword);
      });
    }).then((hashedPw) => {
      user.password = hashedPw;
    })
  });

  return user;
};
