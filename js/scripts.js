
jQuery(document).ready(function($){
	
	//placeholders para IEcas antigos
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
		
		if (input.attr('name') == 'telefone') {
			input.mask('(99) 9999-9999');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
		
	$('[placeholder]').parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		});
	});

	$("#tel").mask("(99) 9 9999-9999");
	
	//fechar aviso navegador
	$("#fechar").click(function () {
		$("#aviso").remove();
	});
	
	//exibe form de contato
	$(".btn-exibe-form, #fechar").click(function () {
		$(this).fadeOut();
	  	$("#contato").stop().slideToggle();
	});
	$(".icon-exibe-form").click(function (e) {
		e.preventDefault();
		$("#fechar").fadeIn();
		$(".btn-exibe-form").fadeOut();
	  	$("#contato").stop().slideToggle();
	});
	$("#fechar").click(function () {
		$(this).fadeIn();
		$(".btn-exibe-form").fadeIn();
	});

});