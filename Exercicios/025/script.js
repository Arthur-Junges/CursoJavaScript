// variável GLOBAL (fora das funções)
let numeroSorteado = sortearNum()

function sortearNum() {
    return Math.floor(Math.random() * 101) // 0 a 100
    
}

function testarNum() {
    let num = Number(document.getElementById('inum').value)
    let resultado = document.getElementById('chute')

    if (num === numeroSorteado) {
        resultado.innerHTML = '🎉 Acertou!!'
    } else if (num > numeroSorteado) {
        resultado.innerHTML = '⬇️ Menor'
    } else {
        resultado.innerHTML = '⬆️ Maior'
    }
}

function resetarNum(){
    numeroSorteado = sortearNum()
    document.getElementById('chute').innerHTML = ''
    document.getElementById('inum').innerHTML = ''
}
console.log(numeroSorteado)
