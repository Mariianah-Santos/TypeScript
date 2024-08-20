class ContaBancaria {
    numeroConta: Number;
    nomeConta: string;
    saldoConta: Number;

    constructor (numeroConta: Number, nomeConta: string, saldoConta: Number) {
        this.numeroConta = numeroConta;
        this.nomeConta = nomeConta;
        this.saldoConta = saldoConta;
    }
}

const cliente1 = new ContaBancaria(876353, "Mariana", 340);
const cliente2 = new ContaBancaria(983632, "Maria", 33.3499);
const cliente3 = new ContaBancaria(234093, "Manuelle", 1.049);
console.log(cliente1);
console.log(cliente2);
console.log(cliente3);