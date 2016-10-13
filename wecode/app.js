var express = require('express');
var exphbs = require('express-handlebars');
var models = require('./models/');
var passport = require('./middlewares/authentication');
var app = express();

//initialize engine for handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// initialize session for passport
app.use(passport.initialize());
app.use(passport.session());

// loading and mounting controllers
app.use(require('./controllers/'));

app.listen(8000);

module.exports = app;
