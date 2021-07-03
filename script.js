function computerPlay() {

    function getRandom(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length); 
        const choice = arr[randomIndex];
        return choice;

    }
    const array = ["rock", "paper", "scissors"];

    const computerChoice = getRandom(array);
    return computerChoice;
}

function setplayerSelection(selection) {
    playerSelection = selection;
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You lose! Paper covers rock.";
        console.log(result);
        scoreSummary(result);
        return "computer";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You win! Rock breaks scissors.";
        console.log(result);
        scoreSummary(result);
        return "player";
    }   
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You win! Paper covers rock.";
        console.log(result);
        scoreSummary(result);
        return "player";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You lose! Scissors cut paper.";
        console.log(result);
        scoreSummary(result);
        return "computer";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You win! Scissors cut paper.";
        console.log(result);
        scoreSummary(result);
        return "player";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You lose! Rock breaks scissors.";
        console.log(result);
        scoreSummary(result);
        return "computer";
    }
    else {
        result = "It's a draw!";
        console.log(result);
        scoreSummary(result);
    }
}


let computerSelection = computerPlay();

function buttonGame() {
    let playerScore = 0;
    let computerScore = 0;

    let winner = playRound(playerSelection, computerSelection) 
    if (winner == "player") {
        playerScore++;
    } else {
    computerScore++;
    }   
    
    console.log("Player Score: " + playerScore);
    console.log("Computer Score " + computerScore);


    playerScoreDisplay(playerScore)
    
    computerScoreDisplay(computerScore)

    computerSelection = computerPlay ()
}

function scoreSummary(result) {
    const scoreSummary = document.querySelector('#scoreSummary');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = result;
    scoreSummary.appendChild(content);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', buttonGame);
});

function playerScoreDisplay(playerScore) {
    const playerScoreBoard = document.querySelector('#playerScoreBoard');
    const score = document.createElement('div');
    score.classList.add('score');
    score.textContent = playerScore;
    playerScoreBoard.appendChild(score);

}

function computerScoreDisplay(computerScore) {
    const computerScoreBoard = document.querySelector('#computerScoreBoard');
    const score = document.createElement('div');
    score.classList.add('score');
    score.textContent = computerScore;
    computerScoreBoard.appendChild(score);

}