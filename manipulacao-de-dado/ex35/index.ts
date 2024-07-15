// 39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já
// viveu (considerando um ano com 365 dias).

let idadeUsuario = Number(prompt("IDADE: "));
let diaAno = 365;
let mes = 12;
let mesesViveu = idadeUsuario * mes;
let diaViveu = idadeUsuario * diaAno;

console.log("DIAS QUE VIVEU: " + diaViveu);
console.log("MESES QUE VIVEU: " + mesesViveu);