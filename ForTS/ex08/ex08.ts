// 8. Implemente o código do slide de número 38.

// 38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média
// aritmética desses números.

let media = 0; 
let soma = 0;
for(let cont = 1; cont <=3; cont++) {
    let num = Number(prompt("Numero [" + (cont) + "]")); 
    soma = soma + num;
}

media = soma / 3;
console.log("A media do aluno é: " + media);