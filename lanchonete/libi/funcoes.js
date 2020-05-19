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

          $('.abas').champ();

          $('#cardapio-completo').click(function(){
            $.ajax({
                url: 'cardapio-simples.txt',
                beforeSend: function(){
                  $('#cardapio-completo-lista').html('<img src="img/loading.gif">');
                  alert("Vou enviar");
                },
                success : function(conteudo){
                  // console.dir(conteudo);
                  $('#cardapio-completo-lista').html(conteudo);

                },
                error: function(e){
                  console.dir(e);
                  alert("Deu erro");
                  $('#cardapio-completo-lista').html(e.responseText);
                }

                // complete: function (){
                //   alert("Acabou");
                // }
      
                
            });
            
          });

          $('#cardapio-online').click(function(){
            $.ajax({
                url: 'http://cozinhapp.sergiolopes.org/produtos',
                beforeSend: function(){
                  $('#cardapio-completo-lista').html('<img src="img/loading.gif">');
                  alert("Vou enviar");
                },
                success : function(conteudo){
                  console.dir(conteudo);
                  $('#cardapio-completo-lista').html("");

                  for (let i=0; i <conteudo.length; i++){
                    $('#cardapio-completo-lista').append(conteudo[i].nome + " - ");
                    $('#cardapio-completo-lista').append("<strong>" + conteudo[i].preco + "</strong>" + "<br>");
                    $('#cardapio-completo-lista').append(conteudo[i].descricao + "<br>");
                    $('#cardapio-completo-lista').append("<img src='" + conteudo[i].foto + "' style='width:100px'>" + "<br>");
                    $('#cardapio-completo-lista').append("<hr>");
                  }
                 

                },
                error: function(e){
                  console.dir(e);
                  alert("Deu erro");
                  $('#cardapio-completo-lista').html(e.responseText);
                },

                complete: function (){
                  alert("Acabou");
                }
      
                
            });
            
          });

          $('#botao-buscar-cep').click(function(){
            let cep = $('#cep').val();
            $.ajax({
              url: 'https://viacep.com.br/ws/'+cep+'/json',
              success: function(conteudo){
                console.dir(conteudo);
                $('#endereco-completo').html('Rua:  '+ conteudo.logradouro);
              },
              beforeSend: function(){
                $('#endereco-completo').html('<img src="img/loading.gif">');
              },
              error: function(e){
                $('#endereco-completo').html('Endereço não encontrado');
              }
            })
          });
});