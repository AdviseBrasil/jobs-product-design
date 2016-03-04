var http 		= require('http');
var express 	= require('express');
var bodyParser 	= require('body-parser');
var	app 		= express();
var path		= require('path');
var gulp 		= require('gulp');
var mandrill 	= require('mandrill-api/mandrill');
var util		= require('./util.js');


var mandrill_client = new mandrill.Mandrill('nzwPw0xndLL5uzzTKwoEAQ');

app.use('/public' , express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/', function(req,res){

	var mandrill_client = new mandrill.Mandrill('nzwPw0xndLL5uzzTKwoEAQ');
	var contato = util.montarContato(req.body);
	console.log(contato);
	var message = {
		'html' : util.montarHtml(contato),
		'subject' : 'Currículo Design : ' + contato.nome,
		'from_email' : req.body.email,
		'from_name' : contato.nome,
		'to' : [{
			'email' : 'higormorenoribeiro@gmail.com',
			'name' : 'Higor Moreno Ribeiro',
			'type' : 'to'
		},
		{
			'email' : 'felipec.alvares@gmail.com',
			'name' : 'Felipe Alvares',
			'type' : 'to'
		}]
	};
	var async = false;

	mandrill_client.messages.send({"message": message, "async": async}, function(result){
		res.json({sucesso: true});
	}, function(e){
		res.json({sucesso: false});
	});



});

var server = app.listen(3000);

console.log('Servidor iniciado na porta %s', server.address().port);