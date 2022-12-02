let totalCompra = prompt("Digite o valor total da compra")

if (totalCompra !== null) {
    totalCompra = Number(totalCompra.replace('.', '').replace(',', '.'))
}

if (!totalCompra) {
    document.write("Valor invalido")
} else {

    let quantidadeParcelas = prompt("Em quantas parcelas foi feita a compra")

    if (quantidadeParcelas !== null) {
        quantidadeParcelas = Number(quantidadeParcelas.replace('.', '').replace(',', '.'))
    }
    if (!quantidadeParcelas) {
        document.write("Valor invalido")

    } else {
        let valorParcelas = totalCompra / quantidadeParcelas

        document.write(`O valor total das compra foi R$${totalCompra.toFixed(2)} <br>`)
        document.write(`Forma de pagamento: ${quantidadeParcelas}x de R$${valorParcelas.toFixed(2)}`)
    }
}
