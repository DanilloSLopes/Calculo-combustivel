var km = document.getElementById('km')
var combustivel = document.getElementById('valorCombustivel')
var consumo = document.getElementById('consumo')
var calculo = document.getElementById('altera')

function calculoConsumo(km, combustivel, consumo){
    if(km.value.length == 0 || combustivel.value.length == 0 || consumo.value.length == 0){
        window.alert('Preencha os valores para realização do calculo')
    } else {
        let kmAtt = parseFloat((km.value).replace("," , "."))
        let consumoAtt = parseFloat((consumo.value).replace("," , "."))
        let combustivelAtt = parseFloat((combustivel.value).replace("," , "."))

        let res = (kmAtt / consumoAtt * combustivelAtt)
        let resAtt = res.toFixed(2)
        let resFormatada = (String(resAtt)).replace(".", ",")

        calculo.innerHTML = `O valor gasto na viagem é de R$${resFormatada}`
    }  
}

//Fazendo a função para o botao reset
var resetar = document.getElementById('reset')
resetar.addEventListener("click", () => {
    location.reload()
} )

//Criando a Classe para acessar os carros pré cadastrados
class Carros {
    constructor(modelo, consumoG, consumoA){
        this.modelo = modelo
        this.consumoG = consumoG
        this.consumoA = consumoA
    }
}

const Kwid = new Carros('Kwid', '15', '12')
const Gol = new Carros('Gol', '11', '9')
const Fiesta = new Carros('Fiesta', '13', '10')

var modCarros = [Kwid, Gol, Fiesta]