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


var btn = document.querySelector(".btn")