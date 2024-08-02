// 9. Implemente o código do slide de número 44.

// 44. Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) *
// n3.

let numero: Array<Number> = [];
let resultado, soma = 0;
for(let cont = 1; cont <= 3; cont++) {
    let num = Number(prompt("NUMERO [" + cont + "]"));
    numero.push(num);
    
}

resultado = (numero[0] + numero[1]) * numero[2];
console.log(resultado);