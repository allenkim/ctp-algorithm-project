//router object that defines the home route (/), the problem page is the application's root route

var express = require('express');
var redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    //Respond to GET request on the problem route (/)
    router.get('/', function(req, res) {
      this.index;
      res.render('home');
    });

    //Respond to POST request on the problem route (/)
    router.post('/', function (req, res) {
      //this.submit;
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

    return router;
  },
  index(req, res) {
    res.render('home');
  },
};
