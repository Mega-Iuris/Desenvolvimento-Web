//Arrays/Listas/Vetores
//Arrays se assemelham com Banco de Dafos
//Um Array dee ser capaz de: Adicionar, Remover, Buscar/Listar e Atualizar

var nome = 'Fulano' //variavel simples
var nomes =['Miguel', 'Mateus', 'Monica'] // variavel composta
var idades = [10, 11, 12]
//var idades = new Array()

console.log(nomes) 
// console.log(idades) 
// console.log(nomes[0]) // Acessa a posição 0 - Miguel 
// console.log(nomes[1]) // Acessa a posição 0 - Mateus 
// console.log(nomes[2])  // Acessa a posição 0 - Monica 

console.log(nomes.length) //Tamanho do Array

nomes.push('Davi') // Adiciona elemento no Array
console.log(nomes)

nomes.pop() //Por padrão remove o ultimo
console.log(nomes)

nomes.reverse() //Inverte o Array
console.log(nomes)

nomes.shift() //Por padrão remove o primeiro
console.log(nomes)