// 12. Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números
// foram digitados.

let numeb = prompt("NUMEROS: ");
let numEspaco = [];
if (numeb) {
    numEspaco = numeb.split(" ");
    console.log(numEspaco);
}
console.log("QUANTIDADE DE NUMEROS DIGITADOS: " + numEspaco.length);