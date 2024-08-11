// 4. Implemente o código do slide de número 16.
// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
var cont = 1;
var soma = 0;
var media = 0;
while (cont <= 5) {
    var nota = Number(prompt("NOTA DO ".concat(cont, "\u00BA:")));
    soma += nota;
    cont++;
}
media = soma / 5;
console.log("A media da sala é: " + media);
