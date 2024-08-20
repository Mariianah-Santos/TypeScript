class Carro {
    marca: string;
    cor: string;
    modelo: string;
    constructor (marca: string, cor: string, modelo: string) {
        this.marca = marca;
        this.cor = cor;
        this.modelo = modelo;
    }
}

const carro1 = new Carro("Toyota", "Branco", "Corolla");
const carro2 = new Carro("Toyota", "Preto", "Corolla Cross");
const carro3 = new Carro("Toyota", "Cinza", "Hilux GR-Sport");
console.log(carro1);
console.log(carro2);
console.log(carro3);