// Menu responsivo

var menu_aberto_aberto = 0;

$('#btn_abrir_menu_mobile').on('click', function(e){
    
	if(menu_aberto_aberto == 0){
		abrirMenu();
		
		var target = document.querySelector('.menu-mobile-animado');
		var player = target.animate([
			{transform: 'translate(0,0)'},
			{transform: 'translate(260px,0)'},
		],400)
		player.addEventListener('finish', function () {
			target.style.transform = 'translate(260px,0)'
		});

	}else{
		fecharMenu();
	}
	
});

$('#btn_fechar_menu_mobile').on('click', function(e){
    
	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
    
});

function abrirMenu(){
	$('#menu_mobile').show(200);
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$('#menu_mobile').hide(600);
	menu_aberto_aberto = 0;
}

// Scroll do menu

$(function() {
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 100) {
			$(".menu-fixed").addClass("menu-fixed-animado");
		}else{
			$(".menu-fixed").removeClass("menu-fixed-animado");
		}
	})
});

// Scroll suave para links

$('a').click(function (e){
	e.preventDefault();
	var id = $(this).attr('href'),
	    targetOffset = $(id).offset().top,
        menuHeight = $('.menu-fixed').innerHeight();

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 700);
});

// Contador de números

$(".counter").each(function() {
	var $this = $(this),
		  countTo = $this.attr("data-count");

		$({ countNum: $this.text()}).animate({
		countNum: countTo
	},
	{
	duration: 3000,
	easing:"linear",
	step: function() {
		$this.text(Math.floor(this.countNum));
	},
	complete: function() {
		$this.text(this.countNum);
	}
  });
});

// Cards da section "FAQ"

$('#faq_um').on('click', function(){
	$('#bloco_faq_um').show();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').hide();
});

$('#faq_dois').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').show();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').hide();
});

$('#faq_tres').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').show();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').hide();
});

$('#faq_quatro').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').show();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').hide();
});

$('#faq_cinco').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').show();
	$('#bloco_faq_seis').hide();
});

$('#faq_seis').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').show();
});
