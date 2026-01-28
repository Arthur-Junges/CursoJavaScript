const lucas = {
    name: 'lucas',
    lastname: 'Garcez',
    age: 20,
}

const marcia = {
    name: 'marcia',
    lastname: 'oliveira',
    age: 17,
}

const joao = {
    name: 'joao',
    lastname: 'silva',
    age: 18
}

const ana = {
    name: 'ana',
    lastname: 'santos',
    age: 21,
}

const people = [lucas, marcia, joao, ana]

/*Método forEach ---- percorre array, executa ação, não retorna novo array
people.forEach((value,index,array) => {
    console.log('value',value.name, 'ultimo nome', value.lastname,'idade', value.age)
    console.log('index', index)
    console.log('----------------------------')
})
*/

/*Método map ---- transforma itens e cria novo array
const names = people.map((value,index,array) => {
    console.log('value',value.name, 'ultimo nome', value.lastname,'idade', value.age)
    console.log('index', index)
    console.log('----------------------------')
    return value.name
})

console.log(names)
*/

/*Método find ---- encontra o primeiro item que satisfaz condição
const pessoa = people.find((value,index,array) => {
    const isjoao = value.name ==='marcia'
    return isjoao
    const menor = value.age < 18
    return menor
})

console.log(pessoa)
*/

/*Método filter ---- retorna itens que passam em uma condição
const pessoa = people.filter((value,index,array) => {
    const maioridade = value.age >= 18
    return maioridade
})

console.log(pessoa)
*/


