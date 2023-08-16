// HOME_WORK 1 (PART 1)

// GMAIL CHECKER

const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = 'True'
    gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Please try again! your gmail does not match'
    gmailResult.style.color = 'red'
    }
}









//   HOME_WORK 1 (PART 2)

const childBlock = document.querySelector('.child_block');

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 448 && positionY ===0) {
        positionX++
        childBlock.style.left = ${positionX}px
        setTimeout(move, 1)
    } else if (positionX >= 448 && positionY < 448) {
        positionY++
        childBlock.style.top = ${positionY}px
        setTimeout(move, 1)
    }
}







// Home_Work 2 (TIMER)
let time_buttons = 0
let interval

const secondsElement = document.getElementById('seconds')
const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')
const resumeButton = document.getElementById('resume')
const resetButton = document.getElementById('reset')

function incrementCounter() {
    time_buttons++
    secondsElement.textContent = time_buttons
}

startButton.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(incrementCounter, 1000)
    }
})

stopButton.addEventListener("click", () => {
    clearInterval(interval)
    interval = null
})

resumeButton.addEventListener("click", () => {
    if (!interval) {
        interval = setInterval(incrementCounter, 1000)
    }
})

resetButton.addEventListener("click", () => {
    clearInterval(interval)
    interval = null
    time_buttons = 0
    secondsElement.textContent = time_buttons
    }
)
