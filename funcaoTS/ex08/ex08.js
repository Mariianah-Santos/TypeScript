// 8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma
// pessoa e retorne o índice de massa corporal (IMC) dela.
function imc(peso, altura) {
    return peso / (altura * altura);
}
var peso1 = Number(prompt("PESO:"));
var altura1 = Number(prompt("ALTURA:"));
var imcResultado = imc(peso1, altura1);
console.log(imcResultado);
