// 13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
// informando se é um dia útil ou um fim de semana.

let dia = prompt("DIA: ")?.toLowerCase();

switch (dia) {
    case "segunda":
        console.log("DIA UTIL: [" + dia + "]");
        break;
    case "terça":
        console.log("DIA UTIL: [" + dia + "]");
        break;
    case "quarta":
        console.log("DIA UTIL: [" + dia + "]");
        break;
    case "quinta":
        console.log("DIA UTIL: [" + dia + "]");
        break;
    case "sexta":
        console.log("DIA UTIL: [" + dia + "]");
        break;
    case "sabado":
        console.log("FINAL DE SEMANA: [" + dia + "]");
        break;
    case "domingo":
        console.log("FINAL DE SEMANA: [" + dia + "]");
        break;

    default:
        console.log("DIGITE UMA PALAVRA VALIDA");
        break;
}