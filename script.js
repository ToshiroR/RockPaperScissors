






// function that returns rock paper scissors!

function computerPlay() {
   let play = Math.floor(Math.random() * 3)
 if (play === 1){
    return "rock";
} else if (play === 2) {
    return "paper";
} else {
    return "scissors";
}
};


const computer = computerPlay();
const player = "rock"; 

console.log(computer)
console.log(player)

// function that takes the player and computers input, compares the 2 and determines the winner


//function playRound(player, computer)

function playRound(player, computer) {
    if (player === computer) {
        console.log("Tie!")
    } else if (player === "rock" && computer === "scissors") {
        console.log("wow")
    }
}


playRound(player, computer)