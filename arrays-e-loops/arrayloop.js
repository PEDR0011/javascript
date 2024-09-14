var nomesDosAlunos = ["Pedro", "Flavio", "Jessica", "Paulo"];

console.log(nomesDosAlunos[2]);

// Esse método remove o ultimo item da array
var remove = nomesDosAlunos.pop();
console.log(remove)

console.log(nomesDosAlunos)

// Esse método adiciona um item no final da array
nomesDosAlunos.push("Alex");
console.log(nomesDosAlunos)

// For loop
//Fazem algo repetidamente até que uma condição seja atingida.  Valor inicial / condição: enquanto ser true realizar codigo abaixo / incremento
for (let numero = 0; numero <= 10; numero++) {
  console.log(numero);
};

// Outar forma de fazer o for loop
var bla = 0;
var ble = 30;
for(;bla <= ble;) {
  console.log(bla);
  bla++;

}

// While loop 
let i = 1
while (i <= 10) {
  console.log(i++);
}


var jogador = ["cr7", "messi", "ronaldinho", "ronaldo"]

for (var item = 0; item < jogador.length; item++) {
  console.log(jogador[item]);
  if(jogador[item] === "ronaldinho") {
    break;
  }
}

// forEach
// Os parametros pode ser qualquer coisa
var pc = ["teclado", "mouse", "monitor",];

pc.forEach(function(item2, index, array) {
  console.log(item2, index, array)
})


// EXERCICIO  

var brasilCopaMundo = [1959, 1962, 1970, 1994, 2002,];

for (let i = 0; i < brasilCopaMundo.length; i++) {
  console.log(`O Brasil ganho a copa de ${brasilCopaMundo[i]}`);
}

var fruta = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for(let iFruta = 0; iFruta < fruta.length; iFruta++) {
  console.log(fruta[iFruta])
  if(fruta[iFruta] === "Pera") {
    break;
  }
}

var ultimaFruta = fruta[fruta.length - 1];
console.log(ultimaFruta);