// 18. Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando
// o usuário digitar o número 0 utilizando o while.
var pares = 0;
var impares = 0;
while (true) {
    var num = Number(prompt("NUMERO:"));
    if (num == 0) {
        break;
    }
    if (num % 2 == 0) {
        pares += 1;
    }
    else {
        impares += 1;
    }
}
console.log("PARES DIGITADOS QTD [" + pares + "]");
console.log("IMPARES DIGITADOS QTD [" + impares + "]");
