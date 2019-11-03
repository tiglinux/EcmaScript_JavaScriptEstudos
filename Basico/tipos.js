//Constante
const nome = 'tiago';
const nome1 = 'tiago2';
let num1 = '10';
let nomeAluno = null; // vazia,nula..Aponta para nenhum local.
const nomeVariavel = true; //logico. ñ é necessario  o boolean

//typeof() verifica o tipo da variavel.
console.log(typeof(nome));

const a = [1,2];
let b = a;
console.log(typeof(b));

a.push(10);

console.log(a);
console.log(b);

//Conversões 

//Convert para flutuante.
num1 = parseFloat(num1);
console.log(num1);
//Convert para inteiro.
num1 = parseInt(num1);
console.log(num1);