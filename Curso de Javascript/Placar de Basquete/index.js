let contadorHome = document.getElementById("contador-home")
let contadorGuest = document.getElementById("contador-guest")
let pointsHome = 0
let pointsGuest = 0

function addOne(){
    pointsHome += 1
    contadorHome.textContent = pointsHome
    console.log(contadorHome)
}

function addTwo(){
    pointsHome += 2
    contadorHome.textContent = pointsHome
    console.log(contadorHome)
}

function addThree(){
    pointsHome += 3
    contadorHome.textContent = pointsHome
    console.log(contadorHome)
}

function addOneg(){
    pointsGuest += 1
    contadorGuest.textContent = pointsGuest
    console.log(contadorHome)
}

function addTwog(){
    pointsGuest += 2
    contadorGuest.textContent = pointsGuest
    console.log(contadorHome)
}

function addThreeg(){
    pointsGuest += 3
    contadorGuest.textContent = pointsGuest
    console.log(contadorHome)
}

function newGame(){
    pointsGuest = 0
    pointsHome = 0
    contadorGuest.textContent = pointsGuest
    contadorHome.textContent = pointsHome
}

