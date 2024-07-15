// 19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de
// massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.

let altura = Number(prompt("ALTURA: "));
let peso = Number(prompt("PESO: "));
let imc = peso / (altura * altura);
console.log("O IMC É: " + imc);