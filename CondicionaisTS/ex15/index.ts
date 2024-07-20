// 15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
//     Domingo, 2 - Segunda-feira, etc.).

let dia = Number(prompt("DIA DA SEMANA:"));

switch (dia) {
    case 1:
        console.log("1 - DOMINGO");
        break;
    case 2:
        console.log("2 - SEGUNDA");
        break;
    case 3:
        console.log("3 - TERÇA");
        break;
    case 4:
        console.log("4 - QUARTA");
        break;
    case 5:
        console.log("5 - QUINTA");
        break;
    case 6:
        console.log("6 - SEXTA");
        break;
    case 7:
        console.log("7 - =SÁBADO");
        break;

    default:
        console.log("POR FAVOR DIGITE UM NUMERO VALIDO");
        break;
}