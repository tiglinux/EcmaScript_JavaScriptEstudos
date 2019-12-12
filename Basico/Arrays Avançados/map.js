//Dobrar os numeros

const numeros = [4,10,30,60,100,200,500,700];
const numeros_dobro = numeros.map(function(valor,indice,array) { //valor -> retorna o valor que está no índice, 
    //indice -> retorna o índice da função , array -> retorna todo o array.
   console.log(valor,indice,array); 
});