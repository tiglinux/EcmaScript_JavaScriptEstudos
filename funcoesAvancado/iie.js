//IIFE - Expressão de função invocada imediatamente.
(function (idade,peso) { // Aqui eu crio uma função criada imediatamente
    const nome = 'tiago';
    function falaOi(){
        console.log(`Meu nome é ${nome} Ribeiro Santos`);
    }
    falaOi();
    console.log(`Minha idade é ${idade} e possuo ${peso}`)
})(28,64);

//Para criar uma função imediata eu crio assim:
(function () {
    console.log('Eu sou eu');
})(); // (); é chamar a própria função.