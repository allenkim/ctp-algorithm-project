//router object that defines the /{name} route

var express = require('express');
var redirect =require('../middlewares/redirect');
var models = require('../models');

module.exports = {
  registerRouter() {
    var router = express.Router();

    //Respond to GET request to generic user route (/user)
    router.get('/', function (req, res) {
      var list_of_users = [];
      models.user.findAll({
        attributes: ['username']
      }).then(function(users) {
        for (var i = 0, len = users.length; i < len; i++){
          list_of_users.push(users[i].username);
        }
        res.render('user',{'usernames': list_of_users});
      });
    });

    //Respond to GET request to a specific user route (/user/:username)
    router.get('/:username', function (req, res) {
      redirect.ifNotLoggedIn();
      this.index;
      res.render('user_profile',{'username': req.params.username});
    });

    //Respond to POST request on the profile route (/user/:username)
    router.post('/:username', function (req, res) {
      res.send('Got a POST request to profile page');
    });

    //Respond to a PUT request to the profile route (/user/:username)
    router.put('/:username', function (req, res) {
      res.send('Got a PUT request at /profile');
    });

    //Respond to a DELETE request to the profile route (/user/:username)
    router.delete('/:username', function (req, res) {
      res.send('Got a DELETE request at /profile');
    });

    return router;
  },
  index(req, res) {
    res.render('user_profile', {user: req.user, success: req.flash('success')});
  },
};
