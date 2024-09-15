/// Atribuição
var x = 10;
var y = 2;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y
x %= y; // x = x % y
x **= y; // x = x ** y
console.log(x)

// Ternário
var naoPossuiDiabetes = false;
let idade = 19;
var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? "liberado" : "não pode";
console.log(podeBeber);


// EXERCICIO

var scroll = 1000;
scroll += 500;
console.log(scroll)


var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? "Credito aceito" : "Credito recusado";

console.log(darCredito)



