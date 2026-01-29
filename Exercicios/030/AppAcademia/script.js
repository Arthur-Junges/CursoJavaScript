const titulo = document.querySelector('#painel h1')
const botao = document.querySelector('button')
const tela = document.getElementById('tela')
const link = document.querySelector('#link')

link.addEventListener('click', (e) => {
    e.preventDefault()
    tela.classList.toggle('login')

    if (tela.classList.contains('login')) {
    titulo.innerText = 'Login'
    botao.innerText = 'Entrar'
    link.innerHTML =  'Não tem uma conta? <a href="#">Faça Registro</a>'
    } else {
    titulo.innerText = 'Registro'
    botao.innerText = 'Registrar'
    
    }

})

