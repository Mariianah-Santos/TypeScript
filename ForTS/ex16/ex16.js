// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
var soma = 0;
var media = 0;
for (var cont = 1; cont <= 5; cont++) {
    var nota = Number(prompt("NOTA DO " + cont + "º ALUNO"));
    soma = soma + nota;
}
media = soma / 5;
console.log(media);
