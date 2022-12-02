let nomeAluno = prompt("Digite seu nome")

if (nomeAluno !== null) {
}

if (!nomeAluno) {
    document.write("Valor invalido")
} else {
    let nota1 = prompt("Digite sua primeira nota")

    if (nota1 !== null) {
        nota1 = Number(nota1.replace('.', ' ').replace(',', '.'))
    }

    if (!nota1 <= 10) {
        document.write(`Valor invalido`)
    } else {
        let nota2 = prompt("Digite sua segunda nota")

        if (nota2 !== null) {
            nota2 = Number(nota2.replace('.', ' ').replace(',', '.'))
        }
        if (!nota2 <= 10) {
            document.write("Valor invalido")
        } else {
            let nota3 = prompt("Digite sua terceira nota")

            if (nota3 !== null) {
                nota3 = Number(nota3.replace('.', ' ').replace(',', '.'))
            }
            if (!nota3 <= 10) {
                document.write("Valor invalido")
            } else {
                let media = nota1 + nota2 + nota3 / 3;
                document.write(`O aluno ${nomeAluno} ficou com a média ${media.toFixed(2)}`)
            }
        }
    }
}
