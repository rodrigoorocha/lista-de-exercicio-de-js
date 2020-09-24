let div5 = document.querySelector("#q5");

let h1_5 = document.createElement("h1");
h1_5.textContent = "Questão 05";

let div_ladoA = document.createElement("div");
let div_ladoB = document.createElement("div");
let div_ladoC = document.createElement("div");
let div_calcular = document.createElement("div");

var inputLadoA = document.createElement("input");
inputLadoA.type = "number";
inputLadoA.id = "inputLadoA";
inputLadoA.placeholder = " digite o valor do lado A";

var inputLadoB = document.createElement("input");
inputLadoB.type = "number";
inputLadoB.id = "inputLadoB";
inputLadoB.placeholder = " digite o valor do lado B";

var inputLadoC = document.createElement("input");
inputLadoC.type = "number";
inputLadoC.id = "inputLadoC";
inputLadoC.placeholder = " digite o valor do lado C";

let btnq5 = document.createElement("button");
btnq5.innerHTML = "Calcular";
btnq5.addEventListener("click", cliqueQuestao05);

var resultadoq5 = document.createElement("p");

div5.appendChild(h1_5);
div5.appendChild(div_ladoA);
div5.appendChild(div_ladoB);
div5.appendChild(div_ladoC);
div5.appendChild(div_calcular);
div5.appendChild(resultadoq5);
div_ladoA.appendChild(inputLadoA);
div_ladoB.appendChild(inputLadoB);
div_ladoC.appendChild(inputLadoC);
div_calcular.appendChild(btnq5);

function cliqueQuestao05() {
  if (
    inputLadoA.value == inputLadoB.value &&
    inputLadoA.value == inputLadoC.value &&
    inputLadoC.value == inputLadoB.value
  ) {
    resultadoq5.innerText = "EQUILATERO";
  } else if (
    inputLadoA.value != inputLadoB.value &&
    inputLadoA.value != inputLadoC.value &&
    inputLadoC.value != inputLadoB.value
  ) {
    resultadoq5.innerText = "ESCALENO";
  } else resultadoq5.innerText = "ISOCELES";
}
