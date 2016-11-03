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
    //router.post('/', this.login);

    router.post('/',
    passport.authenticate('login', { failureRedirect: '/login' }),
    function(req, res) {
    res.redirect('/');
  });

    return router;
  },
  index(req, res) {
    res.render('login', {error: req.flash('error')});
  },
  login(req, res) {
    passport.authenticate('login', {
      successRedirect: '/',
      failureRedirect: '/problem',
      failureFlash: true,
      successFlash: true,
    })(req, res);
  },
};
