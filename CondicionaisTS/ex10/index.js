// 10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês
// correspondente.
var mes = Number(prompt("MÊS:"));
switch (mes) {
    case 1:
        console.log("JANEIRO");
        break;
    case 2:
        console.log("FEVEREIRO");
        break;
    case 3:
        console.log("MARÇO");
        break;
    case 4:
        console.log("ABRIL");
        break;
    case 5:
        console.log("MAIOR");
        break;
    case 6:
        console.log("JUNHO");
        break;
    case 7:
        console.log("JULHO");
        break;
    case 8:
        console.log("AGOSTO");
        break;
    case 9:
        console.log("SETEMBRO");
        break;
    case 10:
        console.log("OUTUBRO");
        break;
    case 11:
        console.log("NOVEMBRO");
        break;
    case 12:
        console.log("DEZEMBRO");
        break;
    default:
        console.log("POR FAVOR DIGITE UM NUMERO VALIDO [1 A 12]");
        break;
}
