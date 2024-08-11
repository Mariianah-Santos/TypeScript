// 24. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números são pares e quantos números são ímpares entre o primeiro e o último número digitado.
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
var numeros = [];
var pares = 0;
var impares = 0;
while (true) {
    var num = Number(prompt("Digite um número (ou 0 para parar):"));
    if (num == 0) {
        break;
    }
    numeros.push(num);
}
var primeiro = numeros[0];
var ultimo = numeros[numeros.length - 1];
for (var cont = 1; cont < numeros.length - 1; cont++) {
    if (numeros[cont] % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }
}
console.log("O primeiro n\u00FAmero (".concat(primeiro, ") \u00E9 ").concat(primeiro % 2 == 0 ? 'par' : 'ímpar', "."));
console.log("O \u00FAltimo n\u00FAmero (".concat(ultimo, ") \u00E9 ").concat(ultimo % 2 == 0 ? 'par' : 'ímpar', "."));
