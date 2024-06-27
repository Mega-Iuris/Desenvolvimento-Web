import { somar, subtrair, multiplicar, dividir } from '../js/operacoes_web.js';

const resultadoTela = document.getElementById('resultado');

const vlr1 = document.createElement("input");
vlr1.id = 'n1';
vlr1.type = 'number';
resultadoTela.appendChild(vlr1);

const operador = document.createElement("input");
operador.id = 'operador';
operador.type = 'text';
resultadoTela.appendChild(operador);

const vlr2 = document.createElement("input");
vlr2.id = 'n2';
vlr2.type = 'number';
resultadoTela.appendChild(vlr2);

const botaoCalcular = document.createElement("button");
botaoCalcular.textContent = 'Calcular';
resultadoTela.appendChild(botaoCalcular);

const resultado = document.createElement("div");
resultado.id = 'resultadoOperacao';
resultadoTela.appendChild(resultado);

botaoCalcular.addEventListener('click', () => {
  const n1 = parseFloat(vlr1.value);
  const operadorValue = operador.value.trim();
  const n2 = parseFloat(vlr2.value);
  let resultadoOperacao;

  if (operadorValue === '+') {
    resultadoOperacao = somar(n1, n2);
  } else if (operadorValue === '-') {
    resultadoOperacao = subtrair(n1, n2);
  } else if (operadorValue === '*') {
    resultadoOperacao = multiplicar(n1, n2);
  } else if (operadorValue === '/') {
    resultadoOperacao = dividir(n1, n2);
  } else {
    resultadoOperacao = 'Operador inválido';
  }

  resultado.textContent = `Resultado: ${resultadoOperacao}`;
});
