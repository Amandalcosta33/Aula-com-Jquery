// let filmesNome =  ['Karate Kid  - A hora da verdade', 'Garotos Perdidos'];
// let filmesImagens = ['karatekid.jpg', 'lostboys.jpg'];
// let classificacaoFilme = ['10 anos', '14 anos'];
let ingressos = [];

let filmes = [
    {
        id: 0,
        nome:'Star Wars - A Ameaça fantasma',
        classificacao:'10 anos',
        foto: 'starwars.jpg', 
        horario: '17:30',
        sinopse: 'Obi-Wan e seu mentor embarcam em uma perigosa aventura na tentativa de salvar o planeta das garras de Darth Sidious. Durante a viagem, eles conhecem um habilidoso menino e decidem treiná-lo para se tornar um Jedi.'
    },
    {
        id: 1,
        nome: 'A Teoria de Tudo',
        classificacao:'Livre',
        foto:'teoria.jpg',
        horario: '13:30',
        sinopse: 'Baseado na história de Stephen Hawking, o filme expõe como o astrofísico fez descobertas relevantes para o mundo da ciência, inclusive relacionadas ao tempo.'
    },
    {
        id: 2,
        nome:'Sniper Americano',
        classificacao:'14 anos',
        foto:'sniper.jpg',
        horario: '21:30',
        sinopse:'História real de Chris Kyle, atirador de elite das forças especiais da marinha dos Estados Unidos. Durante a guerra do Iraque, sua missão era uma só- proteger seus companheiros.'
    },
    {
        id: 3,
        nome:'Django Livre',
        classificacao:'18 anos',
        foto:'django.jpg',
        horario: '21:30',
        sinopse:'No sul dos Estados Unidos, anos antes da Guerra Civil, um ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa.'
    },
    {
        id: 4,
        nome:'A Árvore da Vida',
        classificacao:'Livre',
        foto:'arvore.jpg',
        horario: '16:30',
        sinopse:'História de uma típica família americana dos anos 50, formada por um casal e três filhos. A rígida educação, o ambiente e o passado ainda permeiam a vida de Jack, o filho mais velho, que na vida adulta tenta se reconciliar com o pai.'
    }
];

function ListarFilmes(){
for (let i=0; i<filmes.length; i++){
    let cartao = MontarCartao(filmes[i]);
    $('.filmes').append(cartao);
}
}

function MontarCartao(filme){
    let cartaoMontado ="<div class='cartao'> ";
    cartaoMontado += "<img src='imagens/" + filme.foto + "'>";
    cartaoMontado += "<h3>" + filme.nome + "</h3>";
    cartaoMontado += "<button class='ver-mais'>Ver Mais</button>";
    cartaoMontado += "<div class='descricao'>";
    cartaoMontado += "<ul>";
    cartaoMontado += "<li><Strong> Horário: </strong>" + filme.horario + " </li>";
    cartaoMontado += "<li><Strong> Classificação: </strong>" + filme.classificacao + " </li>";
    cartaoMontado += "<li><Strong> Sinopse: </strong>" + filme.sinopse + " </li>";
    cartaoMontado += "</ul>";
    cartaoMontado += "<button class='botao-comprar' data-id='" + filme.id + "'> Comprar </button>";
    cartaoMontado += "</div>"
    cartaoMontado += "</div>"
    return cartaoMontado;
}

ListarFilmes();
$('.descricao').hide();

$('.ver-mais').click(function(){
    // $('.descricao').show();
    console.log($(this).text());
    if($(this).text() =="Ver Mais"){
        $(this).text("Ver Menos");
    }else{
        $(this).text("Ver Mais");
    }
    $(this).next().slideToggle();
}
);

$('.botao-comprar').click(function(){
    ComprarIngresso(filmes[$(this).attr('data-id')]);
}
);

function ComprarIngresso(filme){
    let confirmação = confirm("Você esta prestes a comprar um ingresso para o filme "+ filme.nome + "\n Confirma?");
    if (confirmação){
        ingressos.push(filme.nome);
        $('.ingressos').text(ingressos.length);
        $('.lista-ingresso').append("<li>" + filme.nome + "</li>");
        // $('.lista-ingresos').html(listaIngresso);
        if ($('#botao-finalizar').length <= 0){
            $('.area-carrinho').append('<button id="botao-finalizar" class="botao-comprar">FINALIZAR COMPRA </button>');
        }  
    }
}
$('#botao-carrinho').click(function(){
$('.lista-ingresso').slideToggle();
}
);
