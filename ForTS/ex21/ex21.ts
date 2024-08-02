// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.

let soma = 0;
for (let cont = 1; cont <= 2; cont++) {
    let num = Number(prompt("NUMERO [" + cont + "]"));
    soma += num;
}
console.log("A soma dos numeros é: " + soma);