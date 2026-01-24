const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_'
const lista = []
const senhaInput = document.getElementById('isenha')
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
    senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password'
})

function gerarSenha() {
    let senha = ''
    const tamanho = Math.floor(Math.random() * (15 - 4 + 1)) + 4
    while (senha.length < tamanho){
    senha += caracteres[Math.floor(Math.random() * caracteres.length)]
   }
    if(!lista.includes(senha)){
        lista.push(senha)
        document.getElementById('isenha').value = senha
    } else {
        return gerarSenha()
    }
    
   
}


