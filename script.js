checkOS();
main();


function checkOS() {
    if (navigator.appVersion.indexOf('Win') != -1) {
        const mainContainer = document.getElementById('main-container')
        mainContainer.style.transform = 'scale(0.63)';
        mainContainer.style.transformOrigin = 'center 0';
    }
}

function main() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {button.addEventListener('click', playGame);
    const scores = document.querySelectorAll('div#score > p');
    scores.forEach((score) => {score.addEventListener('transitionend', removeTransition)});
});
}

function hideComputerIcon() {
    document.getElementById('computerPlayIcon').style.visibility = 'hidden';
}

function playGame(e) {
    let playerSelection = e.toElement.className.split(' ')[0];
    let computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);
    displayUserPlay(playerSelection);
    disableButtons();
    hideComputerIcon();
    setTimeout(playMore, 1000, computerSelection, winner, result);
}

function playMore(computerSelection, winner, result) {
    displayOtherIcons(computerSelection, winner);
    updateScore(winner, result);
    animateScore(winner, result);
    enableButtons();
    if (checkScore() == 'Done') {
        endGame();
        return;
    }
}

function removeTransition(e) {
    e.target.classList.value = '';
}

function animateScore(winner) {
    const userTally = document.getElementById('playerScoreDisplay');
    const computerTally = document.getElementById('computerScoreDisplay');
    if (winner == 'draw') {
        userTally.classList.add('tally-animation');
        computerTally.classList.add('tally-animation');
        return;
    }
    else if (winner == 'player') {
        userTally.classList.add('tally-animation');
        return;
    }
    else {
        computerTally.classList.add('tally-animation');
        return;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "Paper covers rock.";
        console.log(result);
        //scoreSummary(result);
        return "computer"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "Rock breaks scissors.";
        console.log(result);
        //scoreSummary(result);
        return "player"
    }   
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "Paper covers rock.";
        console.log(result);
        //scoreSummary(result);
        return "player"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "Scissors cuts paper.";
        console.log(result);
        //scoreSummary(result);
        return "computer"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "Scissors cuts paper.";
        console.log(result);
        //scoreSummary(result);
        return "player"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "Rock breaks scissors.";
        console.log(result);
        //scoreSummary(result);
        return "computer"
    }
    else {
        console.log(result);
        result = "An even match.";
        return "draw"
    }
}

function disableButtons() {
    const btns = document.querySelectorAll('div#buttons > button');
    btns.forEach((btn) => {btn.disabled = true});
}

function enableButtons() {
    const btns = document.querySelectorAll('div#buttons > button');
    btns.forEach((btn) => {btn.disabled = false});
    
}

function displayUserPlay(userSelection) {
    const userIcon = document.querySelector('.userPlayIcon');
    resetTransition(userIcon);
    switch (userSelection) {
        case 'rock':
            userIcon.setAttribute('src', 'imgs/rock.png');
            break;
        case 'paper':
            userIcon.setAttribute('src', 'imgs/paper.png');
            break;
        case 'scissors':
            userIcon.setAttribute('src', 'imgs/scissors.png');
            break;
    }
    userIcon.classList.remove('remove-transition');
    userIcon.style.visibility = 'visible';
    userIcon.classList.add('emerging-element');

}

function displayOtherIcons(computerSelection) {
    const computerIcon = document.getElementById('computerPlayIcon');
    switch (computerSelection) {
        case 'rock':
            computerIcon.setAttribute('src', 'imgs/rockReverse.png');
            break;
        case 'paper':
            computerIcon.setAttribute('src', 'imgs/paperReverse.png');
            break;
        case 'scissors':
            computerIcon.setAttribute('src', 'imgs/scissorsReverse.png');
            break;
    }
    computerIcon.style.visibility = 'visible';
}

function endGame() {
    let btns = document.querySelectorAll('div#buttons > button');
    btns.forEach((btn) => {btn.removeEventListener('click', playGame)});
    const restart = document.getElementById('restart');
    restart.textContent = 'Restart?';
    restart.style.visibility = 'visible';
}
/*     restart.addEventListener('click', resetGame);
} */

/* function resetGame() {
    document.getElementById('playerScoreDisplay').textContent = "0";
    document.getElementById('computerScoreDisplay').textContent = "0";
    document.getElementById('displayMessage').textContent = " ";
    document.getElementById('scoreSummary').textContent = " ";
    const restart = document.getElementById('restart');
    restart.textContent = '';
    restart.style.visibility = 'hidden';
    restart.removeEventListener('click', resetGame);
    const userIcon = document.querySelector('.userPlayIcon')
    resetTransition(userIcon);
    userIcon.style.visibility = 'hidden';
    document.getElementById('computerPlayIcon').style.visibility = 'hidden';
    main();
} */

function checkScore() {
    let playerScore = +document.getElementById('playerScoreDisplay').textContent;
    let computerScore = +document.getElementById('computerScoreDisplay').textContent;
    const displayMessage = document.getElementById('displayMessage');
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

function updateScore(winner, result) {
    if (winner == "draw") {
        const playerScore = document.getElementById('playerScoreDisplay');
        let tempPlayerScore = +playerScore.textContent;
        playerScore.textContent= ++tempPlayerScore;
        const computerScore = document.getElementById('computerScoreDisplay');
        let tempComputerScore = +computerScore.textContent;
        computerScore.textContent = ++tempComputerScore;
        displayMessage.textContent = "It's a draw!";
        scoreSummary.textContent = result;
        return;
    }
    else if (winner == "player") {
        const playerScore = document.getElementById('playerScoreDisplay');
        let tempPlayerScore = +playerScore.textContent;
        playerScore.textContent = ++tempPlayerScore;
        displayMessage.textContent = "It's a win!";
        scoreSummary.textContent = result;
        return;
    }
    else {
        const computerScore = document.getElementById('computerScoreDisplay');
        let tempComputerScore = +computerScore.textContent;
        computerScore.textContent = ++tempComputerScore;
        displayMessage.textContent = "It's a loss!";
        scoreSummary.textContent = result;
        return;
    }
}

function computerPlay() {   
    const possibleSelections = ['rock', 'paper', 'scissors']; 
    let randomIndex = Math.floor(Math.random() * 3); 
    return possibleSelections[randomIndex]; 
}

/* function scoreSummary(result) {
    const scoreSummary = document.querySelector('#scoreSummary');
    const content = document.createElement('div');
    content.classList.add('content');
    scoreSummary.textContent = result;
}; */

function resetTransition(element) {
    element.classList.add('remove-transition');
    element.classList.remove('emerging-element');
    // Triggers reflow
    element.offsetTop;
}

