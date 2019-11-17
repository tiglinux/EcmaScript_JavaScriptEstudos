/*
    Code by : Tiago Ribeiro Santos
    Date : 17/11/2019

*/

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

//função relógio
function RelogioMostrar() {
  function horadiaSegundos(segundos) {
    var data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour: false,
      timeZone: UTC
    });
  }
}
let segundos = 0;
let timer;
function iniciaRelogio() {
  timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = horadiaSegundos(segundos);
  }, 1000);
}
//Pegar evento de um clique de um botão
iniciar.addEventListener("click", function() {
  iniciaRelogio();
});
pausar.addEventListener("click", function() {
  alert("Cliquei no iniciar.");
});
zerar.addEventListener("click", function() {
  alert("Cliquei no iniciar.");
});
RelogioMostrar();
