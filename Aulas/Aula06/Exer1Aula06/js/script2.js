//Objetos literais em JavaScript

//var pessoa = ['Fulano', 10, 'Rua XPTO', 30, 'Analista', 'Maria']
//var pessoa2 = new Object()

var pessoa = {
  nome: "Fulano",
  idade: 30,
  endereco: "XPTO",
  numeroCasa: "30",
  cargo: "Analista",
  conjuge: "Maria",
  ehMaiorIdade: true,
  telefone: ["11 977855-5555", "11 97722-8565", "11 972255-1155"],
  filhos: [
    {
      nome: "Joaozinho",
      idade: 10,
    },
    {
      nome: "Mariazinha",
      idade: 5,
    },
  ],
};

console.log(pessoa);
