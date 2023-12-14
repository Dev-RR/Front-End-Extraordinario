function animacao_esquerda() {
    const animacao = document.querySelectorAll('.anima-esquerda')

    if (animacao.length) {
        const windowMetade = window.innerHeight * 0.8


        function anima_scroll() {
            animacao.forEach((anima) => {
                const sectionTop = anima.getBoundingClientRect().top;
                const esta_visivel = (sectionTop - windowMetade) < 0
                if (esta_visivel) {
                    anima.classList.add('ativo')
                }
            })
        }

        anima_scroll()
        window.addEventListener('scroll', anima_scroll)
    }
}
animacao_esquerda()


function animacao_a_direita() {
    const animacao = document.querySelectorAll('.direita')

    if (animacao.length) {
        const windowMetade = window.innerHeight * 0.8


        function anima_scroll() {
            animacao.forEach((anima) => {
                const sectionTop = anima.getBoundingClientRect().top;
                const esta_visivel = (sectionTop - windowMetade) < 0
                if (esta_visivel) {
                    anima.classList.add('ativo2')
                }
            })
        }

        anima_scroll()
        window.addEventListener('scroll', anima_scroll)
    }
}

animacao_a_direita();




