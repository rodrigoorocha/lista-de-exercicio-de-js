let div2 = document.querySelector("#q2");

let h1_2 = document.createElement("h1");
h1_2.textContent = "Questão 02";

let div_fat2 = document.createElement("div");

let labelq2 = document.createElement("label");
labelq2.textContent = "digite um numero para ver o seu fatorial: ";

let inputq2 = document.createElement("input");
inputq2.type = "number";
inputq2.id = "inputq2";

let btnq2 = document.createElement("button");
btnq2.innerHTML = "Calcular";
btnq2.addEventListener("click", cliqueQuestao02);

var resultadoq2 = document.createElement("p");
resultadoq2.id = "resultadoq2";

div2.appendChild(h1_2);
div2.appendChild(div_fat2);
div_fat2.appendChild(labelq2);
div_fat2.appendChild(inputq2);
div2.appendChild(btnq2);
div2.appendChild(resultadoq2);

//53! = XXXXXX (Calculado em yyy ms)
function cliqueQuestao02() {
  let num2 = parseInt(document.getElementById("inputq2").value);
  //Imprimir na tela
  let resultadoFatorial2 = calcularFatorialq2(num2)[0];
  let tempoFatorial2 = calcularFatorialq2(num2)[1];
  //document.getElementById("resultadoQ2").innerText = res2;
  resultadoq2.innerText =
    num2 + "! =  " + resultadoFatorial2 + "(" + tempoFatorial2 + "ms)";
}

function calcularFatorialq2(num2) {
  let resultado2 = 1;
  console.log(num2);
  let inicio2 = new Date().getTime();
  if (num2 == 0) {
    return [1, new Date().getTime() - inicio2];
  } else {
    for (i = resultado2; i <= num2; i++) {
      resultado2 = resultado2 * i;
    }
    return [resultado2, new Date().getTime() - inicio2];
  }
}
