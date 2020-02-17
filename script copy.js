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
let myCombination = []
let playerMark = "X"

function changePlayer (){
    playerMark === "X" ? playerMark = "O" : playerMark = "X"
}

let checker = (arr, target) => target.every(v => arr.includes(v));

// winingCombinations.forEach((item) => checker(arr, item))

document.addEventListener("DOMContentLoaded", () => {

    //this one will input the x and also store the number in array
    const button = document.querySelectorAll(".box")      

    button.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.target.textContent = playerMark
            myCombination.push(parseInt(item.dataset.number))
            changePlayer()



            //--- CHECK IF I HAVE THE WINNING NUMBERS
            if (myCombination.length > 2) {
                for (let i = 0; i < winingCombinations.length; i++){
                    if (checker(myCombination, winingCombinations[i]) === true){
                        alert("You Won")
                        break
                    }}}
        

        })
    }) 
    


})

