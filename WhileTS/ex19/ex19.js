// 19. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O
// programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var div2 = 0;
var div3 = 0;
var div5 = 0;
while (true) {
    var num = Number(prompt("NUMERO:"));
    if (num == 0) {
        break;
    }
    if (num % 2 == 0) {
        div2 += 1;
    }
    if (num % 3 == 0) {
        div3 += 1;
    }
    if (num % 5 == 0) {
        div5 += 1;
    }
}
console.log("QTD DIVISIVEIS POR 2: [".concat(div2, "]"));
console.log("QTD DIVISIVEIS POR 3: [".concat(div3, "]"));
console.log("QTD DIVISIVEIS POR 5: [".concat(div5, "]"));
