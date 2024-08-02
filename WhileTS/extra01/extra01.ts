// Faça um programa que quando a soma da 50 ele interrompa o loop. E mostre as somas dos numeros
// lidos e quantas vezes fora digitados.

let soma = 0;
let numCont = 0;

while (true) {
    let num = Number(prompt("NUMERO:"));
    numCont = numCont + 1;
    soma = soma + num;
    if (soma >= 50) {
        console.log(soma);
        console.log(numCont);
        break;
    }
    
}