// 19. Escreva uma função que aceite uma string como parâmetro e encontre a palavra mais longa dentro
// da string. String de exemplo: 'Tutorial de desenvolvimento da web'. Resultado esperado:
// 'Desenvolvimento'.

function encontrarPalavraMaisLonga(frase: string) {
    const palavras = frase.split(' ');
    let palavraMaisLonga = '';

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i].length > palavraMaisLonga.length) {
            palavraMaisLonga = palavras[i];
        }
    }

    return palavraMaisLonga;
}

const frase = 'Tutorial de desenvolvimento da web';
const resultado = encontrarPalavraMaisLonga(frase);
console.log('Palavra mais longa:', resultado);