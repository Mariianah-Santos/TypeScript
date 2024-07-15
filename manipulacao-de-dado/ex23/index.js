// 27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano
// separadamente, convertendo-os em números inteiros.
var dataString = prompt("DIGITE A DATA (dd/mm/aaaa): ");
var data;
data = dataString.split("/");
for (var i = 0; i < dataString.length; i++) {
    console.log(parseInt(data[i]));
}
