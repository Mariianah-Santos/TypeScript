// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.
var soma = 0;
var media = 0;
for (var cont = 1; cont <= 5; cont++) {
    var altura = Number(prompt("Altura " + cont));
    soma += altura;
}
media = soma / 5;
console.log(media);
