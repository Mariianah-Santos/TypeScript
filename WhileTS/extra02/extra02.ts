// Faça um programa que parar quando o usuario digitar 0
// mostre o maior numero e o menor numero lido.

let maior = -Infinity;
let menor = Infinity;

while (true) { // while um comando de repetição de uma determinada ação/bloco de comandos
    let num = Number(prompt("NUMERO:"));
    if (num == 0) { // condição para sair do loop
        break;
    } 
    if (num > maior) { // condição para pegar o maior numero
        maior = num;
    }
    if (num < menor) { // condição para pegar o menor numero
        menor = num;
    }
}
console.log("o maior numero: " + maior);
console.log("o menor numero: " + menor);