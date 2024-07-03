// Questão 1

let numeros: number[] = [1, 2, 3, 4];
console.log(numeros);

// Questão 2

console.log(numeros);

// Questão 3

console.log(numeros[1]);

// Questão 4

numeros.splice(2, 1, 10);
console.log(numeros);

// Questão 5

numeros.pop();
console.log(numeros);

// Questão 6

console.log(numeros.length);

// Questão 7 

let frutas: Array<string> = ["maça", "banana", "laranja"];
console.log(frutas);

// Questão 8 

console.log(frutas[0]);

// Questão 9 

frutas.push("uva");
console.log(frutas);

// Questão 10 e 12

type Aluno = {
    nome: string;
    idade: number;
}

let aluno1: Aluno = {
    nome: "Mariana",
    idade: 24,
}

let aluno2: Aluno = {
    nome: "Mariza",
    idade: 24,
}

let aluno3: Aluno = {
    nome: "Leticia",
    idade: 11,
}

let alunos: Array<Aluno> = [];
alunos.push(aluno1, aluno2, aluno3);
console.log(alunos);

// Questão 11

console.log(alunos[0].nome);

// Questão 13


let produtos: string[] = ["Batata Fritas", "Feijão", "Arroz", "Lasanha", "Frango", 
    "Pizza", "Petiscos", "Vegetais", "Danone", "Manteiga"];

for (var i = 0; i < produtos.length; i++) {
    if (i % 2 == 0) {
        console.log(produtos[i]);
    }
}


