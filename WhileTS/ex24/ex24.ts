// 24. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos
// números são pares e quantos números são ímpares entre o primeiro e o último número digitado.
// O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let numeros: number[] = [];
let pares = 0;
let impares = 0;

while (true) {
    let num = Number(prompt("Digite um número (ou 0 para parar):"));
    if (num == 0) {
        break;
    }
    numeros.push(num);
}

let primeiro = numeros[0];
let ultimo = numeros[numeros.length - 1];
for (let cont = 1; cont < numeros.length - 1; cont++) {
    if (numeros[cont] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`O primeiro número (${primeiro}) é ${primeiro % 2 == 0 ? 'par' : 'ímpar'}.`);
console.log(`O último número (${ultimo}) é ${ultimo % 2 == 0 ? 'par' : 'ímpar'}.`);

