let historico = []

function randomNum(){
    let min = 0
    let max = 100
    let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    if (!historico.includes(aleatorio)){
        historico.push(aleatorio)
        return aleatorio
    } else {
        return randomNum()
    }  
}

function gerarNumero(){
    
    const dados = randomNum() 
    document.getElementById('gerar').innerHTML = dados

}

function mostrarHistorico() {
    document.getElementById('hist').innerHTML = historico.join(', ')
    let caixa = document.getElementById('caixa')

    caixa.style.backgroundColor = 'aquamarine'
    caixa.style.width = '300px'
    caixa.style.minHeight = '100px'  
    caixa.style.margin = 'auto'
    caixa.style.borderRadius = '30px'
    caixa.style.padding = '10px'
    caixa.style.boxSizing = 'border-box'

}

function limparHistorico(){
    historico.length = 0
    document.getElementById('hist').innerHTML = ''
}
