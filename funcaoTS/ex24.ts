// 24. Escreva uma função que recebe um array de objetos com informações sobre carros (com marca,
//     modelo, ano, etc.) e retorne um novo array apenas com os carros fabricados após um certo ano
//     específico.

type Carro = {
    marca: string;
    modelo: string;
    ano: number;
};

function filtrarCarrosPorAno(carros: Array<Carro>, anoLimite: number): Array<Carro> {
    return carros.filter(carro => carro.ano > anoLimite);
}

const listaDeCarros: Array<Carro> = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Ford", modelo: "Mustang", ano: 2019 },
    { marca: "Chevrolet", modelo: "Camaro", ano: 2021 },
    { marca: "Honda", modelo: "Civic", ano: 2018 }
];

const anoLimite = 2019;
const carrosNovos = filtrarCarrosPorAno(listaDeCarros, anoLimite);
console.log("Carros fabricados após o ano " + anoLimite + ":", carrosNovos);