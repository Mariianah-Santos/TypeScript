// 23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de
//     sua escolha).

let cidade = prompt("CIDADE: ");
if (cidade[0] == "s" || cidade[0] == "S") {
    console.log("A CIDADE COMECA COM S " + cidade);
} else {
    console.log("A CIDADE  NÃO COMECA COM S " + cidade);
}