// 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
// "Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando
// switch/case.
var avaliacao = Number(prompt("NOTA DE AVALIAÇÃO [1 A 5]:"));
switch (avaliacao) {
    case 1:
        console.log("MUITO BOM [" + avaliacao + "]");
        break;
    case 2:
        console.log("BOM [" + avaliacao + "]");
        break;
    case 3:
        console.log("REGULAR[" + avaliacao + "]");
        break;
    case 4:
        console.log("INSUFICIENTE [" + avaliacao + "]");
        break;
    case 5:
        console.log("MUITO INSUFICIENTE [" + avaliacao + "]");
        break;
    default:
        console.log("POR FAVOR DIGITE UM NUMERO VALIDO 1 A 5");
        break;
}
