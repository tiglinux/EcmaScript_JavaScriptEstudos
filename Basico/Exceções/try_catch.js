//try  - tenta executar
//Se o error ocorrer cai no bloco catch
try {
    console.log(naoExiste); // Aqui é uma execeção pois naoExiste() não tem.
} catch (error) {
    console.log(`Error gerado!`); //Exceção disparada.
}
finally{
    console.log('Eu sou sempre executado!');
}   