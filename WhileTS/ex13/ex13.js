// 13. Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo utilizando o while.
var cubo = 0;
var cont = 1;
while (cont <= 1) {
    var num = Number(prompt("NUMERO:"));
    cubo = num * num;
    cubo = cubo * num;
    cont++;
}
console.log(cubo);
