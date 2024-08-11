let maior = 0;
let menor = Infinity;
let soma = 0;
let quantasNotasForamDigitadas = 0;
let mediaAprovacao = 7;
let aprovados = 0;
let reprovado = 0;
let mediaSala = 0;
while (true) {
    let notas = Number(prompt("NOTAS"));
    if (notas == -1) {
        break;
    }
    quantasNotasForamDigitadas += 1;
    soma += notas;
    if (notas > maior) {
        maior = notas;
    }
    if (notas < menor) {
        menor = notas;
    }
    if (notas >= mediaAprovacao) {
        aprovados += 1;
    } else {
        reprovado += 1;
    }

}
console.log("QUANTAS VEZES AS NOTAS FORAM DIGITADAM [" + quantasNotasForamDigitadas + "]");
console.log("QUANTOS ALUNOS APROVADOS [" + aprovados + "]");
console.log("QUANTOS ALUNOS FORAM REPROVADOS [" + reprovado + "]");
console.log("A MAIOR NOTA FOI [" + maior + "]");
console.log("A MENOR NOTA FOI [" + menor + "]");
mediaSala = soma / quantasNotasForamDigitadas;
console.log("A media da sala é [" + mediaSala + "]");