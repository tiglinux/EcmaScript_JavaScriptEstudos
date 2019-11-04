//Criando objetos.
//Criando objeto com json , let objeto = {}
//pessoa.atributo;
//pessoa.metodo();
const pessoa1 = {
    nome:'Tiago',   //Atributo
    sobreNome:'Ribeiro',    //Atributo
    idade: 28   //Atributo
};

console.log(pessoa1.nome);

//Criando objeto2
function criaPessoa(nome,sobrenome,idade){
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };
}
//Cria objeto usando uma variavel utilizando argumento.
const ps1 = criaPessoa('Lucas','Jorge',32);
const ps2 = criaPessoa('Xavier','Joaquim',36);

console.log(ps1);

const person1 = {
    nome:'Tiago', // Atributo do objeto
    idade:28, //Atributo do objeto
    sobreNome:'Ribeiro', //Atributo do obeto
    //Método do objeto , criando método
    falar(){
        //o this serve para este objeto.(neste objeto)
        console.log(`Meu nome é : ${this.nome}`);
        console.log(`E meu sobrenome é : ${this.sobreNome}`);
    },
    //Método2
    consultaIdade(){
        console.log(`Minha idade é : ${this.idade}`);
    }
}
//Chamo o método do objeto.
person1.falar();
//Chamo  o atributo do objeto, nome = Tiago
console.log(person1.nome);
//Chamo o método2 do objeto
person1.consultaIdade();