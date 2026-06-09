

// get choice from computer
function getComputerChoice() {
    // 1 = rock
    // 2 = paper
    // 3 = scissors

    let computerChoiceNum = Math.floor(Math.random() * 3) + 1;
    switch (computerChoiceNum) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper"
            break;
        default:
            return "scissors"
    }

}

function getHumanChoice() {
    const prompt = require('prompt-sync')();

    let choice = prompt("Pick a Choice: Rock, Paper, or Scissors: ");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    // 1-Rock, 2-Paper, or 3-Scissors
    // Rock beats scissors (1 > 3)
    // scissors beat paper (3 > 2)
    // paper beats rock (2 > 1)
    // tie (both are the same)

    console.log("HumanChoice: " + humanChoice);
    console.log("ComputerChoice: " + computerChoice);

    if (humanChoice === computerChoice) {
         return "tie";
     } else {
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                 return "human";
            } else {
                 return "computer";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                return "human";
            } else {
                return "computer";
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                return "human";
            } else {
                return "computer";
            }
        }
    }
}

function whoWonMessage(humanChoice, computerChoice, winner) {
    if (winner === "human") {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
    } else if (winner === "computer") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else {
        console.log("It's a Tie!");
    }

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    let winner = "human";
    let humanChoice = "";
    let computerChoice = "";

    console.log("Welcome to Rock-Paper-Scissors");

    for (let i = 0; i < 5; i++) {

        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        winner = playRound(humanChoice, computerChoice);
        if (winner === "human") {
            humanScore += 1;
        } else if (winner === "computer") {
            computerScore += 1;
        } else {
            tieScore += 1;
        }
        whoWonMessage(humanChoice, computerChoice, winner);
    }

    // Determine final score
    if (humanScore > computerScore) {
        winner = "human";
    } else if (humanScore < computerScore) {
        winner = "computer";
    } else {
        winner = "It's a Tie!";
    }
    console.log("And the winner is: " + winner);
    console.log("The Final score is: Human: " + humanScore + " Computer: " + computerScore + " Ties: " + tieScore);
}

playGame();