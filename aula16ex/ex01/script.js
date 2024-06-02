var vetor = []
var soma = 0
document.getElementsByClassName('botao')[0].addEventListener('click', inserir)
document.getElementsByClassName('botao')[1].addEventListener('click', mostrarResultado)

function inserir() {
    let num = document.querySelector('input#numero')
    if (num.value.length == 0) {
        alert('Por favor, digite um número antes de adicionar!')
    } else if (Number(num.value) > 100 || Number(num.value) < 1) {
        alert('Por favor, digite um número entre 1 e 100!')
    } else if (vetor.indexOf(Number(num.value)) != -1) { //Corresponde ao "elif num in vetor:" da linguagem Python
        alert('Por favor, não repita o mesmo número!')
    } else {
        vetor.push(Number(num.value))
        soma += Number(num.value)
        let listinha = document.querySelector('select#result')
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        item.value = `valor${vetor.length}`
        listinha.appendChild(item)
        resultado.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function mostrarResultado() {
    if (vetor.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let resultado = document.querySelector('div#resultado')
        let maior = vetor[0]
        let menor = vetor[0]
        for (let pos in vetor) {
            if (vetor[pos] > maior) {
                maior = vetor[pos]
            }
            if (vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }
        resultado.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>O maior valor informado foi ${maior}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${soma / (vetor.length)}.</p>`
    }
}
