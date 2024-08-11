// 14. Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.

let cont = 1;
while (cont <= 100) {
    if (cont % 2 == 1) {
        console.log("[" + cont + "]");
    }
    cont++;
}