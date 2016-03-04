var util = {};
util.montarContato = function (body){
	var contato = {
		'nome' : body.nome,
		'sobrenome' : body.sobrenome,
		'email' : body.email,
		'telefone' : body.telefone,
		'celular' : body.celular,
		'portifolio' : body.portifolio,
		'linkedin' : body.linkedin,
		'skype' : body.skype,
		'website' : body.website,
		'pretensao' : body.pretensao,
		'descricao' : body.descricao
	};

	return contato;
}

util.montarHtml = function (contato){
	var html = '';
	return html;
}
module.exports = util;