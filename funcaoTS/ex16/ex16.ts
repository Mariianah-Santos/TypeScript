// 16. Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre
// 1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função
// deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o
// usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas
// utilizadas.

function advinheNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        const tentativa = Number(prompt("Adivinhe o número (entre 1 e 100):"));
        tentativas++;

        if (tentativa < numeroSecreto) {
            console.log("O número correto é maior.");
        } else if (tentativa > numeroSecreto) {
            console.log("O número correto é menor.");
        } else {
            console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
            acertou = true;
        }
    }
}

advinheNumero();