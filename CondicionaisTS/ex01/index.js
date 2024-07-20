// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a
// zero.
var numero = Number(prompt("NUMERO: "));
if (numero > 0) {
    console.log("POSITIVO [" + numero + "]");
}
else if (numero == 0) {
    console.log("ZERO [" + numero + "]");
}
else {
    console.log("NEGATIVO [" + numero + "]");
}
