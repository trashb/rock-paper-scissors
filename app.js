//selections are ints that correspond to the indexes in options
const options = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;

function computerPlay() {
    choice = Math.floor(Math.random() * 3)
    return choice;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection - 1 === computerSelection || playerSelection === 0 && computerSelection === 2) {
        playerScore += 1;
        return `You win! ${options[playerSelection]} beats ${options[computerSelection]}!`
    } else if (computerSelection - 1 === playerSelection || computerSelection === 0 && playerSelection === 2) {
        computerScore += 1;
        return `You lose! ${options[computerSelection]} beats ${options[playerSelection]}!`
    } else {
        return `Draw! Both chose ${options[playerSelection]}!`
    };
};

function game() {
    var validInputs = 0;
    while (validInputs < 5) {
        var playerChoice = prompt("Pick your weapon!"); //returns string
        playerChoice = playerChoice.toLowerCase();
        if (options.includes(playerChoice)) {       //check if input is valid
            playerChoice = options.indexOf(playerChoice.toLowerCase()); //get 0, 1, or 2
            console.log(playRound(playerChoice, computerPlay()));
            validInputs++;
        } else {
            console.log("Invalid input!")
        };
    };
    if (playerScore > computerScore) {
        console.log("You Win!")
    } else if (playerScore < computerScore) {
        console.log("You Lose!")
    } else {
        console.log("It's a Draw!")
    };
};

game();
