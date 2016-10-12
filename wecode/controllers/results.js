//router object that defines the /results route

var express = require('express');
var redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    //Respond to GET request on the results route (/results)
    router.get('/', function(req, res) {
      this.index;
      res.render('results');
    });

    //Respond to POST request on the results route (/results)
    router.post('/', function (req, res) {
      this.submit;
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

    return router;
  },
  index(req, res) {
    res.render('results');
  },
};
