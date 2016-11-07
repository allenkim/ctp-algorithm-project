var express = require('express');
var redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    var router = express.Router();

    router.get('/', redirect.ifNotLoggedIn(), this.index);

    return router;
  },
  index(req, res) {
    res.render('user_profile', { user: req.user, success: req.flash('success') });
  },
};
