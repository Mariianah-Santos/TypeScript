// 18. Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
// mensagem informando se é solteiro, casado, divorciado ou viúvo.
var estadoCivil = prompt("ESTADO CIVIL: ");
switch (estadoCivil) {
    case "solteiro":
    case "solteira":
        console.log("Sou [" + estadoCivil + "]");
        break;
    case "casado":
    case "casada":
        console.log("Sou [" + estadoCivil + "]");
        break;
    case "divorciado":
    case "divorciada":
        console.log("Sou [" + estadoCivil + "]");
        break;
    case "viúvo":
    case "viúva":
        console.log("Sou [" + estadoCivil + "]");
        break;
    default:
        console.log("Houve um erro! digite novamente");
        break;
}
