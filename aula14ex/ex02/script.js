var botao = document.querySelector('div#botao')
botao.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    var numero = Number(document.querySelector('input#numero').value)
    var result = document.querySelector('select#result')
    for (var c = 1; c <= 10; c++) {
        if (c == 1) {
            result.innerHTML = `<option value="tabuada">${numero} x ${c} = ${numero * c}</option>`    
        } else {
            result.innerHTML += `<option value="tabuada">${numero} x ${c} = ${numero * c}</option>`
        }
    }
}
