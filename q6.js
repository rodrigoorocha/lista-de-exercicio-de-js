var div6 = document.querySelector("#q6");

let h1_6 = document.createElement("h1");
h1_6.innerText = "Questão6";

let btnLogin6 = document.createElement("button");
btnLogin6.innerText = "Login";
let btnCadastro6 = document.createElement("button");
btnCadastro6.innerText = "Cadastro";

let labelLogin6 = document.createElement("label");
labelLogin6.innerText = "Entre com seu login";
let inputLogin6 = document.createElement("input");
inputLogin6.id = "inputLogin6";
let btnEntrarLogin6 = document.createElement("button");
btnEntrarLogin6.innerText = "Entrar";

let labelCadastroQ6 = document.createElement("label");
labelCadastroQ6.innerText = "Escolha seu nome de usuário";
let inputCadastro6 = document.createElement("input");
inputCadastro6.id = "inputCadastro6";
let btnCriarCadastro6 = document.createElement("button");
btnCriarCadastro6.innerText = "Cadastrar";

var txtUsuarioLogado = document.createElement("b");
let btnLogOut6 = document.createElement("button");
btnLogOut6.innerText = "LogOut";

let divLogin6 = document.createElement("div");
divLogin6.style.display = "none";
let divCadastro6 = document.createElement("div");
divCadastro6.style.display = "none";
let divUsuarioLogado6 = document.createElement("div");
divUsuarioLogado6.style.display = "none";

div6.appendChild(h1_6);
div6.appendChild(btnLogin6);
div6.appendChild(btnCadastro6);
div6.appendChild(divLogin6);
div6.appendChild(divCadastro6);
div6.appendChild(divUsuarioLogado6);

divLogin6.appendChild(labelLogin6);
divLogin6.appendChild(inputLogin6);
divLogin6.appendChild(btnEntrarLogin6);

divCadastro6.appendChild(labelCadastroQ6);
divCadastro6.appendChild(inputCadastro6);
divCadastro6.appendChild(btnCriarCadastro6);

divUsuarioLogado6.appendChild(txtUsuarioLogado);
divUsuarioLogado6.appendChild(btnLogOut6);

btnLogin6.addEventListener("click", mostrarDivLogin6);
btnCadastro6.addEventListener("click", mostrarDivCadastro6);
btnCriarCadastro6.addEventListener("click", cadastrarUsuario6);
btnEntrarLogin6.addEventListener("click", entrarLoginQ6);
btnLogOut6.addEventListener("click", logOut6);

function cadastrarUsuario6() {
  let cadNome6 = document.getElementById("inputCadastro6").value;
  window.localStorage.setItem(cadNome6, cadNome6);
  window.alert("Cadastro realizado");
}

function entrarLoginQ6() {
  let logNome6 = document.getElementById("inputLogin6").value;
  let nome6 = window.localStorage.getItem(logNome6);

  if (nome6 == null) {
    window.alert("Esse usuário não existe");
  } else {
    mostrarUsuarioLogado6(nome6);
  }
}

function logOut6() {
  divUsuarioLogado6.style.display = "none";
  btnLogin6.style.display = "block";
  btnCadastro6.style.display = "block";
  divLogin6.style.display = "none";
  divCadastro6.style.display = "none";
}

function mostrarDivLogin6() {
  divLogin6.style.display = "block";
  divCadastro6.style.display = "none";
  window.scrollTo(0, document.body.scrollHeight);
}

function mostrarDivCadastro6() {
  divLogin6.style.display = "none";
  divCadastro6.style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function mostrarUsuarioLogado6(nomeU6) {
  divUsuarioLogado6.style.display = "block";
  btnLogin6.style.display = "none";
  btnCadastro6.style.display = "none";
  divLogin6.style.display = "none";
  divCadastro6.style.display = "none";

  txtUsuarioLogado.innerText = nomeU6 + ", voce esta logado";
  window.scrollTo(0, document.body.scrollHeight);
}
