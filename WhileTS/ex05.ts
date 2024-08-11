// 5. Implemente o código do slide de número 26.

// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o
// número lido for 123, o programa deve exibir 321.

let num = "123";
let cont = num.length - 1;

while (cont >= 0) {
    console.log(num[cont]);
    cont--;
}