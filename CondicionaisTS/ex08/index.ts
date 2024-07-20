// 8. Faça um programa que receba três números e os imprima em ordem crescente.

let num1 = Number(prompt("NUMERO 1:"));
let num2 = Number(prompt("NUMERO 2:"));
let num3 = Number(prompt("NUMERO 3:"));
let crescente: number[];

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        crescente = [num1, num2, num3];
    } else {
        crescente = [num1, num3, num2];
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        crescente = [num2, num1, num3];
    } else {
        crescente = [num2, num3, num1];
    }
} else {
    if (num1 <= num2) {
        crescente = [num3, num1, num2];
    } else {
        crescente = [num3, num2, num1];
    }
}

console.log("Números em ordem crescente:", crescente);