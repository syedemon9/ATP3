var express     =require('express');
var bodyParser  =require('body-parser');
var ejs         =require('ejs');
var exSession   =require('express-session');
var cookieParser=require('cookie-Parser');
var login       =require('./controllers/login');
var home        =require('/controllers/home');
var logout      =require('/controllers/logout');


var app   =express();

//configure

app.set('view engine', 'ejs');

//midlleware



