var dados = {
  nome: "Pedro",
  idade: 19,
  sexo: "M",
  casado: false
}
console.log(dados.sexo);

var quadrado = {
  lado: 4,
  area(lado) {
    return lado ** 2;
  },
  perimetro() {
    return this.lado ** 2
  },
}

console.log(quadrado.area(5))
 console.log(quadrado.perimetro())

 let lalal = {
  nome: "Pedro",
  dataNascimento(nasc, anoAtual) {
    return anoAtual - nasc;
  },
}

console.log(lalal.dataNascimento(2005, 2024));

// método do object Math que dar numeros aleatorios
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// dar o valor de PI
console.log(Math.PI);

// método que organiza em uma tabela vizualmente.
console.table(lalal);

var menu = {
  widht: 600,
  height: 500,
  metadeDoHeight() {
    return this.height / 2;
  },
  color: "red",
}
menu.color = "black";
menu.font = 27;

let cor = menu.color;
console.log(cor)

console.log(menu.metadeDoHeight())

// Existe métodos que ao criar um object são herdados.

console.log(menu.hasOwnProperty("color")); // Esse método verifica se essa propriedade foi criada direto nesse objeto. esse método é apenas um de varios métodos que são herdados.



// E na verdade, é saber essas propriedades e métodos que é você entender bem JavaScript, entendeu? pra você conseguir fazer algum programa mesmo. É por que você conhece propriedades e métodos dos diferentes objetos que o javascript tem entendeu?




// EXERCIO 

let dadosPessoais = {
  nome: "Pedro",
  sobreNome: "Henrique",
  nomeCompleto() {
    return this.nome + " " + this.sobreNome;
  },
  casado: false,
}
console.log(dadosPessoais.nomeCompleto())

var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
}
carro.preco = 3000;
console.log(carro.preco)

var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  lateAoVerHomen(homem) {
    if((homem !== "sim") && (homem !== "não")) {
      return console.log("APenas sim ou não");
    } else if(homem === "sim") {
      return console.log("AUAUAU!!!");
    }else if(homem === "não") {
      return console.log("O cachorro fez nada")
    }
  },
}

console.log(cachorro.lateAoVerHomen("sim"));