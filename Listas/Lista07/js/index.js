var produtos = [
    {
        nome: 'Notebook',
        descricao: 'Notebook i7',
        preco: 5000,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Celular',
        descricao: 'Smartphone',
        preco: 1500,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Tablet',
        descricao: 'Tablet i5',
        preco: 2000,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Monitor',
        descricao: 'Monitor LG 19"',
        preco: 3000,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Teclado',
        descricao: 'Teclado Gamer',
        preco: 500,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Mouse',
        descricao: 'Mouse Gamer',
        preco: 300,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Headset',
        descricao: 'Headset Gamer',
        preco: 200,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Webcam',
        descricao: 'Webcam',
        preco: 100,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'SSD',
        descricao: 'SSD 128GB',
        preco: 500,
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'HD',
        descricao: 'HD 1TB',
        preco: 1000,
        imagem: "https://via.placeholder.com/150"
    }
]

var conteudoTitulo = document.createElement('h1')
conteudoTitulo.innerText = 'Loja de Informática'
conteudoTitulo.className = 'titulo-loja'
document.body.insertBefore(conteudoTitulo, document.getElementById('conteudo-principal'))


var conteudoPrincipal = document.getElementById('conteudo-principal')

for (const produto of produtos) {
    var conteudoProduto = document.createElement('div')
    conteudoProduto.classList.add('conteudo-produto')

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nome = document.createElement('h2')
    nome.innerText = produto.nome
    conteudoProduto.appendChild(nome)

    var descricao = document.createElement('p')
    descricao.innerText = produto.descricao
    conteudoProduto.appendChild(descricao)

    var preco = document.createElement('p')
    preco.innerText = `R$ ${produto.preco}`
    conteudoProduto.appendChild(preco)

    var botoes = document.createElement('div')
    botoes.className = "bnt"

    var botaoComprar = document.createElement('button')
    botaoComprar.innerText = 'Comprar'
    botaoComprar.className = "btn-comprar"
    botoes.appendChild(botaoComprar)

    var detalhes = document.createElement('button')
    detalhes.innerText = 'Detalhes'
    detalhes.className = "btn-detalhes"
    botoes.appendChild(detalhes)


    conteudoProduto.appendChild(botoes)
    conteudoPrincipal.appendChild(conteudoProduto)
} 