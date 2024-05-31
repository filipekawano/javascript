var botao = document.querySelector('div#botao')
botao.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    let numero = document.querySelector('input#numero').value
    let result = document.querySelector('select#result')
    if (numero.length == 0) {
        alert('Por favor, digite algum número!')
    } else {
        numero = Number(numero)
        for (let c = 1; c <= 10; c++) {
            if (c == 1) {
                result.innerHTML = `<option value="v${c}">${numero} x ${c} = ${numero * c}</option>`    
            } else {
                result.innerHTML += `<option value="v${c}">${numero} x ${c} = ${numero * c}</option>`
            }
        }
    }
}
