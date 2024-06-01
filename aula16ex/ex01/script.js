var vetor = []
var soma = 0
document.getElementsByClassName('botao')[0].addEventListener('click', inserir)
document.getElementsByClassName('botao')[1].addEventListener('click', mostrarResultado)

function inserir() {
    let num = document.querySelector('input#numero').value
    if (num.length == 0) {
        alert('Por favor, digite um número antes de adicionar!')
    } else if (Number(num) > 100 || Number(num) < 1) {
        alert('Por favor, digite um número entre 1 e 100!')
    // } else if (vetor.indexOf(Number(num)) == -1) {
        // alert('Por favor, não repita o mesmo número!')
    } else {
        vetor.push(Number(num))
        soma += Number(num)
        let listinha = document.querySelector('select#result')
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        item.value = `valor${vetor.length}`
        listinha.appendChild(item)
    }
}

function mostrarResultado() {
    let resultado = document.querySelector('div#resultado')
    resultado.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>
    <p>O menor valor informado foi ${Math.min(...vetor)}.</p>
    <p>O maior valor informado foi ${Math.max(...vetor)}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é ${soma / (vetor.length)}.</p>`
}
