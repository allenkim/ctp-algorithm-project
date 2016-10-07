var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

// initialize engine for handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// loading and mounting controllers
app.use(require('./controllers/'));

app.listen(8000);
