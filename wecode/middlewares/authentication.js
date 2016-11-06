// Load the bcrypt module to match passwords
var bcrypt = require('bcrypt-nodejs');
// Load passport module, an authentication middleware for Node.js
// Strategy to authenticate user: LocalStrategy
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models').user;

// verifying incoming password against the hashed password
function passwordsMatch(passwordSubmitted, passwordStored, cb) {
  bcrypt.compare(passwordSubmitted, passwordStored, function(err, res){
    if (err) {
      console.log(err);
    }
    cb(null, res);
  });
}

//Registration strategy
passport.use(new LocalStrategy({
  usernameField: 'username',
},
  (username, password, done) => {
    User.findOne({
      where: { username },
    }).then((user) => {
      if (user) {
        if (passwordsMatch(password, user.password) === false) {
          return done(null, false, { message: 'Incorrect password.' });
        }
      } else if (user == null) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);

//login authentication strategy
passport.use('login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback : true
 },
 function(req, username, password, done) {
     User.findOne({
       where: { username },
     }).then((user) => {
        //check if user exists
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        //check if password matches
        passwordsMatch(password, user.password, function(err, res){
           if (res === false){
             return done(null, false, { message: 'Incorrect password.' });
           }
           else {
             return done(null, user, { message: 'Successfully Logged In!' });
          }});
     });
}));


// serialize user instance to session with only the username
passport.serializeUser(function(user, done) {
  done(null, user.user_id);
})

// deserialize user instance from session
passport.deserializeUser(function(id, done) {
  User.findById(id).then(function(user) {
    done(null, user);
  }).catch(function(err) {
    if (err) {
      throw err;
    }
 });
});

passport.redirectIfLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

passport.redirectIfNotLoggedIn = (route) =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;
