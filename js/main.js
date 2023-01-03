import { Modal } from './modal.js'
import "./alert-error"

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


// funções - functions

form.onsubmit = event => {
    event.preventDefault()


    const weight = inputWeight.value
    const height = inputHeight.value

    const ShowAlertError = notANumber(weight) || notANumber(height)

    if (showAlertError) {
        
        return;
    }


    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}


function notANumber(value) {
    return isNaN(value) || value == ""
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}