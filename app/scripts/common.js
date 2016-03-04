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

	});

})(jQuery, this);