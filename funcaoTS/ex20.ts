// 20. Escreva uma função que pegue uma lista de strings e as imprima, uma por linha, em um quadro
// retangular. Por exemplo, a lista ["Hello", "World", "in", "a", "frame"] é impressa como:
// *********
// * Hello *
// * World *
// * in *
// * a *
// * frame *
// *********

function imprimirEmQuadro(lista: Array<string>) {

    const tamanhoMaximo = Math.max(...lista.map(palavra => palavra.length));

    console.log('*'.repeat(tamanhoMaximo + 4));

    for (let i = 0; i < lista.length; i++) {
        const espacosRestantes = tamanhoMaximo - lista[i].length;
        console.log(`* ${lista[i]}${' '.repeat(espacosRestantes)} *`);
    }
    console.log('*'.repeat(tamanhoMaximo + 4));
}

const listaDePalavras = ["Hello", "World", "in", "a", "frame"];
imprimirEmQuadro(listaDePalavras);