const dadosPedro  = {
    nome: 'Pedro',
    idade: 30,
    endereco: 'Rua pedropedropedro',
    cpf : '888.888.888-99',

    aniversario(){
        this.idade++
        return this.idade
    }
}
dadosPedro.endereco = 'Rua Marechal'
dadosPedro.cpf = '000.999.777-66'
dadosPedro.idade = 56
dadosPedro.mae = 'Claudia'
delete dadosPedro.cpf
console.log(`Nome = ${dadosPedro.nome}, Idade = ${dadosPedro.idade}, Endereço = ${dadosPedro.endereco}, cpf = ${dadosPedro.cpf ?? 'Não informado'}, Mãe = ${dadosPedro.mae}, aniversario ${dadosPedro.aniversario()}`)