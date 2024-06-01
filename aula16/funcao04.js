function fatorial(n) {
    let mult = 1
    while (n > 1) {
        mult *= n
        n--
    }
    return mult
}

console.log(fatorial(6))
