// 25. Crie uma função chamada "inverterString" que recebe uma string como argumento e retorna a
// string invertida. Por exemplo, para a entrada "hello", a função deve retornar "olleh".

function inverterString(str: string): string {
    return str.split('').reverse().join('');
}

const resultado = inverterString("hello");
console.log(resultado); 