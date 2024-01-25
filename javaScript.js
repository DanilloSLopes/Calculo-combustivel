var km = document.getElementById('km')
var combustivel = document.getElementById('valorCombustivel')
var consumo = document.getElementById('consumo')
var calculo = document.getElementById('altera')

function calculoConsumo(km, combustivel, consumo){
    let kmAtt = parseFloat((km.value).replace("," , "."))
    let consumoAtt = parseFloat((consumo.value).replace("," , "."))
    let combustivelAtt = parseFloat((combustivel.value).replace("," , "."))

    let res = (kmAtt / consumoAtt * combustivelAtt)
    let resAtt = res.toFixed(2)
    let resFormatada = (String(resAtt)).replace(".", ",")

    calculo.innerHTML = `O valor gasto na viajem é de R$${resFormatada}`
}

//Fazendo a função para o botao reset
var resetar = document.getElementById('reset')
resetar.addEventListener("click", () => {
    location.reload()
} )

