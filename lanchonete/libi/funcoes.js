$(document).ready(function(){

//   $('#botao-cardapio').avgrund({
        //       template: $('.conteudo-cardapio'),
        //       showClose: true,
        //       showCloseText: 'x'
        //   });
        $('#slider').nivoSlider();
        
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });
});