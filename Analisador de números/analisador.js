let number = window.document.getElementById('number')
let lista = window.document.getElementById('lista')
let res = window.document.getElementById('res')
let vetor = []


function verificarnum(n){
    if (Number(n) < 1 || Number(n) > 100){
        return true
    } else{
        return false
    }
}

function numduplicado(n, vet){
    if (vet.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    
    if (verificarnum(number.value)){
        
         window.alert('Digite um número entre 1 a 100')
    }
    else if (numduplicado(number.value, vetor)){
        
        window.alert('Este número já se encontra na lista')

    } else {

        vetor.push(Number(number.value))

        let item = document.createElement('option')
        item.text = `Você inseriu o número ${number.value}`
        lista.appendChild(item)

        number.value = ''
        number.focus()

    }
}

function calcular(){

let maior = vetor[0]
let menor = vetor[0]
let soma = 0 
let media = 0

    if (vetor.length == 0){
        window.alert('Digite pelo menos um número')
    } else{

    res.innerHTML = ''    

    let total = vetor.length

    res.innerHTML += `<p><li> O total de valores inseridos é igual a ${total}</li></p>`
    
    for (let i in vetor){
        if (vetor[i] > maior){
            maior = vetor[i]
        }
        if (vetor[i] < menor){
            menor = vetor[i]
        }

        soma += vetor[i] 
    }

    media = (soma / total).toFixed(2)

    res.innerHTML += `<p><li>O maior valor inserido é ${maior} </li></p>`
    res.innerHTML += `<p><li> O menor valor inserido é ${menor}</li></p>`
    res.innerHTML += `<p><li> A soma dos valores é ${soma}</li></p>`
    res.innerHTML += `<p><li> A média entre os valores é ${media}</li></p>`

    }

}