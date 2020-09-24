  // 1º passo: referenciar a div onde o nosso conteúdo será renderizado:
  let div = document.querySelector("#q1");

  let h1 = document.createElement("h1");
  h1.textContent = "Questão 01";

  // Divs criadas para organização dos elementos
  let div_min = document.createElement("div");
  let div_max = document.createElement("div");
  let div_btn = document.createElement("div");
  let div_res = document.createElement("div");
  div_res.id = "resultadoQ1"; // Como o resultado aparecerá aqui, colocamos um id. 

  // Elementos do componente: labels, inputs, botões.
  let label1 = document.createElement("label");
  label1.textContent = "Valor mínimo: ";

  let input1 = document.createElement("input");
  input1.type = "number";
  input1.id = "min"; // id, porque capturaremos o valor aqui digitado ao clicarmos o botão

  let label2 = document.createElement("label");
  label2.textContent = "Valor máximo: ";

  let input2 = document.createElement("input");
  input2.type = "number";
  input2.id = "max";

  let btn = document.createElement("button");
  btn.innerText = "Calcular";

  /* 
  O segundo parâmetro abaixo contém o nome da função SEM PARÊNTESES. 
  Caso contrário, a função será chamada na hora, tentará acessar nós ainda inexistentes e dará erro. 
  */
  btn.addEventListener("click", cliqueQuestao01);
  // Variante, usando lambda
  //btn.addEventListener("click", function{ cliqueQuestao01() });

  // Adicionar os nós filhos aos respectivos pais:
  div.appendChild(h1);
  div.appendChild(div_min);
  div.appendChild(div_max);
  div.appendChild(div_btn);
  div.appendChild(div_res);
  div_min.appendChild(label1);
  div_min.appendChild(input1);
  div_max.appendChild(label2);
  div_max.appendChild(input2);
  div_btn.appendChild(btn);


function cliqueQuestao01(){
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);
  let res = calcularMultiplos(min, max);
  //Imprimir na tela
  document.getElementById("resultadoQ1").innerText = res;
}

function calcularMultiplos(min, max){
  // Variável que contará o número de múltiplos de 2 e de 3 simultaneamente dentro do intervalo
  let resultado = 0;  
  for(let i = min + 1; i < max; i++){
    if( (i % 2 == 0) && (i % 3 == 0)){
      // Então, o número atende à condição
      resultado++; // ou: resultado += 1; ou: resultado = resultado + 1;
      //console.log(i);
    }
  }
  return resultado;
}