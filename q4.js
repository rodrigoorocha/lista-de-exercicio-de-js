let div4 = document.querySelector("#q4");

let h1_4 = document.createElement("h1");
h1_4.textContent = "Questão 04";

let div_qnt4 = document.createElement("div");
let div_minimo4 = document.createElement("div");
let div_maximo4 = document.createElement("div");

let labelQuantidade4 = document.createElement("label");
labelQuantidade4.textContent = "digite a quantidade de numeros";

var inputQuantidade4 = document.createElement("input");
inputQuantidade4.type = "number";
inputQuantidade4.id = "inputQuantidade4";

let labelMaximo4 = document.createElement("label");
labelMaximo4.textContent = "digite o valor maximo ";

var inputMaximo4 = document.createElement("input");
inputMaximo4.type = "number";
inputMaximo4.id = "inputMaximo4";

let labelMinimo4 = document.createElement("label");
labelMinimo4.textContent = "digite o valor mínimo: ";

var inputMinimo4 = document.createElement("input");
inputMinimo4.type = "number";
inputMinimo4.id = "inputMinimo4";

var resultadoq4 = document.createElement("p");

let btnq4 = document.createElement("button");
btnq4.innerHTML = "Calcular";
btnq4.addEventListener("click", cliqueQuestao04);

div4.appendChild(h1_4);
div4.appendChild(div_qnt4);
div4.appendChild(div_minimo4);
div4.appendChild(div_maximo4);
div4.appendChild(resultadoq4);
div_qnt4.appendChild(labelQuantidade4);
div_qnt4.appendChild(inputQuantidade4);
div_maximo4.appendChild(labelMaximo4);
div_maximo4.appendChild(inputMaximo4);
div_minimo4.appendChild(labelMinimo4);
div_minimo4.appendChild(inputMinimo4);

div4.appendChild(btnq4);

var listaq4 = [];

function cliqueQuestao04() {
  if (verificarCondiçao()) {
    for (i = 0; i < inputQuantidade4.value; i++) {
      listaq4.push(between4(inputMinimo4.value, inputMaximo4.value));
    }

    listaq4.sort(function (a, b) {
      return a - b;
    });

    for (j = 0; j < listaq4.length; j++) {
      let numFormato4 = `[${listaq4[j]}]`;
      resultadoq4.innerText = resultadoq4.innerText + numFormato4;
    }
  }
  listaq4 = null;
}

function between4(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function verificarCondiçao() {
  if (
    inputMaximo4.value.length == 0 ||
    inputMinimo4.value.length == 0 ||
    inputQuantidade4.value.length == 0
  ) {
    window.alert("digite em todos os campos valores validos");
    return false;
  } else if (parseInt(inputMaximo4.value) < parseInt(inputMinimo4.value)) {
    window.alert("valor minimo precisa ser menor que o maximo!!");
    return false;
  } else if (
    parseInt(inputQuantidade4.value) >=
    parseInt(inputMaximo4.value) - parseInt(inputMinimo4.value)
  ) {
    window.alert("seja coerente com o intevalo que vc pede");
    return false;
  } else {
    return true;
  }
}
