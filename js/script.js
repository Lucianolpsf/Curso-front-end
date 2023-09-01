const barraDeProcura = document.getElementById('ipesquisa')
barraDeProcura.addEventListener('input', ()=> {
    procura(barraDeProcura.value)
})


function procura(valor) {
    const titulos2 = document.querySelectorAll('.conteudo-card > h2')
    const valorTratado = valor.toLowerCase()
    let indexes = []
    for(i = 0; i < titulos2.length; i++) {
        console.log(comparacao(i, titulos2, valorTratado))
        if(comparacao(i, titulos2, valorTratado)) {
            indexes[indexes.length] = i
        }
    }
    console.log(indexes)
}

function comparacao(index, items, valor) {
    const titulo = items[index].innerText.toLowerCase()
    const tituloSplit = titulo.split('').sort()
    const valorSplit = valor.split('').sort()
    let iguais = 0

    valorSplit.forEach(letra => {
        let turnToggler = 0
        tituloSplit.forEach(letraTitulo => {
            if(letra == letraTitulo && turnToggler == 0) {
                iguais++
                turnToggler = 1
            }
        });
    });

    if (iguais == valorSplit.length) {
        return true
    } else {
        return false
    }
}