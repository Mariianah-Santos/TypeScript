// 22. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
// dos números que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.
var soma = 0;
var media = 0;
var vezesD = 0;
while (true) {
    var num = Number(prompt("NUMERO:"));
    vezesD += 1;
    if (num == 0) {
        break;
    }
    if (num > 50 && num < 100) {
        soma += num;
    }
}
media = soma / vezesD;
console.log("MEIDA DOS NUMEROS DE 50 E 100 ".concat(media));
