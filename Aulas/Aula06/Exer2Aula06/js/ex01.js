var conteudoDiv = document.getElementById('conteudo');

var nome = prompt("Qual é o seu nome?");
var idade = prompt("Qual é a sua idade?");
var endereco = prompt("Qual é o seu endereço? (Ex: Rua XPTO)");
var cpf = prompt("Qual é o seu CPF?");

var pessoa = [nome, idade, endereco, cpf];


var musica1 = {
    nome: "Bohemian Rhapsody",
    artista: "Queen",
    ano: 1975,
    genero: "Rock"
};

var musica2 = {
    nome: "Thriller",
    artista: "Michael Jackson",
    ano: 1982,
    genero: "Pop"
};

var musica3 = {
    nome: "Uptown Funk",
    artista: "Mark Ronson ft. Bruno Mars",
    ano: 2014,
    genero: "Funk"
};


alert("Música 1:\nNome: " + musica1.nome + "\nArtista: " + musica1.artista + "\nAno: " + musica1.ano + "\nGênero: " + musica1.genero);

alert("Música 2:\nNome: " + musica2.nome + "\nArtista: " + musica2.artista + "\nAno: " + musica2.ano + "\nGênero: " + musica2.genero);

alert("Música 3:\nNome: " + musica3.nome + "\nArtista: " + musica3.artista + "\nAno: " + musica3.ano + "\nGênero: " + musica3.genero);
