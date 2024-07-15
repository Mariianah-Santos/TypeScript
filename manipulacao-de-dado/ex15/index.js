// 19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
// massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.
var altura = Number(prompt("ALTURA: "));
var peso = Number(prompt("PESO: "));
var imc = peso / (altura * altura);
console.log("O IMC É: " + imc);
