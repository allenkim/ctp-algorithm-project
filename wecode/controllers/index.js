var express = require('express');
// load node file system (fs) module
var fs = require('fs');
// load path module to handle and transfer file paths
var path = require('path');

var router = express.Router();
var basename = path.basename(module.filename);

//redirect jquery
router.use('/js/jquery', express.static('node_modules/jquery/dist'));
//redirects materialize
router.use('/js/materialize', express.static('node_modules/materialize-css/dist/js'));
router.use('/css/materialize', express.static('node_modules/materialize-css/dist/css'));
router.use('/css/fonts', express.static('node_modules/materialize-css/dist/fonts'));
//redirects socket
router.use('/socket.io-client', express.static('node_modules/socket.io-client'));
//redirects public
router.use('/public', express.static('public'));

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => {
    var fileName = file.substr(0, file.length - 3);
    router.use(`/${fileName}`, require(`./${fileName}`).registerRouter());
  });

  router.get('/', (req, res) => {
    res.render('home');
  });

  module.exports = router;
