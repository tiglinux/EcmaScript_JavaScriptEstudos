let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
//Criando um variável temporária para o varA;
const aux = varA;
varA = varB; //B
varB = varC; //C
varC = varA; //A

console.log(varA);
console.log(varB);
console.log(aux);

//Outra solução
[varA,varB,varC] = [1,2,3];
console.log(varA,varB,varC);