// 24. Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra
// "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos,
// utilize a palavra "FizzBuzz".

for (let cont = 1; cont <= 100; cont++) {
    if (cont % 3 == 0) {
        console.log("Fizz");
    }
    if (cont % 5 == 0) {
        console.log("Buzz");
    }
    if (cont % 3 == 0 && cont % 5 == 0) {
        console.log("FizzBuzz");
    }
}