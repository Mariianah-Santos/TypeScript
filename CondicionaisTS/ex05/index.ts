// 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
// aluno está aprovado (média maior ou igual a 7) ou reprovado.


let nota1 = Number(prompt("NOTA 1:"));
let nota2 = Number(prompt("NOTA 2:"));
let nota3 = Number(prompt("NOTA 3:"));
let media = (nota1 + nota2 + nota3) / 2;

if (media >= 7) {
    console.log("ALUNO APAROVADO COM MEDIA " + media);
} else {
    console.log("ALUNO REPORVADO COM MEDIA " + media);
}