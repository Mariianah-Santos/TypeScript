// 17. Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12
//     anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).
var idade = Number(prompt("IDADE:"));
if (idade <= 1) {
    console.log("UM BEBÊ [" + idade + "]");
}
else if (idade <= 12) {
    console.log("UMA CRIANÇA [" + idade + "]");
}
else if (idade <= 18) {
    console.log("UM ADOLESCENTE [" + idade + "]");
}
else {
    console.log("UM ADULTO [" + idade + "]");
}
