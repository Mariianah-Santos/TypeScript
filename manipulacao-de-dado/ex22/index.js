// 26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o
// novamente para uma string antes de exibi-lo.
var numString = prompt("NUMERO STRING: ");
var intNum = parseInt(numString);
var soma1 = intNum + 10;
var numConvertido = soma1.toString();
console.log(typeof numConvertido);
