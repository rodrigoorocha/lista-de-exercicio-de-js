let div3 = document.querySelector("#q3");

let h1_3 = document.createElement("h1");
h1_3.textContent = "Questão 03";

let btnq3 = document.createElement("button");
btnq3.innerHTML = "gerar relatorio";
btnq3.addEventListener("click", cliqueGerarRelatorio3);

let div_relat = document.createElement("div");

var relatorioq3 = document.createElement("p");
relatorioq3.id = "relatorioq3";

var divEstatistica3 = document.createElement("h3");

div3.appendChild(h1_3);
div3.appendChild(btnq3);
div_relat.appendChild(relatorioq3);

class Aluno {
  constructor(matricula, nota) {
    this.matricula = matricula;
    this.nota = nota;
  }

  situacaoAluno() {
    return this.nota >= 60 ? "APROVADO" : "REPROVADO";
  }

  diagnosticoAluno() {
    return `O aluno ${this.matricula} obteve nota ${
      this.nota
    } e está ${this.situacaoAluno()}`;
  }
}

function gerarAlunos() {
  const qtdAlunos3 = 20;
  let listaAlunos3 = [];
  for (let k = 0; k < qtdAlunos3; k++) {
    let aluno3 = new Aluno(k, Math.floor(Math.random() * 100));
    //console.log(aluno.diagnosticoAluno());
    listaAlunos3.push(aluno3);
  }
  return listaAlunos3;
}

function cliqueGerarRelatorio3() {
  let ListaFimAlunos3 = gerarAlunos();
  let aprovados3 = 0;

  for (j = 0; j < ListaFimAlunos3.length; j++) {
    let linhaAluno3 = document.createElement("p");
    linhaAluno3.textContent = ListaFimAlunos3[j].diagnosticoAluno();
    div3.appendChild(linhaAluno3);

    if (ListaFimAlunos3[j].nota > 60) {
      aprovados3 = aprovados3 + 1;
    }
  }
  let reprovados3 = 20 - aprovados3;
  let porcentagemAprovados3 = (aprovados3 * 100) / 20;
  let porcentagemReprovados3 = (reprovados3 * 100) / 20;

  let pEstatistica3 = document.createElement("p");
  pEstatistica3.innerText = `Aprovados: ${aprovados3} (${porcentagemAprovados3}%) | Reprovados: ${reprovados3} (${porcentagemReprovados3}%)`;
  div3.appendChild(divEstatistica3);
  divEstatistica3.appendChild(pEstatistica3);
}
