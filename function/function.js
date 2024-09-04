/*
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

function taVeio(iidade) {
  if(typeof iidade !== "number") {
    return "Só pode numeros";
  }else if(iidade >= 60) {
    return true;
  }else {
    return false;
  }
}
console.log(taVeio(60));

function totalPaises(paisesVisitado) {
  var totalPaises = 193
  totalPaises = totalPaises - `${paisesVisitado}`;
  return console.log(`Falta visitar ${totalPaises} pais.`);
}
totalPaises(10);

function teste() {
  var nome = "Pedro";
  var sobreNome = "Henrique";
function teste2() {
  var ano = 18;
  var sexo = "Masculino";
  return `${nome}, ${sobreNome}, ${ano}, ${sexo}`
}
return teste2()

}
console.log(isNaN(teste()))
var pirulito = "morango";
console.log(pirulito);
*/


// EXERCICIO

function trueOrFalse(valor) {
  return !!valor
}
console.log(trueOrFalse(-1));

function aoQuadrado(lado) {
  return lado * 4;
}
console.log(aoQuadrado(5))

function nameComplete(nome, sobreNome) {
  return console.log(nome, sobreNome);
}
nameComplete("Pedro", "Henrique")

function parOrImpar(numero) {
  var modulo = numero % 2;
  if(typeof modulo !== "number") {
    return console.log("Apenas numeros!");
  }else if(modulo === 0) {
    return console.log("Par");
  }else {
    return console.log("Impar");
  }
  }
parOrImpar(35364);

function manda(dado) {
  return console.log(typeof dado);
}

manda(6)
addEventListener("click", function() {
  console.log("Pedro Henrique");
})

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20), jaVisitei(20))
