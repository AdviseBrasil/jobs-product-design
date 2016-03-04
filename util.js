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
	var html = '<table>'
			+ '<tr>'
				+ '<td>Nome: </td> <td>'+ contato.nome +'</td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Sobrenome: </td> <td>' + contato.sobrenome + '</td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Email: </td> <td> '+ contato.email +' </td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Telefone: </td> <td> '+ contato.telefone +' </td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Celular: </td> <td> '+ contato.celular +' </td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Portifolio: </td> <td> '+ contato.portifolio +' </td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Linkedin: </td> <td> '+ contato.linkedin +' </td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Skype: </td> <td> '+ contato.skype +' </td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Website: </td> <td> '+ contato.website +' </td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Pretensão: </td> <td> '+ contato.pretensao +' </td>'
			+ '</tr>'
			+ '<tr>'
				+ '<td>Descricao: </td><td> '+ contato.descricao +' </td>'
			+ '</tr>'
		+ '</table>';

	return html;
}

module.exports = util;