// 22. Crie uma função que recebe um array de objetos com informações sobre livros (título, autor, ano,
//etc.) e retorne um novo array apenas com os livros escritos por determinado autor.

type Livro = {
    titulo: string;
    autor: string;
    ano: number;
};

function filtrarLivrosPorAutor(livros: Array<Livro>, autor: string): Array<Livro> {
    return livros.filter(livro => livro.autor === autor);
}

// Exemplo de uso
const listaDeLivros: Array<Livro> = [
    { titulo: "É assim que acaba", autor: "Colleen Hoover", ano: 2016},
    { titulo: "O Guardião", autor: "Nicholas Sparks", ano: 2003},
    { titulo: "É assim que começa", autor: "Colleen Hoover", ano: 2022},
    { titulo: "Harry Potter e a pedra filosofal", autor: "J.K Rowling", ano: 1997}
];

const livrosTolkien = filtrarLivrosPorAutor(listaDeLivros, "Colleen Hoover");
console.log(livrosTolkien);