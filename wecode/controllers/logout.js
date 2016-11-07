
var express = require('express');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.post('/', this.logout);

    router.get('/', this.logout);

    return router;
  },
  logout(req, res) {
    req.logout();
    res.redirect('/');
  },
};
