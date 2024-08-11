// 13. Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo utilizando o while.

let cubo = 0;
let cont = 1
while (cont <= 1) {
    let num = Number(prompt("NUMERO:"));
    cubo = num * num;
    cubo = cubo * num;
    cont++;
}
console.log(cubo);
