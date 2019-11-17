//Function para mostrar hora

var mostraHora = () => {
  let data = new Date();

  //json
  return data.toLocaleTimeString("pt-BR", {
    hour12: false
  });
};

var funcaoDoIntervalo = () => {
  console.log(mostraHora());
};

//Confere intervalo de tempo ser executada em um momento.
//setInterval(referencia,de quanto em quanto tempo será passado)..

//Pode também passar tudo isso para uma variável.
const timer = setInterval(function() {
  console.log(`Agora são :` + mostraHora());
}, 1000);


//Ele executa só uma vez. setTimeOut
const timerOut = setTimeout(() => {
  clearInterval(timer); //ele  para a função .
}, 5000);

