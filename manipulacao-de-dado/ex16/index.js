// 20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
var nome1_1 = prompt("NOME: ");
if (nome1_1.length > 5) {
    console.log("SEU NOME TEM MAIS DE 5 CARACTERES [" + nome1_1.length + "]");
}
else {
    console.log("SEU NOME NÃO TEM 5 CARACTERES [" + nome1_1.length + "]");
}
