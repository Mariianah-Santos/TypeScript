// 2. Implemente o código do slide de número 15.

// 15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -
//     Domingo, 2 - Segunda-feira, etc.).

function diaSemana() {
    let dia = Number(prompt("DIA DA SEMANA:"));
    switch (dia) {
        case 1:
            console.log("DOMINGO");
            break;
        case 2:
            console.log("SEGUNDA");
            break;
        case 3:
            console.log("TERÇA");
            break;
        case 4:
            console.log("QUARTA");
            break;
        case 5:
            console.log("QUINTA");
            break;
        case 6:
            console.log("SEXTA");
            break;
        case 7:
            console.log("SÁBADO");
            break;
        default:
            console.log("POR FAVOR DIGITE UM NUMERO VALIDO 1 A 7!!")
            break;
    }
}

diaSemana();