var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var session = require('express-session');
var models = require('./models/');
var flash = require('connect-flash');
var passport = require('./middlewares/authentication');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var passportSocketIo = require('passport.socketio');
var sessionStore = new session.MemoryStore();
app.use(flash());

// creating session middleware
// cookie option is not set to true only for development purposes
var sess = {
  resave: true,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {},
  secret: 'process.env.SECRET_KEY_BASE'
};


//body parser for forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('process.env.SECRET_KEY_BASE'));

if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
};

app.use(session(sess));
// initialize session for passport
app.use(passport.initialize());
app.use(passport.session());

io.use(passportSocketIo.authorize({
  key: 'connect.sid',
  secret: 'process.env.SECRET_KEY_BASE',
  store: sessionStore,
  passport: passport,
  cookieParser: cookieParser
}));


// server socket connection
io.on('connection', function(socket){
  console.log(socket.request.user.username + ' ' + socket.id + ' connected');

  socket.on('disconnect', function(){
    console.log(socket.request.user.username + ' ' + socket.id + ' disconnected');
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg, socket.request.user.username);
  });

  socket.on('user is typing', function(){
    socket.broadcast.emit('user is typing', socket.request.user.username);
  });
});

app.use(function(req, res, next) {
  if (req.user) {
    res.locals.user = req.user;
    }
  next();
});


//initialize engine for handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// loading and mounting controllers
app.use(require('./controllers/'));

var PORT_NUMBER = 8000;

http.listen(PORT_NUMBER);
console.log("Listening on port " + PORT_NUMBER + "!")

module.exports = app;
