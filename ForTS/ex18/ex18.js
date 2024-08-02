// 18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado
var maior = 0;
for (var cont = 1; cont <= 10; cont++) {
    var num = Number(prompt("NUMERO: " + cont));
    if (num > maior) {
        maior = num;
    }
}
console.log(maior);
