
/* funcion de cabecera al hacer scroll*/
$(document).ready(function(){
    var altura = $('.navegacion').offset().top;

    $(window).on('scroll',function(){
        if($(window).scrollTop()> altura){
            $('.cabecera').addClass('menu-fixed');

        }else{
            $('.cabecera').removeClass('menu-fixed');

        }
    })


    /* llamar la funcion de scroll */
    var scroll = new SmoothScroll('a[href*="#"]', {
	    speed: 1000,
	    speedAsDuration: true
    });


    $('.flexslider').flexslider({
        touch: true,
        pauseOnAction: false,
        pauseOnHover: false,
    });



    /* funcion de cambio de tipo de apartamentos img*/


    $("#apto2").css("display", "none");
    $("#apto3").css("display", "none");
    

    $("#tipoa").click(function(){
        $('#apto1').show(500);
        $("#apto2").css("display", "none");
        $("#apto3").css("display", "none");
    });
    $("#tipob").click(function(){
        $('#apto2').show(500);
        $("#apto1").css("display", "none");
        $("#apto3").css("display", "none");
    });
    $("#tipoc").click(function(){
        $('#apto3').show(500);
        $("#apto2").css("display", "none");
        $("#apto1").css("display", "none");
    });


});