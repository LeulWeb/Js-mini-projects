// console.log(Math.floor(Math.random()*21))
const input = document.getElementById('input')
const message = document.getElementById('message')
const form = document.getElementById('form')

let lives = 2;
let randomNumber = Math.floor(Math.random()*21)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (lives > 0) {
        let userInput = parseInt(input.value)
        lives = lives - 1;
        if (userInput > randomNumber) {
            message.textContent="Try lower"
        } else if (userInput < randomNumber) {
            message.textContent="Try Higher"
        } else {
            message.textContent="You have won!!!"
        }
    } else {
        alert("Game over !!!!!")
    }
})

