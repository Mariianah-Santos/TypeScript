// 20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
//     ou igual a 7).

let qtdAlunosAprovados = 0;

for(let cont = 1; cont <= 5; cont++) {
    let nota = Number(prompt("NOTA DO " + cont + "º ALUNO"));
    if (nota >= 7) {
        qtdAlunosAprovados += 1;
    }
}
console.log(qtdAlunosAprovados);