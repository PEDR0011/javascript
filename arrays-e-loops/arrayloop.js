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
//Fazem algo repetidamente até que uma condição seja atingida.     Valor inicial / condição: enquanto ser true realizar codigo abaixo / incremento
for (let numero = 0; numero <= 10; numero++) {
  console.log(numero);
};

// While loop 
let i = 1
while (i <= 10) {
  console.log(i++);
}