//Alertas;
alert('Olá mundo!');
//Confirm; o confirm não pode ser declarada.
opcao = confirm('Deseja continuar?');
//Se o usuarário clicar em 'Cancelar' o botão receberá o valor 'false';
if(opcao == true){
    console.log('Seja muito bem vindo!');
    let nome = prompt('Digite seu nome:',)
    if(nome == true){
        console.log(`Bem vindo(a),${nome}`);
    }
    else{
        if(nome == false){
            console.log('Poxa.. digite seu nome.. please?');

        }
    }
}
else{
    if(!(opcao == true)){
        console.log('Ok.. Bye.. :)');
    }
}