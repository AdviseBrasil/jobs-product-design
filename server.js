var http 	= require('http');
var express = require('express');
var	app 	= express();
var path    = require("path");

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

var server = app.listen(3000);

console.log('Servidor iniciado na porta %s', server.address().port);