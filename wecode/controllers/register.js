//router object that defines the /register route

var express = require('express');
var router = express.Router();

// middleware that is specific to register router
// It is invoked for any requests passed to this router
router.use(function timeLog(req, res, next) {
  console.log('Register Controller :: Time: ', Date.now());
  next();
});

//Respond to GET request on the register route (/register)
router.get('/', function(req, res) {
  res.send('Got a GET request for register page');
});

//Respond to POST request on the register route (/register)
router.post('/', function (req, res) {
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

module.exports = router;
