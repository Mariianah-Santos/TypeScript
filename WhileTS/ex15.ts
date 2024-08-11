// 15. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o while.

let cont = 1;
while (cont <= 50) {
    if (cont % 3 == 0) {
        console.log("[" + cont + "]");
    }
    cont++;
}
