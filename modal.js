const botaoAbrir = document.querySelector("#abrir");
const botaoFechar = document.querySelector('#fechar');
const containerModal = document.querySelector("#container");


function abrirModal(){
  event.preventDefault();
  containerModal.classList.add('ativo');
}


function fecharModal(event){
  event.preventDefault();
  containerModal.classList.remove('ativo');
  
}

function cliqueForaModal(event){
  if(event.target === this){
    fecharModal(event);
}}




botaoAbrir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);
containerModal.addEventListener('click', cliqueForaModal);


function entrar(){
  loginContainer.style.display = "none";
}