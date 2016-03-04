(function ($, window, undefined) {

	'use strict';

	$(function () {

		if ($.fn.validate) {
			$('#contact-form').validate({
				eachInvalid: function () {
					//$(this).parents('form').find('input').removeClass('valid');
					$(this).addClass('invalid');
				},
				eachValid: function () {
					//$(this).parents('form').find('input').removeClass('invalid');
					$(this).removeClass('invalid');
				}
			});
		}

		$('#contact-form').on('submit', function(event) {

			event.preventDefault();

			var data = $(this).serialize(),
				_this = $(this);

			if($(this).validate('isvalid')) {
				$.ajax({
					type: 'POST',
					action: '/',
					data: data,
					beforeSend: function() {
						_this.addClass('sending');
					},
					success: function(response) {
						if(response) {
							$('main').remove();
							$('.sucess-contact').addClass('--show');
						} else {
							console.log('deu ruim');
						}
					}
				});
			}

		});

	});

	// Mask
	$('[name="pretensao"]').mask('000.000', {reverse: true});
	$('[name="telefone"] , [name="celular"]').mask('(00) 0000-0000');


})(jQuery, this);