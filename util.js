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

				+ '<td>Sobrenome: </td> <td>' + contato.sobrenome + '</td>'

				+ '<td>Email: </td> <td> '+ contato.email +' </td>'

				+ '<td>Telefone: </td> <td> '+ contato.telefone +' </td>'

				+ '<td>Celular: </td> <td> '+ contato.celular +' </td>'

				+ '<td>Portifolio: </td> <td> '+ contato.portifolio +' </td>'

				+ '<td>Linkedin: </td> <td> '+ contato.linkedin +' </td>'

				+ '<td>Skype: </td> <td> '+ contato.skype +' </td>'

				+ '<td>Website: </td> <td> '+ contato.website +' </td>'

				+ '<td>Pretensão: </td> <td> '+ contato.pretensao +' </td>'

				+ '<td>Descricao: </td><td> '+ contato.descricao +' </td>'
			+ '</tr>'
		+ '</table>';

	return html;
}

module.exports = util;