var express = require("express");
var methodOverride = require("method-override");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var router = express.Router();

//APP CONFIG
app.set("view engine", "ejs");
app.use('/public' , express.static("public"));
app.use( '/officerImages' , express.static("officerImages"))
app.use( '/scripts' , express.static("scripts"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

///add the router
app.use('/', router);

app.listen(process.env.PORT);