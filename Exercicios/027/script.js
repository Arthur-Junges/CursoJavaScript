/*Deveria ser const*/let texto = document.getElementById('texto')
/*Deveria ser const*/let dvi = document.getElementById('dvi')
/*Deveria ser const*/let number = document.getElementById('number')
/*Deveria ser const*/let listadois = document.getElementById('listadois')
/*Deveria ser const*/let listatres = document.getElementById('listatres')
const btn = document.querySelectorAll('.btn')
let contador = 0
/*Deveria ser const*/let lista = document.getElementById('lista')
let historico = []
let historicomanual = []
/*Deveria ser const*/let sorteio = document.getElementById('sorteio')
const aviso = document.getElementById('aviso')
const aumentar = document.getElementById('aumentar')
const diminuir = document.getElementById('diminuir')
const resetar = document.getElementById('resetar')

dvi.addEventListener('click', () => {
    if(number.value == ''){
        aviso.innerText = 'Defina um valor primeiro'
    } else {
    texto.innerText = Number(number.value)
    aviso.innerText = ''
    contador = Number(number.value) || 0
    }
    historicomanual.push(contador)
    number.focus()
    number.value = ''
})

aumentar.addEventListener('click', () => {
    if(contador === null){
        aviso.innerText = 'Defina um valor primeiro'
        return
    }else {
    contador ++
    texto.innerText = contador
    }
    
    
})

diminuir.addEventListener('click', () => {
    if(contador === null){
        aviso.innerText = 'Defina um valor primeiro'
        return
    } else {
    contador --
    texto.innerText = contador
    }
    
})

resetar.addEventListener('click', () => {
    contador = ''
    number.value = ''
    texto.innerText = contador
    aviso.innerText = ''
    historico.length = 0
    historicomanual.length = 0
    listadois.innerText = ''
    listatres.innerText = ''
})

sorteio.addEventListener('click', () => {
    contador = Math.floor(Math.random() * 101)
    
      while (historico.includes(contador)) {
        contador = Math.floor(Math.random() * 101)
    }

    historico.push(contador)
    
    texto.innerText = contador
    number.value = ''
    
  
})

lista.addEventListener('click', () => {
    listadois.innerText = 'Numeros Sorteados: ' + historico.join(',')
    listatres.innerText = 'Números Digitados: ' + historicomanual.join(',')
})

btn.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('ativo')

        setTimeout(() => {
            btn.classList.remove('ativo')
        }, 150)
    })
})