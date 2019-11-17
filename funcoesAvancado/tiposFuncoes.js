// Declaração de funções
function falaOi(){
    console.log('fala oi');
}
falaOi();

//Objeto de primeira classe
const nome = function () {
    console.log('Sou um dado!');
}
nome();
//
function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo');
    funcao();
}
executaFuncao(nome);

//EcmaScript função declaração d função
const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
}

funcaoArrow();