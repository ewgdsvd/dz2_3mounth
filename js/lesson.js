// PHONE CHECKER

// DOM - Document object model

const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')


const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = 'True'
    phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'Please try again! your number does not match'
    phoneResult.style.color = 'red'
    }
}



