let player1Score = 0
let player2Score = 0
let player1Turn = true

// create variables to store references to the necessary DOM nodes

let message = document.getElementById("message")
let player1Scoreboard = document.getElementById("player1Scoreboard")
let player1Dice  = document.getElementById("player1Dice")
let player2Scoreboard = document.getElementById("player2Scoreboard")
let player2Dice = document.getElementById("player2Dice")
let rollBtn = document.getElementById("rollBtn")
let resetBtn = document.getElementById("resetBtn")


rollBtn.addEventListener("click", function(){
    const randNumber =  Math.floor((Math.random()*6)+1)

   
        if (player1Turn){
      
            player1Dice.textContent = randNumber
            player1Score += randNumber
            player1Turn = false
            message.innerText = "player 2 Turn" 
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            player1Scoreboard.textContent = player1Score
    
           
        }
    
        else{
            
            player2Dice.textContent = randNumber
            player2Score += randNumber
            player1Turn= true
            message.innerText = "player 1 Turn"
            player2Dice.classList.remove ("active")
            player1Dice.classList.add ("active")
            player2Scoreboard.textContent = player2Score
        }

        if (player1Score >= 20){
            message.textContent = "player 1 has won"
            rollBtn.style.display = "none"
            resetBtn.style.display = "block"
    
        }
    
        else if(player2Score >= 20){
            message.textContent = "player 2 has won"
            rollBtn.style.display = "none"
            resetBtn.style.display = "block"
        }
    
})

resetBtn.addEventListener("click", function(){
   reset() 
})

function reset(){
    player1Score = 0
    player2Score = 0
    message.textContent = "player 1 Turn"
    player1Scoreboard.textContent = "0"
    player2Scoreboard.textContent = "0"
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}