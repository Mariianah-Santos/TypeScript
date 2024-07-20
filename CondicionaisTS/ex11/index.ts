// 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
// Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de
// 15%.

let salario = Number(prompt("SALARIO R$"));
let novoSalario = 0;
if (salario > 1500) {
    novoSalario = salario + (salario * 10 / 100);
    console.log("SEU SALARIO AUMENTOU 10% R$" + novoSalario);
} else {
    novoSalario = salario + (salario * 15 / 100);
    console.log("SEU SALARIO AUMENTOU 15% R$" + novoSalario);
}