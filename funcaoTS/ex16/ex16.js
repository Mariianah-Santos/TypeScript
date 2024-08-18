// 16. Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre
// 1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função
// deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o
// usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas
// utilizadas.
function advinheNumero() {
    var numeroSecreto = Math.floor(Math.random() * 100) + 1;
    var tentativas = 0;
    var acertou = false;
    while (!acertou) {
        var tentativa = Number(prompt("Adivinhe o número (entre 1 e 100):"));
        tentativas++;
        if (tentativa < numeroSecreto) {
            console.log("O número correto é maior.");
        }
        else if (tentativa > numeroSecreto) {
            console.log("O número correto é menor.");
        }
        else {
            console.log("Parab\u00E9ns! Voc\u00EA acertou o n\u00FAmero em ".concat(tentativas, " tentativas."));
            acertou = true;
        }
    }
}
advinheNumero();
