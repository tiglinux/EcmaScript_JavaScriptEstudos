//variavel arguments que sustenta todos os argumentos enviados.

function soma() {
  let total = 0;

 //Aqui retorna os valores que estão dentro dos índices.
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
soma(10, 20, 30, 10,100);
