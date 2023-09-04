const barraDeProcura = document.getElementById('ipesquisa')
barraDeProcura.addEventListener('input', ()=> {
    procura(barraDeProcura.value)
})


function procura(valor) {
    const titulos2 = Array.from(document.querySelectorAll('h2'))
    const containerSugestao = document.getElementById('ipesquisa-absolute')
    titulos2.shift()
    const valorTratado = valor.toLowerCase()
    console.log(titulos2[0])
    let indexes = []
    while(containerSugestao.firstChild) {
        containerSugestao.removeChild(containerSugestao.lastChild)
    }
    for(i = 0; i < titulos2.length; i++) {
        console.log(comparacao(i, titulos2, valorTratado))
        if(comparacao(i, titulos2, valorTratado)) {
            indexes[indexes.length] = i
        }

    }
    
    if(indexes.length != 0) {
        indexes.forEach(element => {
            console.log(indexes[6], element)
            if(indexes[6] != element) {
                const sugestao = containerSugestao.appendChild(document.createElement('a')) 
                sugestao.setAttribute('href', `#${titulos2[element].parentElement.id}` )
                sugestao.classList.add('sugestao')
                sugestao.innerText = titulos2[element].innerHTML
                console.log(titulos2[element].innerHTML)
            }
        });
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