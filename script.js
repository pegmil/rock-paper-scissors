// Global game tracking -- this replaces playGame()
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// DOM Elements for updating the screen
const resultText = document.getElementById("round-result");
const scoreText = document.getElementById("score-board");
const buttons = document.querySelectorAll(".choice-btn");

// Connect buttons to the playRound function
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const playerSelection = button.value;
            playRound(playerSelection);
        });
    });
    
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

function playRound(humanChoice) {
    // 1-Rock, 2-Paper, or 3-Scissors
    // Rock beats scissors (1 > 3)
    // scissors beat paper (3 > 2)
    // paper beats rock (2 > 1)
    // tie (both are the same)

    const computerChoice = getComputerChoice();

    console.log("HumanChoice: " + humanChoice);
    console.log("ComputerChoice: " + computerChoice);


    if (humanChoice === computerChoice) {
        resultText.innerText = `Tie! Both chose ${humanChoice}.`;
        // return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")

    ) {
        playerScore++;
        resultText.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultText.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    updateScoreBoard();
}

    // Helper function to update the text on the web page
    function updateScoreBoard() {
        scoreText.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;

        if (playerScore === 5) {
            resultText.innerText = "Game Over! You won the tournament!";
            disableButtons();
        } else if (computerScore === 5) {
            resultText.innerText = "Game Over! The computer won.";
        } 
    }

    function disableButtons() {
        buttons.forEach(button => button.disabled = true);
    }

    
