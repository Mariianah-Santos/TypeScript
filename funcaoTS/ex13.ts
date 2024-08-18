// 13. Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno
// é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e
// retornar a média das notas de todos os alunos.

function calcularMediaAlunos(alunos: Array<{ nome: string, nota: number }>) {
    let somaNotas = 0;

    for (let cont = 0; cont < alunos.length; cont++) {
        somaNotas += alunos[cont].nota;
    }

    const media = somaNotas / alunos.length;
    return media;
}

const listaDeAlunos = [
    { nome: "Jack", nota: 8 },
    { nome: "Mariana", nota: 7.5 },
    { nome: "Pedro", nota: 9 },
    { nome: "Ana", nota: 6.5 }
];

const media = calcularMediaAlunos(listaDeAlunos);
console.log("Média das notas dos alunos: ", media);