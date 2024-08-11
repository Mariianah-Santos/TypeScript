// 20. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média
// dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0
// utilizando o while.
var div3 = 0;
var media = 0;
var vezesD = 0;
while (true) {
    var num = Number(prompt("NUMERO:"));
    vezesD += 1;
    if (num == 0) {
        break;
    }
    if (num % 3 == 0) {
        div3 += num;
    }
}
media = div3 / vezesD;
console.log("A media dos numeros divisiveis por 3: [" + media + "]");
