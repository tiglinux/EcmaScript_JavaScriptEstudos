let nome = 'Luiz';

//Função chamando função.
function falaNome(){
    //o nome da variavel nome agora é 'Otávio'.
    const nome = 'Otávio';
    console.log(`seu nome é :${nome}`);
}

function usaNome(){
    //Chama a função falaNome() que irá mostrar a outra função.
    falaNome();
}
usaNome(); //Chama a função que irá usar a falaNome();