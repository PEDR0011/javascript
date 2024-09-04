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


function suaIdade(idade) {
  let suaIdade = idade;
  if(isNaN(suaIdade)) {
    return console.log("Apenas números!!");
  }else if(suaIdade <= 0 ) {
    return console.log("Impossivel");
  }else if(suaIdade <= 12) {
    return console.log("Criança");
  }else if(suaIdade <= 17) {
    return console.log("Adolecente");
  }else if(suaIdade >=60) {
    return console.log("Idoso");
  }else if(suaIdade >= 18) {
    return console.log("Adulto");
  }else if(suaIdade == " ") {
    return console.log("Apenas numero!")
  }
}
suaIdade();