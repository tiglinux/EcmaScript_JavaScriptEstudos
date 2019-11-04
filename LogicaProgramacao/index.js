const numero =  10;

if(numero){
    if(numero > 10){
        console.log('Maior que 10');
    }else{
        if(numero > 0 && numero < 11){
            console.log('Maior que 0 e menor que 11.');
            }
    }
}

switch(numero){
    case 10:
        console.log('Número vale 10');
        break;
    case 11:
        console.log('Número vale 11');
        break;
    default:
        console.log('Não vale nem 10 nem 11.');
}