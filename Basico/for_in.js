const frutas = ['banana','pera','maca'];

//Com for
/*for(let i = 0; i<frutas.length; i++){
    console.log(frutas[i])
}
*/
//com for..in.

//Le os índices do array.
for(let i in frutas){
    console.log(i);
}
//Criando objeto

const pessoa = {
    nome:'Tiago',
    idade: 28,
    //EcmaScript
    andar(){
        console.log(pessoa.nome);
    }
}
pessoa.andar();

console.lo