// 11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como
// parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais
// próximo.

const calcularMediaArredondada = (numeros: Array<number>): number => {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    let media = soma / numeros.length;
    return Math.round(media);
};

let numeros = [10, 20, 30, 40];
let mediaArredondada = calcularMediaArredondada(numeros);
console.log(mediaArredondada);