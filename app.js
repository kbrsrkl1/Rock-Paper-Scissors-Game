const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => { 
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    });
});


function computerPlay() {
    const chices = ["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random() * chices.length)
    return chices [randomChoice]
}

function playRound(playerSelection, computerSelection){
    if ( playerSelection === computerSelection){
        return "It ıs a tiel!";
    }else if (
        (playerSelection === "rock" && computerSelection === "secissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
};
