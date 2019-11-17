//Objeto pessoa com atributos e subObjetos.
const pessoa = {
  nome: "Luiz",
  idade: 28,
  endereco: {
    rua: "Av.Brasil",
    num: 320
  }
};
//Atribuição via desestruturação.
const { nome } = pessoa;
console.log(nome);
console.log(`O nome da pessoa é : ${pessoa.nome}`);

