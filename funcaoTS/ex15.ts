// 15. Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a
// tabuada desse número de 1 a 10 no console.


function gerarTabuada(num: number) {
    for (let cont = 1; cont <= 10; cont++) {
        let tab = 0;
        tab = num * cont;
        console.log(num + " X " + cont + " = " + tab);
    }
}

gerarTabuada(2);