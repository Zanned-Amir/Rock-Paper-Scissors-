function playRound(playerSelection, computerSelection) {
    // 0 for null  , 1 for player , 2 for computer
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
        console.log("You Lose! scissors beats paper");
        player_win = 2;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! scissors beats paper");
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
    const choice = ["rock", "paper", "scissors"];
    const index_choice = Math.floor(Math.random() * 3);
    return choice[index_choice];
}

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
