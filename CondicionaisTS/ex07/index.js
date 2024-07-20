// 7. Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.
var letra = prompt("LETRA: ");
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    console.log("É UMA VOGAL [" + letra + "]");
}
else {
    console.log("É UMA CONSOANTE [" + letra + "]");
}
