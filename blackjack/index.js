//PLAYER VARIABLES//
let cardsArray = [];
let sum = 0;
let hasBlackjack = false;
let beAlive = false;
let playerHasVictory = false;

// DEALER VARIABLES //
let dcardsArray = [];
let dsum = 0;
let dhasBlackjack = false;
let dbeAlive = false;

//GETTING HTML ELEMENTS//

let message = "";
let msgEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let dsumEl = document.getElementById("dsum-el");
let cardsEl = document.getElementById("cards-el");
let dcardsEl = document.getElementById("dcards-el");
let playerEl = document.getElementById("player-el");

// PLAYER OBJECT //
let player = {
  name: "Marcos",
  chips: 100
};

playerEl.textContent = player.name + " US$: " + player.chips;

// FUNCTIONS//

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  let dfirstCard = getRandomCard();
  let dsecondCard = getRandomCard();

  beAlive = true;
  dbeAlive = true;

  sum = firstCard + secondCard;
  dsum = dfirstCard + dsecondCard;

  cardsArray = [firstCard, secondCard];
  dcardsArray = [dfirstCard, dsecondCard];

  dcardsEl.textContent = "Cartas do Dealer: ? +" + " " + dfirstCard;
  renderGame();
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else return randomNumber;
}

function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cardsArray.length; i++) {
    cardsEl.textContent += cardsArray[i] + " - ";
  }

  sumEl.textContent = "Sum: " + sum;
  dsumEl.textContent = "Soma do Dealer: "; //+ dsum;

  if (sum <= 20) {
    message = "Do you want another card?";
    msgEl.textContent = message;
  } else if (sum === 21) {
    message = "Bingo!";
    msgEl.textContent = message;
    hasBlackjack = true;
  } else {
    message = "Die";
    msgEl.textContent = message;
    beAlive = false;
  }
}

function newCard() {
  if (beAlive === true && hasBlackjack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cardsArray.push(newCard);
    renderGame();
  }
  if (dsum < 15) {
    let dnewCard = getRandomCard();
    dsum += dnewCard;
    dcardsArray.push(dnewCard);
    dcardsEl.textContent += " + ?";
  }
}

function solveGame() {
  dsumEl.textContent = "Soma do Dealer: " + dsum;
  dcardsEl.textContent = null

  for (let i = 0; i < dcardsArray.length; i++) {
    var dcardsList = dcardsArray[i] + " - "
  }

  dcardsEl.textContent = "Cartas do Dealer:" + dcardsList


  if (dsum > sum && dsum < 21) {
    msgEl.textContent = "VOCÊ PERDEU A RODADA";
    playerHasVictory = false;
  } else if (dsum < sum) {
    msgEl.textContent = "VOCÊ VENCEU A RODADA";
    playerHasVictory = true;
  } else if (dsum === sum) {
    msgEl.textContent = "EMPATE";
    playerHasVictory = false;
  }
}
