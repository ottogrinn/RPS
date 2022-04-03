

// gives random value and assigns it to variable computer
function computerPlay() {
    let computer = Math.floor(Math.random() * 3);
    if(computer === 0) {
        return computer = 'r';
    } else if (computer === 1) {
        return computer = 'p';
    } return computer = 's';
}

// player selection
let buttons = document.querySelector('.player');

buttons.addEventListener('click', playerPlay, false);

function playerPlay(e) {
    console.log(e.target.id);
    return playRound( e.target.id,computerPlay());
}


// Game
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection ){
    if (playerScore === 5 ) {
       return console.log(`PLAYER WIN!!!`);
    }
    else if(computerScore === 5){
       return console.log(`COMPUTER WIN!!!`);
    }

    else if(computerSelection > playerSelection) {
        console.log(computerScore++);
        return console.log(`COMPUTER ${computerScore} ${computerSelection} beats ${playerSelection}`);
    } 
    else if (computerSelection < playerSelection) {
        console.log(playerScore++);
        return console.log(` PLAYER ${playerScore} ${playerSelection} beats ${computerSelection}`);
    } else {
        return console.log(`${playerSelection} and ${computerSelection} it is a draw!!!`);
    }
    
}



