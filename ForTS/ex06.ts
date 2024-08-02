// 6. Implemente o código do slide de número 26.

// 26 - Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o
// novamente para uma string antes de exibi-lo.

let numString = prompt("NUMERO STRING: ");
let intNum = parseInt(numString);
let soma1 = intNum + 10;
let numConvertido = soma1.toString();
console.log(typeof numConvertido);