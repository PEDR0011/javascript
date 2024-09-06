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
