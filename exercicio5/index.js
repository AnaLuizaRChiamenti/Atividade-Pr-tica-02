let nomeAluno = prompt("Digite seu nome")

if (!nomeAluno) {
    document.write("Valor invalido")
} else {
    let nota1 = prompt("Digite sua primeira nota")

    if (nota1 !== null) {
        nota1 = Number(nota1.replace('.', '').replace(',', '.'))
    }

/* para rodar o valor invalido o if esta vendo se a nota1 é maior que 10, se a nota1 foi digitada corretamente 
(verificando se a nota1 e igual a 0, que e o equivalente de falso em boleano, se for igual a 0, 
significa que nao digitaram nada, então tem que converter para verdadeiro(já que é falso), 
para o if rodar, se o valor for digitado, ele vai ser verdadeiro e o if vai 
transformar ele em falso, então não vai entrar no if ) e a nota é menor que zero 
 */
    if (nota1 > 10 || !nota1 || nota1 < 0 ) {
        document.write(`Valor invalido`)
    } else {
        let nota2 = prompt("Digite sua segunda nota")

        if (nota2 !== null) {
            nota2 = Number(nota2.replace('.', '').replace(',', '.'))
        }
        if (nota2 > 10 || !nota2 || nota2 < 0) {
            document.write("Valor invalido")
        } else {
            let nota3 = prompt("Digite sua terceira nota")

            if (nota3 !== null) {
                nota3 = Number(nota3.replace('.', '').replace(',', '.'))
            }
            if (nota3 > 10 || !nota3 || nota3  < 0) {
                document.write("Valor invalido")
            } else {
                let media = (nota1 + nota2 + nota3) / 3;
                document.write(`O aluno ${nomeAluno} ficou com a média ${media.toFixed(2)}`)
            }
        }
    }
}
