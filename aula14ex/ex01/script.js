var resultado = document.querySelector('div#result')
var botao = document.querySelector('div#botao')
botao.addEventListener('click', showResult)

function showResult() {
    var inicio = Number(document.querySelector('input#inicio').value)
    var fim = Number(document.querySelector('input#fim').value)
    var passo = Number(document.querySelector('input#passo').value)
    if (inicio === '' || fim == '') {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        if (passo === 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        resultado.innerHTML = `<p>Contando:</p>`
        for (var c = inicio; c <= fim; c += passo) {
            resultado.innerHTML += `${c} &#x1F449; `
        }
        resultado.innerHTML += '&#x1F6A9;'    
    }
}
