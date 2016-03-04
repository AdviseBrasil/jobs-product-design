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
					+ '<thead>'
						+ '<tr>'
							+ '<th>Nome</th>'

							+ '<th>Sobrenome</th>'

							+ '<th>Email</th>'

							+ '<th>Telefone</th>'

							+ '<th>Celular</th>'

							+ '<th>Portifolio</th>'

							+ '<th>Linkedin</th>'

							+ '<th>Skype</th>'

							+ '<th>Website</th>'

							+ '<th>Pretensão</th>'

							+ '<th>Descricao</th>'
						+ '</tr>'
					+ '</thead>'

					+ '<tbody>'
						+ '<tr>'
							+ '<td>'+ contato.nome +'</td>'

							+ '<td>' + contato.sobrenome + '</td>'

							+ '<td> '+ contato.email +' </td>'

							+ '<td> '+ contato.telefone +' </td>'

							+ '<td> '+ contato.celular +' </td>'

							+ '<td> '+ contato.portifolio +' </td>'

							+ '<td> '+ contato.linkedin +' </td>'

							+ '<td> '+ contato.skype +' </td>'

							+ '<td> '+ contato.website +' </td>'

							+ '<td> '+ contato.pretensao +' </td>'

							+ '<td> '+ contato.descricao +' </td>'
						+ '</tr>'
					+ '</tbody>'
				+ '</table>';

	return html;
}

module.exports = util;