// 9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o
// percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.

const calcularDesconto = (): Number => {
    let produto = 1000;
    let desconto = 5;
    console.log("PREÇO ORGINAL: R$" + produto)
    return (produto - (produto * desconto / 100));
};

let produtoDesconto = calcularDesconto();
console.log("PRODUTO COM DESCONTO: R$" + produtoDesconto);