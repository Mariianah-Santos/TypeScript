// 16. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7) utilizando o while.
var cont = 1;
var media = 7;
var aprovados = 0;
while (cont <= 5) {
    var notas = Number(prompt("NOTAS [" + cont + "]"));
    if (notas >= media) {
        aprovados += 1;
    }
    cont++;
}
console.log(aprovados);
