//router object that defines the /results route

var express = require('express');
var router = express.Router();

// middleware that is specific to results router
// It is invoked for any requests passed to this router
router.use(function timeLog(req, res, next) {
  console.log('Results Controller :: Time: ', Date.now());
  next();
});

//Respond to GET request on the results route (/results)
router.get('/', function(req, res) {
  res.render('results');
});

//Respond to POST request on the results route (/results)
router.post('/', function (req, res) {
  res.send('Got a POST request to results page');
});

//Respond to a PUT request to the results route (/results)
router.put('/', function (req, res) {
  res.send('Got a PUT request at /results');
});

//Respond to a DELETE request to the results route (/results)
router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /results');
});

module.exports = router;
