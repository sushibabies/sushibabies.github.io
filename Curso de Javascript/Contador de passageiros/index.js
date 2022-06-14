contadorjs = document.getElementById("contadorhtml")
 saveEl = document.getElementById("save-el")
 totalEl = document.getElementById("total-el")
 
 passengers = 0
 let totalPassengers = 0

 function adicionarPassageiro(){
     passengers += 1
     contadorjs.textContent = passengers
     }

 function salvar(){
     let passengersString = passengers + " - "
     saveEl.textContent += passengersString
     totalPassengers += passengers
     totalEl.textContent = totalPassengers
     passengers = 0
    contadorjs.textContent = 0
    
}



