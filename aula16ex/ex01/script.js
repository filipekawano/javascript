var vetor = []
var adicionar = document.getElementsByClassName('botao')[0]
var finalizar = document.getElementsByClassName('botao')[1]
adicionar.addEventListener('click', inserir)
finalizar.addEventListener('click', mostrarResultado)

function inserir() {
    let num = document.querySelector('input#numero').value
    vetor.push(Number(num))
    let selecao = document.querySelector('select#result')
    let item = document.createElement('option')
    item.text = `Valor ${num} adicionado.`
    item.value = `valor${vetor.length}`
    selecao.appendChild(item)
}

function mostrarResultado() {
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
    resultado.innerHTML += `<p>O menor valor informado foi ${count}.</p>`
    resultado.innerHTML += `<p>O maior valor informado foi ${count}.</p>`
    resultado.innerHTML += `<p>Somando todos os valores, temos ${count}.</p>`
    resultado.innerHTML += `<p>A média dos valores digitados é ${count}.</p>`
}