// 11. Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o
// menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0
// utilizando o while.
var maior = -Infinity;
var menor = Infinity;
while (true) {
    var num = Number(prompt("Número:"));
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
console.log("O maior numero é [" + maior + "]");
console.log("O menor numero é [" + menor + "]");
