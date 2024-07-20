// 19. Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
// operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).
var num1 = Number(prompt("NUMERO 1:"));
var num2 = Number(prompt("NUMERO 2:"));
var menu = Number(prompt("1 - soma \n2 - subtração \n3 - multiplicação \n4 - divisão"));
var atribuicao = 0;
switch (menu) {
    case 1:
        atribuicao = num1 + num2;
        console.log("A SOMA DOS NUMERO É [" + atribuicao + "]");
        break;
    case 2:
        atribuicao = num1 - num2;
        console.log("A SUBTRAÇÃO DOS NUMERO É [" + atribuicao + "]");
        break;
    case 3:
        atribuicao = num1 * num2;
        console.log("A MULTIPLICAÇÃO DOS NUMERO É [" + atribuicao + "]");
        break;
    case 4:
        atribuicao = num1 / num2;
        console.log("A DIVISÃO DOS NUMERO É [" + atribuicao + "]");
        break;
    default:
        console.log("DIGITE UM NUMERO DO MENU");
        break;
}
