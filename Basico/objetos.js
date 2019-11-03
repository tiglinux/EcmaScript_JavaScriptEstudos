let pessoa = {
    'nome':'Tiago',
    'idade': 28,
    mostrar:function() {
        console.log(`Meu nome é : ${this.nome},e tenho ${this.idade}`);
    }
}
pessoa.mostrar();