// Faça um programa que quando o 
var soma = 0;
var numCont = 0;
while (true) {
    var num = Number(prompt("NUMERO:"));
    numCont = numCont + 1;
    soma = soma + num;
    if (soma >= 50) {
        console.log(soma);
        console.log(numCont);
        break;
    }
}
