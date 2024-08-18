// 6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true"
// se o número for par ou "false" caso contrário.

function isPar(num: number) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let resultado = isPar(11);
console.log(resultado);