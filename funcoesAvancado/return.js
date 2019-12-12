//return
//retorna um valor
function mult(a, b) {
  return a * b;
}
//Cria uma função que retorna atributo de objeto.
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome
  };
}
//p1 passa atributos para a função.
const p1 = criaPessoa("Tiago", "Ribeiro");
console.log(p1);

//Funcção dentro de função
function falaFrase(comeco) { //Função 
  function falaResto(resto) { //funcção local
    return comeco + ' ' + resto; //retorno de paramentro função local falaResto()
  }
  return falaResto; // retorno da função da função falaFrase();
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo('Mundo!')); // função que chama falaResto()  