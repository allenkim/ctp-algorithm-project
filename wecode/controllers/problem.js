//router object that defines the problem route (/), the problem page is the application's root route

var express = require('express');
var router = express.Router();

// middleware that is specific to problem router
// It is invoked for any requests passed to this router
router.use(function timeLog(req, res, next) {
  console.log('Problem Controller :: Time: ', Date.now());
  next();
});

//Respond to GET request on the problem route (/)
router.get('/', function(req, res) {
  res.render('problem');
});

//Respond to POST request on the problem route (/)
router.post('/', function (req, res) {
  res.send('Got a POST request to problem page');
});

//Respond to a PUT request to the problem route (/)
router.put('/', function (req, res) {
  res.send('Got a PUT request at /');
});

//Respond to a DELETE request to the problem route (/)
router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /');
});

module.exports = router;
