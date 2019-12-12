//Quando uma função está dentro de um objeto chamamos ela de METÓDO.
//O this permite acessar valores de dentro do próprio objeto.
function criaPessoa(nome,sobrenome){
    return{ // Aqui é um objeto em formato .json
        nome, // atributo
        sobrenome, //atribto
        fala(assunto){ // Método dentro  um objeto
            return `${this.nome} ${sobrenome} está falando ${assunto}.`;
        },
        altura: a, 
        peso: p, 
        imc(){//método dentro de um objeto.
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz','Otávio',1.60,70);//objeto1
console.log(p1.imc());
 
const p2 = criaPessoa('Tiago','Ribeiro'); // objeto2

console.log(p1.fala('sobre JS'));
console.log(p2.fala('sobre Python')); // objeto.metódo();