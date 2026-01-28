// fetch() faz a requisição HTTP (GET por padrão)
// await fetch(...) → espera a resposta do servidor
// resp.status === 200 → confirma que deu certo (OK)
// await resp.json() → converte JSON → objeto JS
const URL = 'https://dummyjson.com/products'

async function chamarApi() {
    try {
        const resp = await fetch(URL)

        if (!resp.ok) {
            throw new Error('Erro na requisição')
        }

        const obj = await resp.json()
        //console.log(obj)

        //p         cada item do array (um produto)
        //p.id      acessa o id daquele produto
        //=== 5     compara com o valor desejado
        const produto = obj.products.filter(p => p.price < 10)
        console.log(produto)

    } catch (error) {
        console.log('Erro ao buscar dados:', error.message)
    }
}

chamarApi()
