let btn = document.getElementById('btn')
let texto = document.getElementById('texto')
let input = document.getElementById('num')
let contador = 0
const aumentar = document.getElementById('aumentar')
const diminuir = document.getElementById('diminuir')

btn.addEventListener('click', () => {
    contador = Number(input.value) || 0
    texto.innerText = contador
})

aumentar.addEventListener('click', () => {
    contador += 1 
    texto.innerText = contador    
})

diminuir.addEventListener('click', () => {
    contador -= 1
    texto.innerText = contador
})

