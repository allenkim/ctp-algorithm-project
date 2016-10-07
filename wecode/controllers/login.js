//router object that defines the /login route

var express = require('express');
var router = express.Router();

// middleware that is specific to login router
// It is invoked for any requests passed to this router
router.use(function timeLog(req, res, next) {
  console.log('Login Controller :: Time: ', Date.now());
  next();
});

//Respond to GET request on the login route (/login)
router.get('/', function(req, res) {
  res.render('login');
});

//Respond to POST request on the login route (/login)
router.post('/', function (req, res) {
  res.send('Got a POST request to login page');
});

//Respond to a PUT request to the login route (/login)
router.put('/', function (req, res) {
  res.send('Got a PUT request at /login');
});

//Respond to a DELETE request to the login route (/login)
router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /login');
});

module.exports = router;
