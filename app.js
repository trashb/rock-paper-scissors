//variables
const options = ["rock", "paper", "scissors"];  //selections are ints that correspond to the indexes in options
const res = document.querySelector("#results");
const score = document.querySelector("#score");

var playerScore = 0;
var computerScore = 0;

//functions
function computerPlay() {   //computer choice
    choice = Math.floor(Math.random() * 3)
    return choice;
};

function playRound(playerSelection, computerSelection) {    //check matchup
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

function getResult() {
    console.log(playerScore)
    if (playerScore === 5) {
        res.textContent = "You Win!";
        playerScore = 0;
    } else if (computerScore === 5) {
        res.textContent = "You Lose!";
        playerScore = 0;
    };
};

function game(playerChoice) {
    res.textContent = (playRound(playerChoice, computerPlay()));
    score.textContent = (`Your Score: ${playerScore} - Computer Score: ${computerScore}`)
    getResult()
};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(parseInt(button.id))
  });
});
