//router object that defines the /results route

var express = require('express');
var models = require('../models');
var passport = require('../middlewares/authentication');
var redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    //Respond to GET request on the results route (/results)
    router.get('/', function(req, res) {
      res.render('results');
    });

    //Respond to POST request on the results route (/results)
    router.post('/', function (req, res) {
      console.log("post received");
      models.question_attempts.findAll({
        limit: 1,
        where: {
          user_id: req.session.passport.user,
        },
        order: [ ['createdAt', 'DESC']]
      }).then(function(entries){
        res.end(entries[0].dataValues.grading_output);
      });
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
  }
};
