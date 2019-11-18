//Promises, são promessas ou códigos que não irão influenciar em todo o programa JS.
//são funções que irão devolver o valor de resultado de sucesso ou erro depois de um temmpo.

var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    // resolve será uma função que será executada quando sucesso e reject ao contrário em caso de erro
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/tiglinux");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("erro na requisição");
        }
      }
    };
  });
};

//Usando promise.
minhaPromise()
  //Se o código chegou com sucesso ele roda a promisse then em caso afirmativo.
  .then(function(response) {
    console.log(response);
  })
  //Senão em caso negativo gera uma exceção .catch
  .catch(function(error) {
    console.log(error);
  });
