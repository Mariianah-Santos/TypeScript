// 18. Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a
// "margem de lucro" desejada (em percentual) e o "valor do frete" como parâmetros. A função deve
// calcular e retornar o preço de venda do produto, considerando que o preço de venda é igual ao
// custo acrescido da margem de lucro e do valor do frete.

function calcularPrecoProduto(valorCusto: number, margemLucro: number, valorFrete: number) {
    const lucro = valorCusto * (margemLucro / 100);
    const precoVenda = valorCusto + lucro + valorFrete;
    return precoVenda;
}


const valorCusto = 100;
const margemLucro = 20; 
const valorFrete = 15;

const precoVenda = calcularPrecoProduto(valorCusto, margemLucro, valorFrete);
console.log("Preço de venda do produto:", precoVenda);