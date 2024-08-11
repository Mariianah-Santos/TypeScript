// 21. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números possuem mais de três dígitos. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.
var possui3 = 0;
while (true) {
    var num = prompt("NUMERO:");
    if (num == "0") {
        break;
    }
    if ((num === null || num === void 0 ? void 0 : num.length) == 3) {
        possui3 += 1;
    }
}
console.log("QTD DE NUMEROS COM 3 DIGITOS!! " + possui3);
