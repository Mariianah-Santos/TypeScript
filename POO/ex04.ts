class Celular {
    marca: string;
    cor: string;
    modelo: string;

    constructor (marca: string, cor: string, modelo: string) {
        this.marca = marca;
        this.cor = cor;
        this.modelo = modelo;
    }
}

const celular1 = new Celular("Samsung", "Rosa claro", "Galaxy A32");
const celular2 = new Celular("Apple", "Azul turquesa", "Iphone 11 Plus");
const celular3 = new Celular("Apple", "Cinza", "Ipad 12 PRO");
console.log(celular1);
console.log(celular2);
console.log(celular3);