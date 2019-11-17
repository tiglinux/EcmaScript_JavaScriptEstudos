//Escrever uma função que receba 2 números e retornar o maior deles.

var mostraMaior = (num1, num2) => {
    let maior;
    if (num1 > num2) {
        maior = num1;
        console.log(`Num1 é o maior! : ${maior}`);
    }else{
        if(num1 < num2){
            maior = num2;
            console.log(`Num2 é o maior! : ${maior}`);
        }
        else{
            if(num1 == num2){
                console.log(`Não podem ser números iguais! `);

            }
        }
    }
    return maior;
};

mostraMaior(3,10);
