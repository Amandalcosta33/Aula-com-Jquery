let pokemon = ['p1.png', 'p2.png', 'p3.png', 'p4.png'];
let pokemonNome = ['Psyuck', 'Charmander', 'Pikachu', 'Squirtle'];
let sorteio = Math.floor(Math.random() * pokemon.length);

// console.dir(pokemon);
// console.log(sorteio);
// console.log(typeof sorteio);

$('.pokemon-foto').attr('src', 'imagens/' + pokemon[sorteio]).attr('alt', 'Pokemon');

function GerarBotoes(){
    // let botao = "";
    for(let i=0; i<pokemon.length; i++){
        $('#botoes').append("<button class='botao-resposta'>" + pokemonNome[i] + "</button>");
    }
    // $('#botoes').html(botao);

}

GerarBotoes();

function Resolver(resposta){
    if (resposta == pokemonNome [sorteio]){
        alert('Parabens, voce acertou!');
    } else{
        alert('Que pena, voce errou!');
    }

    $('#pokemon-nome').html(pokemonNome[sorteio]);
    $('.pokemon-foto').css('filter', 'brightness(1)');
}

function Ajuda(){
    let imagem = "";
    for(let i=0; i<pokemon.length; i++){
        imagem = "<img src='imagens/" +pokemon[i]+ "'>";
        $('#pokemon-ajuda').append( "<span>" + imagem + "<br>" + pokemonNome[i] + "</span>");
    }

    // $('#pokemon-ajuda').html(html);
}

$('.ajuda').click(function(){
        Ajuda();
})

$('.botao-resposta').click(function(elemento){
    Resolver(elemento.target.textContent);

});