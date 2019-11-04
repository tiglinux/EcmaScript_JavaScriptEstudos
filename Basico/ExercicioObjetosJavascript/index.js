function meuEscopo(){
    const form = document.getElementsByClassName('.formulario');

    form.onsubmit =  function(evento) {
        alert(1);   
    };
}
meuEscopo();   