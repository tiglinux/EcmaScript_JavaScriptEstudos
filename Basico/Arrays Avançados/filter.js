//retorna números maiores que 10.

const numeros  = [5,50,100,200,70,300,20,11,7];

var callbackFilter = (valor,indice,array) => {
    if(valor > 10){
        return true;
    } else{
        return false;
    }
}


const numeros2  = numeros.filter(callbackFilter); //filtra números maiores que 10. com o filter();
console.log(numeros2);