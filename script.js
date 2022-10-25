var num1 = parseInt(prompt("Insira um numero"))
var num2 = parseInt(prompt("Insira outro numero"))


var pergunta = prompt("Qual operacao voce quer fazer? 1 = multiplicacao, 2 = divisao, 3 = soma, 4 = subtracao")

if(pergunta == 3){
    function SomaNum() {
        soma = num1 + num2
        return soma
    }
    console.log("O resultado da soma e:", soma)
}

if(pergunta == 4){
    function SubNum() {
        sub = num1 - num2
        return sub
    }
    console.log("O resultado da subtracao e: ", sub)
}

if(pergunta == 1){
    function MultNum() {
        mult = num1 * num2
        return mult
    }
    console.log("O resultado da multiplicacao e: ",mult)
}

if(pergunta == 2){
    function DivNum() {
        div = num1 / num2
        return div
    }
    console.log("O resultado da divisao e: ",DivNum())
}