// questão 1

type Person = {
  nome: string;
  idade: string;
  endereco: string;
};

const Pessoa1: Person = {
  nome: "Mariana",
  idade: "24",
  endereco: "rua linha do tiro",
};

console.log(Pessoa1);

// questão 2

console.log(Pessoa1.nome);
// ou
console.log(Pessoa1["nome"]);

// questão 3

// questão 4

console.log(Pessoa1.idade.replace("24", "25"));

// questão 5

type Animal = {
  nome: string;
  especie: string;
  cor: string;
};

let Animal1: Animal = {
  nome: "Lucky",
  especie: "Cachorro",
  cor: "Amarelo",
};

// questão 6

type Livro = {
  titulo: string;
  autor: string;
  ano: string;
};

let Livro1: Livro = {
  titulo: "É assim que acaaba!",
  autor: "Collenn Hoover",
  ano: "2021",
};

// questão 7

console.log(Livro1.autor);

// questão 8

console.log(Livro1.ano.replace("2021", "2022"));

// questão 9

// delete Livro1.titulo;

// questão 10

type Carro = {
  marca: string;
  modelo: string | undefined;
  ano: number;
};

let Carro1: Carro = {
  marca: "lamboghini",
  modelo: "veneno",
  ano: 2021,
};

console.log(Carro1);

// questão 11

console.log(Carro1);
