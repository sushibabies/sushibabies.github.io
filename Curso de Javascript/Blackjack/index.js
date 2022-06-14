
let cardsArray = []
let sum = 0
let hasBlackjack = false
let beAlive = false
let message = ""
let msgEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


let player = {
    name: "Marcos",
    chips: 100
}

playerEl.textContent = player.name + " US$: " + player.chips

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    beAlive = true
    sum = firstCard + secondCard
    cardsArray = [firstCard, secondCard]
    renderGame()
}

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
   let randomNumber = Math.floor( Math.random()*13 ) + 1
     if (randomNumber === 1) {
       return 11
   }
     else if (randomNumber > 10) {
        return 10
   }
     else return randomNumber

}

function renderGame(){
    cardsEl.textContent = "Cards: "

    for (let i=0; i < cardsArray.length; i++){
        cardsEl.textContent += cardsArray [i] + " - "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20){
        message = "Do you want another card?"
        msgEl.textContent = message
    } else if (sum === 21){
        message = "Bingo!"
        msgEl.textContent = message
        hasBlackjack = true
    } else {
        message = "Die"
        msgEl.textContent = message
        beAlive = false
    }
}

function newCard(){
    if (beAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cardsArray.push(newCard)
        renderGame()
    }
}

