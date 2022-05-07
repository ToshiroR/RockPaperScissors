







const computer = computerPlay();

// asks the player what it wants to do and runs the playRound() function

const playerSelection = prompt("Choose your weapon!");
const player = playerSelection.toLowerCase();
if (player == "rock" || "paper" || "scissors") {
    alert(playRound(player, computer));
} 
// function that returns rock paper scissors!

function computerPlay() {
    const play = Math.floor(Math.random() * 3)
  if (play === 1){
     return "rock";
 } else if (play === 2) {
     return "paper";
 } else {
     return "scissors";
 }
 };



// function that takes the player and computers input, compares the 2 and determines the winner




function playRound(player, computer) {
    if (player === computer) {
        return "Tie!"
    } else if (player === "rock" && computer === "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (player === "rock" && computer === "paper") {
        return "You Lose! Paper beats Rock!";
    } else if (player === "paper" && computer === "rock") {
        return "You Win! Paper beats Rock!";
    } else if (player === "paper" && computer === "scissors") {
        return "You Lose! Scissors beats Paper!";
    } else if (player === "scissors" && computer === "rock") {
        return "You Lose! Rock beats Scissors!";
    } else if (player === "scissors" && computer === "paper") {
        return "You win! Scissors beats Paper!";
    } else { return "You have put in the wrong input." };
}


playRound(player, computer)

    function game(x) {
        for (let i = 1; i < x; i++) {
            console.log(i + " Round " + playRound(player, computer));
        }
    }

   game(4)