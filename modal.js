// Abrir Vídeo 01
const botaoAbrir = document.querySelector("#abrir");
const botaoFechar = document.querySelector('#fechar');
const containerModal = document.querySelector("#container");

function abrirModal(){
  event.preventDefault();
  this
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
// Fim Abrir Vídeo 1

// Abrir Vídeo 02
const botaoAbrir2 = document.querySelector("#abrir2");
const botaoFechar2 = document.querySelector('#fechar2');
const containerModal2 = document.querySelector("#container2");

function abrirModal2(){
  event.preventDefault();
  this
  containerModal2.classList.add('ativo');
}

function fecharModal2(event){
  event.preventDefault();
  containerModal2.classList.remove('ativo');
}

function cliqueForaModal2(event){
  if(event.target === this){
    fecharModal2(event);
}}

botaoAbrir2.addEventListener('click', abrirModal2);
botaoFechar2.addEventListener('click', fecharModal2);
containerModal2.addEventListener('click', cliqueForaModal2);
// Fim Abrir Vídeo 2

// Abrir Vídeo 3

const botaoAbrir3 = document.querySelector("#abrir3");
const botaoFechar3 = document.querySelector('#fechar3');
const containerModal3 = document.querySelector("#container3");

function abrirModal3(){
  event.preventDefault();
  this
  containerModal3.classList.add('ativo');
}

function fecharModal3(event){
  event.preventDefault();
  containerModal3.classList.remove('ativo');
}

function cliqueForaModal3(event){
  if(event.target === this){
    fecharModal3(event);
}}

botaoAbrir3.addEventListener('click', abrirModal3);
botaoFechar3.addEventListener('click', fecharModal3);
containerModal3.addEventListener('click', cliqueForaModal3);

// Fechar vídeo 3


// Abrir vídeo 4

const botaoAbrir4 = document.querySelector("#abrir4");
const botaoFechar4 = document.querySelector('#fechar4');
const containerModal4 = document.querySelector("#container4");

function abrirModal4(){
  event.preventDefault();
  this
  containerModal4.classList.add('ativo');
}

function fecharModal4(event){
  event.preventDefault();
  containerModal4.classList.remove('ativo');
}

function cliqueForaModal4(event){
  if(event.target === this){
    fecharModal4(event);
}}

botaoAbrir4.addEventListener('click', abrirModal4);
botaoFechar4.addEventListener('click', fecharModal4);
containerModal4.addEventListener('click', cliqueForaModal4);

// Fechar vídeo 4

// Abrir vídeo 5
const botaoAbrir5 = document.querySelector("#abrir5");
const botaoFechar5 = document.querySelector('#fechar5');
const containerModal5 = document.querySelector("#container5");

function abrirModal5(){
  event.preventDefault();
  this
  containerModal5.classList.add('ativo');
}

function fecharModal5(event){
  event.preventDefault();
  containerModal5.classList.remove('ativo');
}

function cliqueForaModal5(event){
  if(event.target === this){
    fecharModal5(event);
}}

botaoAbrir5.addEventListener('click', abrirModal5);
botaoFechar5.addEventListener('click', fecharModal5);
containerModal5.addEventListener('click', cliqueForaModal5);

// Fechar vídeo 5

// Abrir vídeo 6

const botaoAbrir6 = document.querySelector("#abrir6");
const botaoFechar6 = document.querySelector('#fechar6');
const containerModal6 = document.querySelector("#container6");

function abrirModal6(){
  event.preventDefault();
  this
  containerModal6.classList.add('ativo');
}

function fecharModal6(event){
  event.preventDefault();
  containerModal6.classList.remove('ativo');
}

function cliqueForaModal6(event){
  if(event.target === this){
    fecharModal6(event);
}}

botaoAbrir6.addEventListener('click', abrirModal6);
botaoFechar6.addEventListener('click', fecharModal6);
containerModal6.addEventListener('click', cliqueForaModal6);

// Fim dos vídeos

// Pin Mapa 1
const botaoAbrir7 = document.querySelector("#abrir7");
const botaoFechar7 = document.querySelector('#fechar7');
const containerModal7 = document.querySelector("#container7");

function abrirModal7(){
  event.preventDefault();
  this
  containerModal7.classList.add('ativo');
}

function fecharModal7(event){
  event.preventDefault();
  containerModal7.classList.remove('ativo');
}

function cliqueForaModal7(event){
  if(event.target === this){
    fecharModal7(event);
}}

botaoAbrir7.addEventListener('click', abrirModal7);
botaoFechar7.addEventListener('click', fecharModal7);
containerModal7.addEventListener('click', cliqueForaModal7);



function flechaScroll(){
  var flecha = document.getElementById("flechaId");
  var arco = document.getElementById("arcoId");
  setTimeout(() => {
    var mapaScroll = document.getElementById("scrollMap");
    arco.classList.add("arcoNovo");
  mapaScroll.scrollIntoView();
  }, 300);

  setTimeout(() => {
    
    flecha.classList.add("batata");
  }, 1500);
}