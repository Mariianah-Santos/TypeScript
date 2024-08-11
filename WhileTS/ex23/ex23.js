// 23. Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor
// valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o
// número 0 utilizando o while.
var numArray = [];
while (true) {
    var num = Number(prompt("NUMERO:"));
    if (num === 0) {
        break;
    }
    if (num > 0 && num % 2 !== 0) {
        numArray.push(num);
    }
}
if (numArray.length > 0) {
    console.log(Math.min.apply(Math, numArray));
}
else {
    console.log("Nenhum número positivo e ímpar foi digitado.");
}
;
