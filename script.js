function criarPessoas(nome,idade,cpf){
       this.nome = nome;
       this.idade = idade;
       this.cpf = cpf;
}

var pessoa = new criarPessoas(`João`,`34`,`891981238913`);

console.log(pessoa);