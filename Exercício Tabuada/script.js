function Tabuada(){
    let number = window.document.getElementById('number')
    let tabuada = window.document.getElementById('tabuada')

    if (number.value.length == 0){
        window.alert('Digite um número!')
    }

    else{
        
        let i
        
        number = Number(number.value)

        tabuada.innerHTML = ''

        for(i = 0; i <= 10; i++){
        
            let item = document.createElement('option')

            item.text = `${number} X ${i} = ${number * i}`
            
            tabuada.appendChild(item)
        }
    }
}

