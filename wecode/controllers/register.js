//router object that defines the /register route

var express = require('express');
var models = require('../models');
var redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    //Respond to GET request on the register route (/register)
    router.get('/', function(req, res) {
      this.index;
      res.render('register');
    });

    //Respond to POST request on the register route (/register)
    router.post('/', function (req, res) {
      this.submit;
      res.send('Got a POST request to register page');
    });

    //Respond to a PUT request to the register route (/register)
    router.put('/', function (req, res) {
      res.send('Got a PUT request at /register');
    });

    //Respond to a DELETE request to the register route (/register)
    router.delete('/', function (req, res) {
      res.send('Got a DELETE request at /register');
    });

    return router;
  },

  index(req, res) {
  res.render('register');
},
submit(req, res) {
  models.user.create({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  }).then((user) => {
    req.login(user, () =>
      res.redirect('/profile')
    );
  }).catch(() => {
    res.render('register');
  });
},
};
