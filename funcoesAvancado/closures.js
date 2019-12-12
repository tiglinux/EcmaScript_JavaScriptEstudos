function criaOutraFuncao() {
    const nome = 'Luiz';
    //função anônima
    return function () {
        return nome;
    };
}

const funcao =  criaOutraFuncao();
console.log(funcao);