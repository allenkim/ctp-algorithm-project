var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var session = require('express-session');
var models = require('./models/');
var flash = require('connect-flash');
var passport = require('./middlewares/authentication');
var app = express();

// creating session middleware
// cookie option is not set to true only for development purposes
var sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {},
};

// body parser for forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
};

app.use(session(sess));
app.use(flash());

// initialize session for passport
app.use(passport.initialize());
app.use(passport.session());

//initialize engine for handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// loading and mounting controllers
app.use(require('./controllers/'));

app.listen(8000);

module.exports = app;
