const nomes = ['tiago','ribeiro','lucas'];   //Cria array.
nomes[2] = 'Joao'; // trocando valor do indíce 2.
delete nomes[2];    //Removendo índice posição 2

console.log(nomes);


const idades = [18,26,37];
idades.pop();   //pop é uma function que deleta o último item.
console.log(idades);

//Aqui mostra a quantidade , tamanho do array.
console.log(`Meu array de idades tem : `,idades.length);

// removendo primeiro índice do array
const sobrenomes = ['ribeiro','santos','oliveira'];

sobrenomes.shift() // Remove o primeiro elemento do array.
console.log(sobrenomes);

//Adiciona mais um valor no final do array.
sobrenomes.push('Sepulchro');
console.log(sobrenomes);

sobrenomes.unshift('rex');   //adiciona um valor no ínicio do array.
console.log(sobrenomes);

//Cortando uma parte do array
console.log(sobrenomes.slice(0,2));
