//Criando uma função
function mostrarNome(nome){
    console.log('Olá:',nome);
    return 0;
}
//Chama função
mostrarNome('Tiago');


function saudacao(name){
    //Retornando apenas o nome. void.
    return `Olá:${name}`;
}
//Armazenando a function numa varíavel.
let sauda = saudacao('João');
console.log(sauda);

//Criando uma função anônima para ser chamada quantas vezes quiser.
var soma = function(x,y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(3,10));

//EcmaScript , funcção arrow function
const mult = (a,b) =>{
    return a * b;
}
console.log(mult(10,3));


//EcmaScript para verificar idade quando tem arrow function pode eliminar o return
const verificaIdade = (idade) =>{
    if(idade > 0 && idade < 18){
        console.log('Menor de idade!');
    }else{
        if(idade > 18 && idade < 45){
            console.log('Maior de idade!');
        }
        else{
            if(idade > 45){
                console.log('Idoso!');
            }
            else{
                console.log('Idade inválida!');
            }
        }
    }
     idade;
}

verificaIdade();

//Quando se existe apenas uma linha de código dentro da function pode eliminar o return.
let meuNome = (name) => name;
console.log(meuNome('TiagoJoão'));