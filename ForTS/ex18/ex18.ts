// 18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado


let maior = 0;
for (let cont = 1; cont <= 10; cont++) {
    let num =  Number(prompt("NUMERO: " + cont));
    if (num > maior) {
        maior = num;
    }
}

console.log(maior);