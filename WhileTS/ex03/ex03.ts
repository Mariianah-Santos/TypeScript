// 3. Implemente o código do slide de número 9.

// 9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
// a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
// obesa ou muito obesa.


while (true) {
    let altura = Number(prompt("ALTURA:"));
    let peso = Number(prompt("PESO:"));
    let imc = peso / (altura * altura);
    let r = prompt("Quer fazer outro IMC? [S/N]");
    if (imc < 18.5) {
        console.log("MAGREZA IMC [" + imc + "]");
    } else if (imc < 24.9) {
        console.log("NORMAL IMC [" + imc + "]");
    } else if (imc < 29.9) {
        console.log("SOBREPESO IMC [" + imc + "]");
    } else if (imc < 39.9) {
        console.log("OBESIDADE IMC [" + imc + "]");
    } else {
        console.log("OBESIDADE GRAVE IMC [" + imc + "]");
    }
    if (r == "N" || r == "n") {
        console.log("Saindo...")
        break;
    }
}