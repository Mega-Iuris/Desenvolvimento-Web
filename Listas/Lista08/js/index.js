let conteudoPrincipal = document.getElementById("principal");

let tela = document.createElement("input");
tela.className = "display";
tela.disabled = true;

let botoes = document.createElement("div");
botoes.className = "calculadora";

let botoesCalc = [
  "7", "8", "9",
  "4", "5", "6",
  "1", "2", "3",
  "0", "-", "+",
  "/", "*", "=",
  "Clear"
];

botoesCalc.forEach(function (texto) {
  let teclaBtn = document.createElement("button");
  teclaBtn.textContent = texto;
  if (texto === "Clear") {
    teclaBtn.className = "clearBtn";
  }
  botoes.appendChild(teclaBtn);
});

conteudoPrincipal.appendChild(tela);
conteudoPrincipal.appendChild(botoes);

let entradaAtual = "";

botoes.addEventListener("click", function (event) {
  let botaoClicado = event.target;
  let valorBotao = botaoClicado.textContent;

  if (botaoClicado.tagName === "BUTTON") {
    if (valorBotao >= "0" && valorBotao <= "9") {
      entradaAtual += valorBotao;
      tela.value = entradaAtual;
    } else if (
      valorBotao === "+" ||
      valorBotao === "-" ||
      valorBotao === "*" ||
      valorBotao === "/"
    ) {
      if (entradaAtual && !isNaN(entradaAtual[entradaAtual.length - 1])) {
        entradaAtual += " " + valorBotao + " ";
        tela.value = entradaAtual;
      }
    } else if (valorBotao === "=") {
      if (entradaAtual) {
        let resultado = eval(entradaAtual.replace(/ /g, ""));
        tela.value = resultado;
        entradaAtual = resultado.toString();
      }
    } else if (valorBotao === "Clear") {
      entradaAtual = "";
      tela.value = "";
    }
  }
});
