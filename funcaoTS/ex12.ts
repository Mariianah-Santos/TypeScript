// 12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro
// como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares
// presentes nesse número.

function contarDigitosParesImpares(num: Array<number>): { pares: number, impares: number } {
    let digitosPares = 0;
    let digitosimPares = 0;

    for (let cont = 0; cont < num.length; cont++) {
        if (num[cont] % 2 == 0) {
            digitosPares += 1;
        } else {
            digitosimPares += 1;
        }
    }
    return { pares: digitosPares, impares: digitosimPares };
}

let num = [10, 20, 11, 9];
let resultado = contarDigitosParesImpares(num);
console.log(resultado);