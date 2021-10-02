// Menu responsivo

var menu_aberto_aberto = 0;

$('#btn_abrir_menu_mobile').on('click', function(e){
    
	if(menu_aberto_aberto == 0){
		abrirMenu();
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
	$('#menu_mobile').show(500);
	$('#btn_abrir_menu_mobile').addClass('botao-menu-mobile-ativo');
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$('#menu_mobile').hide(500);
	$('#btn_fechar_menu_mobile').removeClass('botao-menu-mobile-ativo');
	menu_aberto_aberto = 0;
}


// Contador dos números da Home

$({ Counter: 0 }).animate({
	Counter: $('#contar').text()
  }, {
	duration: 1000,
	easing: 'swing',
	step: function() {
	  $('.Single').text(Math.ceil(this.Counter));
	}
  });