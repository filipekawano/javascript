valores = [3, 8, 1, 5, 10]
var soma = 0
var maior = valores[0]
var menor = valores[0]
for (num of valores) {
    soma += num
    if (num > maior) {
        maior = num
    }
    if (num < menor) {
        menor = num
    }
}
console.log(soma)
console.log(maior)
console.log(menor)
