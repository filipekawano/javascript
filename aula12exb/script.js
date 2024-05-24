var res = document.querySelector('div#result')
var anoAtual = new Date().getFullYear()
var checagem = document.querySelector("input[type='button']")
checagem.addEventListener('click', mostrarResultado)

//Abaixo está a função quando o usuário clicar no botão "Verificar"
function mostrarResultado() {
    var anoNasc = document.querySelector('input#ano').value
    var idade = anoAtual - anoNasc
    var sexMasc = document.getElementById('sexMas')
    var sexFem = document.getElementById('sexFem')

    //Botão "Limpar" vira uma seta pra baixo
    var botao = document.querySelector("input[type='reset']")
    botao.style.backgroundColor = "rgb(57, 131, 216)"
    botao.style.color = "white"
    botao.value = "↓"

    if (anoNasc > anoAtual || anoNasc < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else if (sexMasc.checked) {
        res.innerHTML = `<p>Detectamos um Homem com ${idade} anos.</p><img src="imagens/Foto_Filipe.jpg" alt="Homem">`
    } else if (sexFem.checked) {
        res.innerHTML = `<p>Detectamos uma Mulher com ${idade} anos.</p><img src="imagens/Danielle-artesa.jpeg" alt="Mulher">`
    } else {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
}
