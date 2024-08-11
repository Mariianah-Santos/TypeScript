// 4. Implemente o código do slide de número 16.

// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
let cont = 1;
let soma = 0;
let media = 0;
while (cont <= 5) {
    let nota = Number(prompt(`NOTA DO ${cont}º:`));
    soma += nota;
    cont++;
}
media = soma / 5;
console.log("A media da sala é: " + media);