// 39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já
// viveu (considerando um ano com 365 dias).
var idadeUsuario = Number(prompt("IDADE: "));
var diaAno = 365;
var mes = 12;
var mesesViveu = idadeUsuario * mes;
var diaViveu = idadeUsuario * diaAno;
console.log("DIAS QUE VIVEU: " + diaViveu);
console.log("MESES QUE VIVEU: " + mesesViveu);
