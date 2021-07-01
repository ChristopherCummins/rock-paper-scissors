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

function userPlay() {
    let playerChoice = prompt("Choose rock, paper, or scissors. Type your choice here:");
    return playerChoice.toLowerCase();
}


function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You lose! Paper covers rock.";
        console.log(result);
        return "computer";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You win! Rock breaks scissors.";
        console.log(result);
        return "player";
    }   
    else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You win! Paper covers rock.";
        console.log(result);
        return "player";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You lose! Scissors cut paper.";
        console.log(result);
        return "computer";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You win! Scissors cut paper.";
        console.log(result);
        return "player";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You lose! Rock breaks scissors.";
        console.log(result);
        return "computer";
    }
    else {
        result = "It's a draw!";
        console.log(result);
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = userPlay();
        let winner = playRound(playerSelection, computerSelection) 
        if (winner == "player") {
            playerScore++;
        } else {
        computerScore++;
        }   
    }
    console.log("Player Score: " + playerScore);
    console.log("Computer Score " + computerScore);
    
}

const computerSelection = computerPlay();


game();


