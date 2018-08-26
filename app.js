var express = require('express');
var app = express();
var route = require('./routes/route');
// view engine setup
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.get('/',route.home);
app.get('/:city', route.city);
var port = process.env.PORT || 4000;
var server = app.listen(port, function(req,res){
  console.log("catch action at route : " + port);
});