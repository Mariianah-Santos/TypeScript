// 1. Implemente o código do slide de número 6.
// 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
// de caracteres em seu nome.
function nome() {
    var nome1 = prompt("1º Escreva seu nome:");
    var nome2 = prompt("2º Escreva seu nome:");
    if (nome1.length > nome2.length) {
        console.log("O primeiro nome tem mais caracter [" + nome1 + "] [" + nome1.length + "]");
    }
    else {
        console.log("O segundo nome tem mais caracter [" + nome2 + "]  [" + nome2.length + "]");
    }
}
nome();
