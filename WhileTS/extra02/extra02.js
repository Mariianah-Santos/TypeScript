// Faça um programa que parar quando o usuario digitar 0
// mostre o maior numero e o menor numero lido.
var maior = -Infinity;
var menor = Infinity;
while (true) {
    var num = Number(prompt("NUMERO:"));
    if (num == 0) {
        break;
    }
    if (num > maior) {
        maior = num;
    }
    if (num < menor) {
        menor = num;
    }
}
console.log("o maior numero: " + maior);
console.log("o menor numero: " + menor);
