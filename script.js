






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
const playerSelection = "rock"; 
let player = playerSelection.toLocaleLowerCase();



//console.log(playRound(player, computer));

// function that takes the player and computers input, compares the 2 and determines the winner


//function playRound(player, computer)

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


let game = 5;

    for (let i = 1; i < game; i++) {
        alert(playRound(player, computer));
    }

    