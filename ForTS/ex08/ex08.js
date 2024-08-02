// 8. Implemente o código do slide de número 38.
// 38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média
// aritmética desses números.
var media = 0; 
var soma = 0;
for (var cont = 1; cont <= 3; cont++) {
    var num = Number(prompt("Numero [" + (cont) + "]"));
    soma = soma + num;
}
media = soma / 3;
console.log("A media do aluno é: " + media);
