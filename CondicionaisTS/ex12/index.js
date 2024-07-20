// 12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
// exibindo uma mensagem apropriada.
var numero = Number(prompt("NUMERO:"));
if (numero % 3 == 0 && numero % 5 == 0) {
    console.log("NUMERO É DIVISEL POR 3 E 5 [" + numero + "]");
}
else {
    console.log("NUMERO NÃO É DIVISEI POR 3 E 5 [" + numero + "]");
}
