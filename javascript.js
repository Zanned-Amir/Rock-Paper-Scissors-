const choice = ["rock", "paper", "scissors"];
const emoji =["🪨","🧻","✂️"];
let roundsPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let winnerName = '';

function playRound(playerSelection, computerSelection) {
  let player_win = 0;
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Paper beats Rock");
    player_win = 2;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats scissors");
    player_win = 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win ! Paper beats Rock");
    player_win = 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose! Scissors beats Paper");
    player_win = 2;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
    player_win = 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose! Rock beats Scissors");
    player_win = 2;
  } else if (playerSelection === computerSelection) {
    console.log("Equal");
  }
  return player_win;
}

function getComputerChoice() {
  const index_choice = Math.floor(Math.random() * 3);
  return [choice[index_choice], index_choice];
}

function updateScores(player_win) {
  if (player_win === 1) {
    playerWins++;
  } else if (player_win === 2) {
    computerWins++;
  }
  roundsPlayed++;
}

function checkGameStatus() {
  if (roundsPlayed >= 5 || playerWins >= 3 || computerWins >= 3) {
    if (playerWins > computerWins) {
      winnerName = "Player";
    } else if (computerWins > playerWins) {
      winnerName = "Computer";
    } else {
      winnerName = "It's a Tie";
    }
    console.log(`Game Over! Winner: ${winnerName}`);
  }
}

const btnRock = document.querySelector('#b1');
const btnPaper = document.querySelector('#b2');
const btnSaissor = document.querySelector('#b3');
const btnPlayer = document.querySelector('#player');
const btnComputer = document.querySelector('#computer');
const btnResult = document.querySelector('#result');
const roundCounter = document.getElementById('r2');

btnRock.addEventListener('click', function () {
  const res = getComputerChoice();
  const win = playRound(choice[0], res[0]);
  btnPlayer.innerHTML = emoji[0];
  btnComputer.innerHTML = emoji[res[1]];
  btnResult.innerHTML = win === 1 ? "You Win!" : win === 2 ? "You Lose!" : "Equal";
  adjustTextSizeAndCenter(btnPlayer, btnComputer, btnResult);
  updateScores(win);
  checkGameStatus();
  updateRoundCounter();
});

btnPaper.addEventListener('click', function () {
  const res = getComputerChoice();
  const win = playRound(choice[1], res[0]);
  btnPlayer.innerHTML = emoji[1];
  btnComputer.innerHTML = emoji[res[1]];
  btnResult.innerHTML = win === 1 ? "You Win!" : win === 2 ? "You Lose!" : "Equal";
  adjustTextSizeAndCenter(btnPlayer, btnComputer, btnResult);
  updateScores(win);
  checkGameStatus();
  updateRoundCounter();
});

btnSaissor.addEventListener('click', function () {
  const res = getComputerChoice();
  const win = playRound(choice[2], res[0]);
  btnPlayer.innerHTML = emoji[2];
  btnComputer.innerHTML = emoji[res[1]];
  btnResult.innerHTML = win === 1 ? "You Win!" : win === 2 ? "You Lose!" : "Equal";
  adjustTextSizeAndCenter(btnPlayer, btnComputer, btnResult);
  updateScores(win);
  checkGameStatus();
  updateRoundCounter();
});
function adjustTextSizeAndCenter(...elements) {
    elements.forEach((element) => {
        element.style.fontSize = "5rem"; 
        element.style.textAlign = "center";
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
    });
}

function updateRoundCounter() {
  roundCounter.innerHTML = `Round: ${roundsPlayed} | Player Wins: ${playerWins} | Computer Wins: ${computerWins}`;
}
//legacy code
/*
function game() {
    let win_c = 0;
    let win_p = 0;
    let result = 0;
    let p = 0;
    do {
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        switch (result) {
            case 0:
                p = p + 1;
                break;
            case 2:
                win_c = win_c + 1;
                p = p + 1;
                break;
            case 1:
                win_p = win_p + 1;
                p = p + 1;
                break;
        }
    } while (win_c < 3 && win_p < 3 && p < 6);
    if (win_c === 3) {
        console.log("Computer winner");
    } else if (win_p === 3) {
        console.log("Player winner");
    } else {
        console.log("Draw");
    }
}

game();
*/
