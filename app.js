const buttons = document.querySelectorAll('button');



buttons.forEach(button => {
    button.addEventListener('click', () => { 
    const result = playRound(button.id, computerPlay());
    console.log(result);
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
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
};
