let totalMinutos = prompt("Digite os minutos que deseja ");


if(totalMinutos !== null) {
    totalMinutos = Number(totalMinutos.replace('.', '').replace(',', '.'))
}

if(!totalMinutos) {
    document.write(`Valor digitado invalido`)
} else {
    let totalSegundos = totalMinutos * 60;

    document.write(` ${totalMinutos} minutos em segundos fica: ${totalSegundos} segundos.`)
}