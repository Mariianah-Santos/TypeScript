// 10. Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa
// como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes
// faixas de renda:
// a. Até R$ 1.903,98: isento
// b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
// c. De R$ 2.826,66 até R$ 3.751,05: alíquota de 15%
// d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
// e. Acima de R$ 4.664,68: alíquota de 27,5%

function calcularImpostoRenda(salario: number) {
    if (salario <= 1903.98) {
        return console.log("ISENTO");
    } else if (salario >= 1903.99 && salario <= 2826.65) {
        return console.log("ALÍQUOTA DE 7,5%")
    } else if (salario >= 2826.66 && salario <= 3751.05) {
        return console.log("ALÍQUOTA DE 15%")
    } else if (salario >= 3751.06 && salario <= 4664.68) {
        return console.log("ALÍQUOTA DE 22,5%")
    } else {
        return console.log("ALÍQUOTA DE 27,5%")
    }
}

let impostoAPagar = calcularImpostoRenda(4665.68);
