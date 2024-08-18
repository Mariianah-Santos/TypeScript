// 17. Crie uma função chamada "verificarPropriedade" que receba um objeto e uma string como
// parâmetros, e retorne true se o objeto possuir a propriedade com o nome especificado na string, e
// false caso contrário.

function verificarPropriedade(obj: object, prop: string): boolean {
    return obj.hasOwnProperty(prop);
}

const meuObjeto = { nome: "João", idade: 25 };
const temNome = verificarPropriedade(meuObjeto, "nome"); // true
const temEndereco = verificarPropriedade(meuObjeto, "endereco"); // false

console.log(temNome);     
console.log(temEndereco);