// 14. Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como
// parâmetro e retorne a idade atual.

function calcularIdade(nascimento: number) {
    let anoAtual = 2024;
    return anoAtual - nascimento;
}

let idade = calcularIdade(2000);
console.log("A idade atual do usuario é: [" + idade + "]");