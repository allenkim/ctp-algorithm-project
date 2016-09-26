//router object that defines the root route (/), the profile page is the application's homepage

var express = require('express');
var router = express.Router();

// middleware that is specific to profile router
// It is invoked for any requests passed to this router
router.use(function timeLog(req, res, next) {
  console.log('Profile Controller :: Time: ', Date.now());
  next();
});

//Respond to GET request on the root route (/)
router.get('/', function(req, res) {
  res.send('Got a GET request for profile home page');
});

//Respond to POST request on the root route (/)
router.post('/', function (req, res) {
  res.send('Got a POST request to profile page');
});

//Respond to a PUT request to the root route (/)
router.put('/', function (req, res) {
  res.send('Got a PUT request at /');
});

//Respond to a DELETE request to the root route (/)
router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /');
});

module.exports = router;
