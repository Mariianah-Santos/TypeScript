// 34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente
// (divisão inteira) entre eles.
var numN1 = Number(prompt("Digite o primeiro número inteiro: "));
var numN2 = Number(prompt("Digite o segundo número inteiro: "));
var somaNum = numN1 + numN2;
var diferenca = numN1 - numN2;
var produto1 = numN1 * numN2;
var quociente = numN1 % numN2;
console.log("A soma: " + somaNum);
console.log("A diferença: " + diferenca);
console.log("O produto: " + produto1);
console.log("O quociente da divisão inteira: " + quociente);
