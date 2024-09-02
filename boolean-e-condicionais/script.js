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

/*
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
*/

/*
// Operador Lógico &&
  Se ambos os valores forem true ele irá retornar o último valor verificado, Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos.
*/
if((50 > 70) && (40 + 10)) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if(("haha" + 90) && (1 == 1)) {
  console.log("verdadeiro");
} else {
  console.log("Falso");
}
/*
// Operador Lógico ||
  Retoornar o primeiro valor true que encontrar
*/
let ou = (1 - 1) || (10 + 1);
if(ou) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

/*
// Switch case
  Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira. 
*/
var ondeDormiu = "cama";

switch(ondeDormiu) {
  case "sofa":
    console.log("Vai pra cama fdp");
    break;
  case "mesa":
    console.log("Sai dai mano");
    break;
  case "banho":
    console.log("Coitado mano");
    break;
    case "cama":
      console.log("Ai sim");
      break;
    default:
      console.log("Dormiu aonde?");
}

// EXERCICIO 

  const minhaIdade = 19;
  const outraPessoa = 27;
  if(minhaIdade > outraPessoa) {
    console.log("Pedro é mais velho");
  } else if(minhaIdade === outraPessoa) {
    console.log("Ambos tem a mesma idade");
  } else {
    console.log("A outra pessoa é mais velho");
  }

  var expressao = (5 - 2) && (5 - " ") && (5 - 2);
  console.log(expressao);

  var nome = "Pedro";
  var idade = 19;
  var possuiGraduacao = false;
  var empregoFuturo;
  var dinheiroNaConta = 0;
  console.log(!!nome, !!idade, !!possuiGraduacao, !!empregoFuturo, !!dinheiroNaConta);

  let brasil = 207;
  let china = 1340;
  if(brasil > china) {
    console.log("Brasil tem mais Habitantes");
  } else {
    console.log("China tem mais Habitantes");
  }

  if(("Gato" === "gato") && (5 > 2)) {
    console.log("Verdadeiro");
  } else {
    console.log("Falso");
  }

  if(("Gato" === "gato") || (5 > 2)) {
    console.log("Gato" && "Cão");
  } else {
    console.log("falso");
  }

  
  