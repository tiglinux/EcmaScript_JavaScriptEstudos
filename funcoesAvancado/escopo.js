let nome = 'Luiz';

//Função chamando função.
function falaNome(){
    console.log(`seu nome é :${nome}`);
}

function usaNome(){
    //Chama a função falaNome() que irá mostrar a outra função.
    falaNome();
}