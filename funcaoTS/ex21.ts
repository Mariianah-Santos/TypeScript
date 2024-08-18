// 21. Crie uma função que receba um array de strings e retorne um novo array contendo apenas as
// strings que têm mais de 5 caracteres.

function filtrarStringsLongas(array: Array<string>): Array<string> {
    return array.filter(str => str.length > 5);
}

// Exemplo de uso
const listaDeStrings = ["apple", "banana", "cherry", "date", "elderberry"];
const resultado = filtrarStringsLongas(listaDeStrings);
console.log(resultado);