//router object that defines the /{name} route

var express = require('express');
var router = express.Router();

var models = require('../models');

// middleware that is specific to profile router
// It is invoked for any requests passed to this router
router.use(function timeLog(req, res, next) {
  console.log('Profile Controller :: Time: ', Date.now());
  next();
});

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
  res.render('profile',{'username': req.params.username});
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

module.exports = router;
