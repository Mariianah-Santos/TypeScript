// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.

let soma = 0;
let media = 0;
for ( let cont = 1; cont <= 5; cont++) {
    let altura = Number(prompt("Altura " + cont));
    soma += altura;
}
media = soma / 5;
console.log(media);