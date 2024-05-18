var n1 = 5;
var n2 = 10;
var n3 = "10";

var ehMaior = n1 > n2; //false
var ehMenor = n1 < n2; //true
var ehIgual = n1 == n2; //false
var ehMaiorOuIgual = n1 >= n2; //false
var ehMenorOuIgual = n1 <= n2; //true
var ehDiferente = n1 != n2; //true

var saoIguais = 10 == "10"; //true (verificar valor)
var saoIdenticos = 10 === "10"; //false (verifica valor e tipo)

alert(saoIguais);
alert(saoIdenticos);
