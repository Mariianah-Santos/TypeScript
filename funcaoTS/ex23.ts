// 23. Crie uma função que recebe um array de objetos representando pessoas (com nome, idade, etc.) e
// retorne o nome da pessoa mais velha.

type Pessoa = {
    nome: string;
    idade: number;
};

function encontrarPessoaMaisVelha(pessoas: Array<Pessoa>): string {
    if (pessoas.length === 0) {
        return "Nenhuma pessoa na lista";
    }

    let pessoaMaisVelha = pessoas[0];

    for (let i = 1; i < pessoas.length; i++) {
        if (pessoas[i].idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha = pessoas[i];
        }
    }

    return pessoaMaisVelha.nome;
}
const listaDePessoas: Array<Pessoa> = [
    { nome: "Alice", idade: 30 },
    { nome: "Bob", idade: 45 },
    { nome: "Carlos", idade: 40 },
    { nome: "Diana", idade: 50 }
];

const nomeMaisVelho = encontrarPessoaMaisVelha(listaDePessoas);
console.log("A pessoa mais velha é:", nomeMaisVelho);