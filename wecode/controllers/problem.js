//router object that defines the problem route (/problem), the problem page is the application's root route

var express = require('express');
var models = require('../models');
var passport = require('../middlewares/authentication');
var redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    //Respond to GET request on the problem route (/)
    router.get('/', this.index);

    //Respond to POST request on the problem route (/)
    router.post('/', this.submit);

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
    res.render('problem');
  },
  submit(req, res){

    
    // models.question_attempt.create({
    //   question_id: req.body.question_id,
    //   user_id: req.body.username,
    //   code_id: req.body.password,
    //   success: req.body.success,
    //   upload_time: req.body.upload_time
    // }).then(() => {
    //   res.redirect('/results');
    // }).catch(() => {
    //   this.index;
    // });
  }
};
