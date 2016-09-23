var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send("Hello Team!");
});

app.listen(8000, function(){
	console.log('Example app running on port 8000');
});
