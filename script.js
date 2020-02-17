winingCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
let player1 = []
let player2 = []
let player1Name = ""
let player2Name = ""
let myCombination = player1
let playerMark = "X"

//will change the mark and also the array where it will be stored
function changePlayer (){
    playerMark === "X" ? (playerMark = "O", myCombination = player2) : (playerMark = "X", myCombination = player1)
}

function displayResult(myCombination){
    myCombination === player1 ? alert("Player 1 Won") : alert("Player 2 Won")
}

//--- CHECK IF I HAVE THE WINNING NUMBERS
function checkWinner (){
    if (myCombination.length > 4){
        alert("It's a tie")
    }else if (myCombination.length > 2) {
        for (let i = 0; i < winingCombinations.length; i++){
            if (checker(myCombination, winingCombinations[i]) === true){
                // alert("You Won")
                displayResult(myCombination)
                break
            }}}
}

let checker = (arr, target) => target.every(v => arr.includes(v));

document.addEventListener("DOMContentLoaded", () => {

    //this one will input the x and also store the number in array
    const button = document.querySelectorAll(".box")   
    button.forEach((item) => {
        item.addEventListener("click", (event) => {
            if (event.target.textContent !== "O" && event.target.textContent !== "X"){
                event.target.textContent = playerMark
                myCombination.push(parseInt(item.dataset.number))
                checkWinner()       
                changePlayer()    
            }
            

        })
    }) 
})

