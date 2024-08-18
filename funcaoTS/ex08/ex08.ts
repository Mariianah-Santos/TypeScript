// 8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma
// pessoa e retorne o índice de massa corporal (IMC) dela.

function imc(peso: number, altura: number): number {
    return peso / (altura * altura);
}

let peso1 = Number(prompt("PESO:"));
let altura1 = Number(prompt("ALTURA:"));


let imcResultado = imc(peso1, altura1);

console.log(imcResultado); 