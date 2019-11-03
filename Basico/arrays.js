//Array de nomes;
const nome = ['Tiago','Lucas'];
//Imprimindo array 
console.log(nome);

//Mostrando tipo do array
console.log(typeof(nome));

console.log(nome[0]);
//Tamanho do array
console.log('O tamanho do array é : ' ,nome.length);

//Adiciona um elemento
nome.push('Rex');
console.log('Estou add um elemento no vetor com o push',nome);

//Adiciona no ínicio do índice do array
nome.unshift('Taisa');
console.log(nome);
//Remove o primeiro elemento..
nome.shift();
console.log(nome);

//Fatiando índice que contem uma palavra no array com o slice.
console.log(nome.slice(0,1));

//Fatiando e retornando uma letra presente no primeiro índice do vetor
console.log(`Sou a ${nome[0].slice(0,3)} de Tiago ;)`);