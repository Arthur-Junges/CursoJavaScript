const cards = document.querySelectorAll('.card')
const container = document.getElementById('container')

cards.forEach(card => {
    card.addEventListener('click', () => {
        const ativa = card.classList.contains('ativa')

        cards.forEach(c => c.classList.remove('ativa'))
        container.classList.remove('expandido')

        if (!ativa) {
            card.classList.add('ativa')
            container.classList.add('expandido')
        }
    })
})
