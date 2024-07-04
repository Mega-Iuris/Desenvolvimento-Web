function criar_Label_Input(textoLabel, idInput, tipoInput = 'number', desabilitado = false) {
  
  const label = document.createElement('label');
  label.className = idInput;
  label.textContent = textoLabel;

  const input = document.createElement('input');
  input.type = tipoInput;
  input.id = idInput;
  input.name = idInput;

  if (desabilitado) {
      input.disabled = true;
  }
  return { label, input };
}

const resultadoDiv = document.getElementById('resultado');

const { label: sbMensalLabel, input: campoSalario } = criar_Label_Input('Salário Bruto mensal ', 'salario');
resultadoDiv.appendChild(campoSalario);
resultadoDiv.appendChild(sbMensalLabel);

const { label: valorIRLabel, input: campoIR } = criar_Label_Input('Valor IR ', 'valorIR', 'number', true);
resultadoDiv.appendChild(campoIR);
resultadoDiv.appendChild(valorIRLabel);

const { label: salLiquidoLabel, input: campoSalarLiquido } = criar_Label_Input('Salário Líquido (Salário - IR) ', 'campoSalarLiquido', 'number', true);
resultadoDiv.appendChild(campoSalarLiquido);
resultadoDiv.appendChild(salLiquidoLabel);

const botao = document.createElement('button');
botao.id = 'botao';
botao.textContent = 'Calcular';
resultadoDiv.appendChild(botao);

botao.addEventListener('click', function() {
  const salarioBruto = parseFloat(campoSalario.value);
  if (!isNaN(salarioBruto)) {
      const valorIR = salarioBruto * 0.15;
      campoIR.value = valorIR.toFixed(2);
      campoSalarLiquido.value = (salarioBruto - valorIR).toFixed(2);
  } else {
      alert('Por favor, insira um valor válido para o Salário Bruto.');
  }
});

const clear = document.createElement('button');
clear.id = 'clear';
clear.textContent = 'Limpar';
resultadoDiv.appendChild(clear);

clear.addEventListener('click', function() {
  campoSalario.value='';
  campoIR.value = '';
  campoSalarLiquido.value = '';
  
});