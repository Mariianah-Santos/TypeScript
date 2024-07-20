// 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
// aluno está aprovado (média maior ou igual a 7) ou reprovado.
var nota1 = Number(prompt("NOTA 1:"));
var nota2 = Number(prompt("NOTA 2:"));
var nota3 = Number(prompt("NOTA 3:"));
var media = (nota1 + nota2 + nota3) / 2;
if (media >= 7) {
    console.log("ALUNO APAROVADO COM MEDIA " + media);
}
else {
    console.log("ALUNO REPORVADO COM MEDIA " + media);
}
