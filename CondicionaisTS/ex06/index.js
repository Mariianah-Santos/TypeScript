// 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
// de caracteres em seu nome.
var nome1 = String(prompt("NOME 1:"));
var nome2 = String(prompt("NOME 2:"));
if (nome1.length > nome2.length) {
    console.log("O PRIMEIRO NOME TEM MAIS CARACTERES [" + nome1.length + "]");
}
else {
    console.log("O SEGUNDO NOME TEM MAIS CARACTERES [" + nome2.length + "]");
}
