var num1 = parseInt(prompt("Insira um numero"))
var num2 = parseInt(prompt("Insira outro numero"))

    SomaNum()
    var soma
    function SomaNum() {
        soma = num1 + num2
        return soma
    }
    console.log("O resultado da soma e:", soma)

    SubNum()
    var sub
    function SubNum() {
        sub = num1 - num2
        return sub
    }
    console.log("O resultado da subtracao e: ", sub)

    MultNum()
    var mult
    function MultNum() {
        mult = num1 * num2
        return mult
    }
    console.log("O resultado da multiplicacao e: ",mult)