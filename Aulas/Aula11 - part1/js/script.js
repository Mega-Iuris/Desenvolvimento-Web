let botao = document.getElementById("btn-resultado")
let meuConteudo = document.getElementById("conteudo")


let campo1 = document.createElement('input');
campo1.id = 'campoN1';
meuConteudo.appendChild(campo1);

let campo2 = document.createElement('input');
campo2.id = 'campoN2';
meuConteudo.appendChild(campo2);

let campo3 = document.createElement('input');
campo3.id = 'campoN3';
meuConteudo.appendChild(campo3);

let campo4 = document.createElement('input');
campo4.id = 'campoN4';
meuConteudo.appendChild(campo4).disabled = true;

botao.addEventListener("click", () => {
    if (campo2.value === "+") {
        let valor1 = parseFloat(campo1.value);
        let valor2 = parseFloat(campo3.value);
        let resultado = valor1 + valor2;
        campo4.value = resultado;
    } else if (campo2.value === "-") {
        let valor1 = parseFloat(campo1.value);
        let valor2 = parseFloat(campo3.value);
        let resultado = valor1 - valor2;
        campo4.value = resultado;
    } else if (campo2.value === "*") {
        let valor1 = parseFloat(campo1.value);
        let valor2 = parseFloat(campo3.value);
        let resultado = valor1 * valor2;
        campo4.value = resultado;
    } else if (campo2.value === "/") {
        let valor1 = parseFloat(campo1.value);
        let valor2 = parseFloat(campo3.value);
        let resultado = valor1 / valor2;
        campo4.value = resultado;
    }
});
let clear = document.createElement('button');
clear.id = 'limpar';
meuConteudo.appendChild(clear);
clear.textContent = 'Limpar';

clear.addEventListener("click", () => {
    campo1.value = '';
    campo2.value = '';
    campo3.value = '';
    campo4.value = '';
});


