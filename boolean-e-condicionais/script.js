/*
 Esses valores são False
  - false
  - 0 ou -0
  - NaN
  - null
  - undefined
  - "" ou '' ou ``

 Todo o resto é true 

let  a = 6;
let b = "10";
let c = 10 + 9;
let resultado = c + a - b;
console.log(resultado);

let tuaMae = 300 + 4;
let haha = "202";
haha = +haha;
console.log(tuaMae + haha++);
console.log(haha);

let igual = "Igualzinho mano";
let diferente = "Nada ave"
let numero = 0.10;
if(numero === 10) {
  console.log(igual)
} else {
  console.log(diferente);
}


let conta = +"10" + 90 * 4 / 2;
console.log(conta--);
console.log(conta);

let x = 200;
let y = +"200"; 

if(x !== y) {
  console.log("Diferentes");
} else if(x === y) {
  console.log("Iguais");
} 

*/

var pedroEstuda = 0;
if(pedroEstuda) {
  console.log("Sim");
} else {
  console.log("Não");
}

let camaArumada = "Sim";

if(camaArumada === "Não") {
  console.log("Fodinha em Pedro");
} else {
  console.log("Quem era Pedro em");
}

let pedroTemDinheiro = true;
console.log(!pedroTemDinheiro);

let x = 10 !== "10";
console.log(x);
