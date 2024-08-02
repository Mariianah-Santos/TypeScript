// 5. Implemente o código do slide de número 18.
// 18. Peça ao usuário que insira dois números e exiba o maior deles.
var numero = [];
for (var cont = 0; cont <= 1; cont++) {
    var num = Number(prompt("Numero: " + (cont + 1)));
    numero.push(num);
}
if (numero[0] > numero[1]) {
    console.log("Numero 1 é maior [" + numero[0] + "]");
}
else {
    console.log("Numero 2 é maior [" + numero[1] + "]");
}
