//Escrever uma função chamada ePaisagem que recebe 2 parâmetros,largura e altura.
// retornar true se a imagem estiver no modo paisagem.

var ePaisagem = (largura, altura) => {
  return largura > altura ? true : false;
};
//retorna o resultado.
console.log(ePaisagem(300,800));