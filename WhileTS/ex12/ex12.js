// 12. Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos
// números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando
// o while.
var media = 0;
var soma = 0;
var vezesDigitado = 0;
while (true) {
    var num = Number(prompt("NUMERO:"));
    if (num == -1) {
        break;
    }
    vezesDigitado += 1;
    soma += num;
}
media = soma / vezesDigitado;
console.log("A media da turma é [" + media + "]");
console.log("Vezes que foi pedido ao usuario para add mais um numero [" + vezesDigitado + "]");
console.log("A soma dos numeros é [" + soma + "]");
