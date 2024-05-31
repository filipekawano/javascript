var resultado = document.querySelector('div#result')
var botao = document.querySelector('div#botao')
botao.addEventListener('click', showResult)

function showResult() {
    var inicio = document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#passo').value
    if (inicio == '' || fim == '' || passo == '') {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        resultado.innerHTML = `<p>Contando:</p>`
        if (inicio > fim) {
            // Contagem regressiva
            for (var c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += `${c} &#x1F449; `
            }    
        } else {
            // Contagem crescente
            for (var c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c} &#x1F449; `
            }    
        }
        resultado.innerHTML += '&#x1F6A9;'    
    }
}
