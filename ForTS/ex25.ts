// 25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.

let num = 20;
let soma = 0;
for(let cont = 1; cont <= num; cont++) {
    if(cont % 2 == 0) {
        soma += cont;
        console.log(soma);
    }
}