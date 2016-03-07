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
					action: '/design',
					data: data,
					beforeSend: function() {
						_this.find('button').addClass('--animate');

						setTimeout(function() {
							_this.find('button').remove();

							$('.bar-loading').addClass('--animate');
						},300);

						_this.addClass('sending');
					},
					success: function(response) {
						if(response) {
							$('body').css({'overflow-y': 'hidden'});
							$('.success-contact , .bg-mask').addClass('--show');
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