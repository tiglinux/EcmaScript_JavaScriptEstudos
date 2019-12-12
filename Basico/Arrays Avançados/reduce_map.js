const numeros = [9,5,50,3,7,100,200,30,40,60,90];

const numerosPares = numeros.filter((valor,indice) =>{ 
    if(valor % 2 == 0){
        console.log(valor);
    }
    else{
        console.log('*');
    }
    return valor;
});