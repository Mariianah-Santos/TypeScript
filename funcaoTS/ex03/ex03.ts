// 3. Implemente o código do slide de número 24.

// 24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.

function restoDivisao() {
    let num1 = Number(prompt("NUMERO 1 (decimal):"));
    let num2 = Number(prompt("NUMERO 2 (decimal):"));
    let rDivisao = num1 % num2;
    console.log("O resto da divisao é [" + rDivisao + "]");
}

restoDivisao();