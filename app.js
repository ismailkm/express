var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser');
var app         = express();

//configure app
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//use middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname,'bower_components')));

app.use('/todo',require('./todos'));

//routes
app.get("/",function(req,res){
    res.send('Hello, express here');
});


app.listen(1337,function(){
    console.log("ready on port 1337");
});
