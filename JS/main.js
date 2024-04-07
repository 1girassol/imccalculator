import {modal} from './modal.js'
import { alertError } from './alert-error.js'
import {IMC, notANumber} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event =>{ //arrow function
    event.preventDefault() //inibe o padrão = nao irá recarregar a pg quando submeter

    const height = inputHeight.value
    const weight = inputWeight.value
    
    const weightOrHeightIsNotANummber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANummber){
        alertError.open()
        return;
    }

    alertError.close()

    const result = IMC(height, weight)
    const message = `Seu IMC é de ${result}`

    modal.message.innerText = message
    modal.open()    
}

inputWeight.oninput = () => alertError.close() //quando o input for alterado executa o evento
inputHeight.oninput = () => alertError.close() 

