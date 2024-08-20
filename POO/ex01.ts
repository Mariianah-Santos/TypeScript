class Pessoa {
    nome: string;
    cpf: string;
    genero: string;
    constructor (nome: string, cpf: string, genero: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.genero = genero;
    }
}
const pessoa1 = new Pessoa("Mariana", "123242", "Feminino");
console.log(pessoa1);