const pessoa = {
    nome : 'Tiago',
    sobrenome:'Ribeiro',
    idade : 28,
    //Outro objeto
    endereco:{
        rua : 'Av gil Veloso',
        numero : 340
    }
}

//Imprime todo objeto
console.log(pessoa);

//Atribuição via desestruturação tipo React js
const {endereco : {rua,numero}} = pessoa;
console.log(rua,numero);