//reduce , função utilizada para reduzir array em único elemento. para saber o total de números .
const numeros = [10,30,40,1,70,200,300,600,800];
const total = numeros.reduce((acumulador,valor,indice,array) =>{ 
    acumulador = acumulador + valor;
    console.log(acumulador,valor);
    return acumulador;
},0);