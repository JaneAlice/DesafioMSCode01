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

//

$(document).ready(function(){

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
});