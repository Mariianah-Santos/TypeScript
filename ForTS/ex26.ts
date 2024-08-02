// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o
// número lido for 123, o programa deve exibir 321.

let num = "123";
for (let cont = num.length - 1; cont >= 0; cont--){
    console.log(num[cont]);
}