// 3- Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são
// iguais.

let num1 = Number(prompt("NUMERO 1:"));
let num2 = Number(prompt("NUMERO 2:"));
if (num1 > num2) {
    console.log("O NUMERO 1 É O MAIOR [" + num1 + "]");
} else if (num2 > num1) {
    console.log("O NUMERO 2 É O MAIOR [" + num2 + "]");
} else {
    console.log("OS NUMERO 1 E 2 SÃO IGUAIS N1[" + num1 + "] | N2[" + num2 + "]");
}