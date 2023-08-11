

const player = document.getElementById("player")
const block = document.getElementById("block")
const game = document.getElementById("game")


const makeJump = () => {
    player.classList.add('animate')

    setTimeout(function () {
        player.classList.remove('animate')
    }, 500)
}

setInterval(function () {
    let playerTop =parseInt(window.getComputedStyle(player).getPropertyValue('top'))

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

    if (blockLeft>=0 && blockLeft<=20 && playerTop >= 130) {
        game.innerHTML="<h1>Game Over</h1>"
        alert("Game over")
    }
    
},10)