main();

function main() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {button.addEventListener('click', playGame);
});
}


function playGame(e) {
    let playerSelection = e.toElement.className.split(' ')[0];
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);
    setTimeout(playMore, 200, computerSelection, winner);
}

function playMore (winner) {
    updateScore(winner);
    if (checkScore() == 'Done') {
        resetGame();
        return;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You lose! Paper covers rock.";
        console.log(result);
        scoreSummary(result);
        return "computer"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You win! Rock breaks scissors.";
        console.log(result);
        scoreSummary(result);
        return "player"
    }   
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You win! Paper covers rock.";
        console.log(result);
        scoreSummary(result);
        return "player"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You lose! Scissors cut paper.";
        console.log(result);
        scoreSummary(result);
        return "computer"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You win! Scissors cut paper.";
        console.log(result);
        scoreSummary(result);
        return "player"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You lose! Rock breaks scissors.";
        console.log(result);
        scoreSummary(result);
        return "computer"
    }
    else {
        result = "It's a draw!";
        console.log(result);
        scoreSummary(result);
        return "draw"
    }
};

function resetGame() {
    document.querySelector('#playerScoreDisplay').textContent = "0";
    document.querySelector('#computerScoreDisplay').textContent = "0";
    document.querySelector('#displayMessage').textContent = " ";
    document.querySelector('#scoreSummary').textContent = " ";
    main();
}

function checkScore() {
    let playerScore = +document.querySelector('#playerScoreDisplay').textContent;
    let computerScore = +document.querySelector('#computerScoreDisplay').textContent;
    const displayMessage = document.querySelector('#displayMessage');
    if (playerScore == 5 && computerScore == 5) {
        displayMessage.textContent = "It's a tie!";
        return "Done";
    }
    else if (playerScore == 5) {
        displayMessage.textContent = "You've won!";
        return "Done";
    }
    else if (computerScore == 5) {
        displayMessage.textContent = "You've lost to the computer";
        return "Done";
    }
}

function updateScore(winner) {
    if (winner == "draw") {
        const playerScore = document.getElementById('playerScoreDisplay');
        let tempPlayerScore = +playerScore.textContent;
        playerScore.textContent= ++tempPlayerScore;
        const computerScore = document.getElementById('computerScoreDisplay');
        let tempComputerScore = +computerScore.textContent;
        computerScore.textContent = ++tempComputerScore;
        return;
    }
    else if (winner = "player") {
        const playerScore = document.getElementById('playerScoreDisplay');
        let tempPlayerScore = +playerScore.textContent;
        playerScore.textContent = ++tempPlayerScore;
        return;
    }
    else {
        const computerScore = document.getElementById('computerScoreDisplay');
        let tempComputerScore = +computerScore.textContent;
        computerScore.textContent = ++tempComputerScore;
        return;
    }
}

function computerPlay() {   
    const possibleSelections = ['rock', 'paper', 'scissors']; 
    let randomIndex = Math.floor(Math.random() * 3); 
    return possibleSelections[randomIndex]; 
}

function scoreSummary(result) {
    const scoreSummary = document.querySelector('#scoreSummary');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = result;
    scoreSummary.appendChild(content);
};


