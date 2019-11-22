"use strict";
/*var http=require('http');
console.log('http');
function cb(req,res)
{
	res.statusCode=200;
	res.end('Bye bye');
}
var application=http.createServer(cb);
console.log('Server running')
application.listen(3090);
var application2=http.createServer(cb)2;
console.log('Server running')
application.listen(3091);*/
var express = require('express');
var app = express();

app.get('/auth',
function(req,res,next){
console.log('in registration');
next();
},
function(req,res,next){
console.log('in second middleware // send');
res.status(200);
res.set({'Content-Type':'plain'});
res.send('PepeLaugh');
})

//route
app.get('/',function(req,res){
console.log('in registration');
var b={name:"KEKW",test:'OH NONO'}
res.status(200);
res.set({'Content-Type':'application/json'})
res.json(b);

app.listen(3090);