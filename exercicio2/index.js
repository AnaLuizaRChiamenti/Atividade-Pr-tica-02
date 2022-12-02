
let x = window.prompt("Digite sua variavel;")

if (x !== null) {
    x = Number(x.replace('.', '').replace(',', '.'))
}

if (!x) {
    document.write("Numero invalido");
} else {
    let y = window.prompt("Digite sua variavel y")

    if (y !== null) {
        y = Number(y.replace('.', '').replace(',', '.'))
    }

    if (!y) {
        document.write("Numero invalido");
    } else {
        let z = x / y
        document.write(`O resultado da divisão ${x} com ${y} é ${z} `)
    }
}

