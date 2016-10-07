var express = require('express');
var app = express();


// loading and mounting controllers
app.use(require('./controllers/'));

app.listen(8000);
