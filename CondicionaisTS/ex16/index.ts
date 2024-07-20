// 16. Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a
// estrutura de controle try/catch para tratar exceções.

let numero = Number(prompt("NUMERO DECIMAL: "));
try {
    let numRound = Math.round(numero);
    console.log(numRound);
} catch (error) {
    if (error.nome === "TypeScript") {
        console.log("Por favor digite um numero valido");
    }
}