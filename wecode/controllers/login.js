//router object that defines the /login route

var express = require('express');
var passport = require('../middlewares/authentication');
var redirect = require('../middlewares/redirect');


module.exports = {
  registerRouter() {
    var router = express.Router();

    //Respond to GET request on the login route (/login)
    router.get('/', redirect.ifLoggedIn('/user'), this.index);

    //Respond to POST request on the login route (/login)
    router.post('/', this.login);

    return router;
  },
  index(req, res) {
    res.render('login', {error: req.flash('error')});
  },
  login(req, res) {
    passport.authenticate('local', {
      successRedirect: '/user',
      failureRedirect: '/login',
      failureFlash: true,
      successFlash: true,
    })(req, res);
  },
};
