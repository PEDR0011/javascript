// Propriedade que diz quantos caracters tem em uma String.
let meuNome = "PEDRO";
console.log(meuNome.length);

// Método que deixa as letras Maiúsculo em minúsculo
console.log(meuNome.toLowerCase());

// Funções também possui Métodos e Propriedades
function somaMaisUm(valor) {
  return valor + 1;
}
console.log(somaMaisUm.toString());   // Aqui o método transformou toda a function em escrita.
console.log(somaMaisUm.length);      // E aqui a propriedade diz o total de parametro que a function tem.

// Esse método transforma o numero em String em um breve momento, ele não muda para string pra sempre.
let num = 1.5;
console.log(typeof num.toString());
console.log(typeof num)

// Esse método arredonda um numero decimal aparti de 0.5
console.log(num.toFixed());

/*        * Aprendendo DOM *
var btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
   console.log("Clicou");
 })

*/   

//  EXERCICIO

var seila = {
  quantasCadeiraa: 10,
  bolas: 2,
  mesa() {
    let mesa;
    return mesa = 1;
  },
  toalha() {
    let toalhas;
    return toalhas = 10;
  },
}

seila.bolas.toString()
seila.toalha().toString()
seila.mesa().toString()

var tagA = document.querySelector(".btn1");
tagA.addEventListener("click", function() {console.log("POFF!!")})
tagA.classList
tagA.innerHTML
tagA.classList.add("btn2")
tagA.classList.add("btn3")
tagA.classList.remove("btn2")
