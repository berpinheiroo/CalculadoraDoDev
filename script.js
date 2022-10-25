var numA = parseInt(prompt("Insira um numero"))
var numB = parseInt(prompt("Insira outro numero"))
var resultados = []
var index = 0
var continuar = "s"



function SomaNum(num1, num2) {
    soma = num1 + num2
    return soma
}


function SubNum(num1, num2) {
    sub = num1 - num2
    return sub
}


function MultNum(num1, num2) {
    mult = num1 * num2
    return mult
}

function DivNum(num1, num2) {
    div = num1 / num2
    return div
}

function ExibirHistorico() {
    console.log(resultados)
}

while (continuar == "s") {
    var operacao = prompt("Qual operacao voce quer fazer? 1 = multiplicacao, 2 = divisao, 3 = soma, 4 = subtracao")
    if (operacao == "1") {
        resultados[index] = MultNum(numA, numB)
        index++
        console.log("O resultado da multiplicacao e: ", MultNum(numA, numB))
    } else if (operacao == "2") {
        resultados[index] = DivNum(numA, numB)
        index++
        console.log("O resultado da divisao e: ",DivNum(numA, numB))
    } else if (operacao == 3) {
        resultados[index] = SomaNum(numA, numB)
        index++
        console.log("O resultado da soma e: ",SomaNum(numA, numB))
    } else if (operacao == 4) {
        resultados[index] = SubNum(numA, numB)
        index++
        console.log("O resultado da subtracao e: ",SubNum(numA, numB))
    }
    continuar = prompt("Deseja continuar fazendo operacoes?")
}
ExibirHistorico()