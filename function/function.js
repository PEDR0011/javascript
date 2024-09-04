function calculaQuadrado(lado) {
  return lado * lado;
}
console.log(calculaQuadrado(10));

let x = 2 * seiLa();
function seiLa() {
  return 10;
}
console.log(x)

function imc(peso, altura) {
  let imc = peso / (altura ** 2);
  return imc; 
}
console.log(imc(55, 1.75));

function corFavorita(cor) {
  if(cor === "preto") {
    return console.log("Uau você é das travas!!");
} else if(cor === "verde") {
  return console.log("Maconheiro");
} else if(cor === "vermelho") {
  return console.log("Sangue");
} else {
  return console.log("cor não encontrada");
}
}
corFavorita("preto");

addEventListener("click", function() {console.log("eai");})