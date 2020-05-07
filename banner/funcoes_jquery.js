let fotos = ['foto1.png', 'foto2.png', 'foto3.png'];
let legendas = ['Homem Aranha', 'Vingadores', 'Capitã Marvel'];
let fotoAtual = 0 ;


function TrocarFotos(foto){
    $('.imagem-banner').attr('src', 'imagens/' + fotos[foto]).attr('alt', legendas[foto]);
    $('.legenda').html(legendas[foto]);
    $('.banner button').addClass('preto-e-branco');
    console.log(foto);
    $('#btFoto' +( parseInt(foto)+1)).removeClass('preto-e-branco');
}

setInterval(function(){
    fotoAtual++;
    if(fotoAtual >= fotos.length){
        fotoAtual = 0;
    }
    TrocarFotos(fotoAtual);
}, 3000);

$('.botao-foto').click(function(elemento){
    // TrocarFotos(0);
    TrocarFotos(elemento.target.parentElement.dataset.foto);
});

// $('#btFoto2').click(function(){
//     TrocarFotos(1);
// });

// $('#btFoto3').click(function(){
//     TrocarFotos(2);
// });

TrocarFotos(0);