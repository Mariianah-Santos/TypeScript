// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.

let soma = 0;
let media = 0;
for(let cont = 1; cont <= 5; cont++) {
    let nota = Number(prompt("NOTA DO " + cont + "º ALUNO"));
    soma = soma + nota;
}
media = soma / 5;
console.log(media);