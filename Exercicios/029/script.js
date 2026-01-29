const botao = document.getElementById('botao')
const botaodois = document.getElementById('botaodois')

let input = document.getElementById('input')
let texto = document.getElementById('texto')
const URL = 'https://dummyjson.com/products'

let lista = []


async function chamarApi() {
    try {
        const resp = await fetch(URL)

        if (!resp.ok) {
            throw new Error('Erro na requisição')
        }
        const objeto = await resp.json()
        lista = objeto
        console.log(objeto)

    } catch (error) {
        console.log('Erro ao buscar dados:', error.message)
    }
}

function iniciarApp(){
    chamarApi()
}

iniciarApp()

function filtrarPreco() {
    texto.innerText = ''
    let valor = Number(input.value)
    const listaproduto = lista.products.filter(p => p.price < valor)
    if (valor <= 0  || isNaN(valor)){
        texto.innerText = 'Digite um valor válido'
    }else if(listaproduto.length === 0){
        texto.innerText = 'Produto não encontrado'
    } else {
    //console.log(listaproduto)
    texto.innerText = `PRODUTOS ABAIXO DE ${valor} REAIS:\n` + listaproduto.map(p => `Nome: ${p.title} - Preço: ${p.price}`).join('\n')
    input.focus()
    input.value = ''
    }
    }

function buscaId() {
    texto.innerHTML = ''
    let valor = Number(input.value)
    const listaproduto = lista.products.find(p => p.id === valor)
    if (isNaN(valor)){
        texto.innerText = 'Digite um valor válido'
    }else if(!listaproduto){
        texto.innerText = 'Produto não encontrado'
    } else {
    texto.innerHTML = `
        PRODUTO ENCONTRADO POR ID:<br>
        ID: ${listaproduto.id} <br>
        Nome: ${listaproduto.title} <br>
        Preço: ${listaproduto.price} <br>
        Categoria: ${listaproduto.category} <br>
        Marca: ${listaproduto.brand} <br>
        Descrição: ${listaproduto.description}`
    input.focus()
    input.value = ''
    }
}

botao.addEventListener('click', filtrarPreco)

botaodois.addEventListener('click', buscaId)
