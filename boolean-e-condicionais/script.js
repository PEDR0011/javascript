/*
 Esses valores são False
  - false
  - 0 ou -0
  - NaN
  - null
  - undefined
  - "" ou '' ou ``

 Todo o resto é true 
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

