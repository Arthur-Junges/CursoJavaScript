/*const carro = {
    marca:  'Fiat',
    modelo:  'Uno',
    ano : 2001
}
//Converteu para texto
let texto = JSON.stringify(carro)

document.getElementById('area').innerHTML = texto
//Converteu Texto em Objeto
let obj = JSON.parse(texto)

console.log(obj.marca)

const ajax = new XMLHttpRequest()
ajax.open('GET' , 'https://viacep.com.br/ws/85802000/json/')
ajax.send()

ajax.onload = function () {
    document.getElementById('areadois').innerHTML = this.response
}
    */

function buscarCEP(){
    let input = document.getElementById('cep').value
    const ajax = new XMLHttpRequest()
    ajax.open('GET' , `https://viacep.com.br/ws/${input}/json/`)
    ajax.send()

    ajax.onload = function () {
    //document.getElementById('texto').innerHTML = this.responseText
    let objeto = JSON.parse(this.responseText)
    let logradouro = objeto.logradouro
    let cidade = objeto.localidade
    let estado = objeto.uf

    document.getElementById('texto').innerHTML = 'Logradouro:' + logradouro +'<br> Cidade:' + cidade + '<br> Estado:' + estado
}}