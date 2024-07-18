console.log("Hello World");

function getComputerChoice(){
    let getRandomNum = Math.floor(Math.random()*3);
    let computerChoice = '';
    if (getRandomNum === 0){
        computerChoice = 'rock';
    } else if (getRandomNum === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

// console.log(computerChoice);

function getHumanChoice(){
    let humanChoice = prompt(`What's your choice?`).toLowerCase();

    while( !( humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors' )){
        humanChoice = prompt (`Please enter the valid value among 'rock' 'paper''scissors'`).toLowerCase();
    } 
        
    return humanChoice;
}

// console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanSide,computerSide){
    // win situations
    if ((humanSide ==='rock'&& computerSide ==='scissors') || (humanSide ==='paper'&& computerSide ==='rock') ||(humanSide==='scissors'&& computerSide ==='paper')) {
        humanScore += 1;
        console.log (`You win! ${humanSide} beats ${computerSide}. Your Score: ${humanScore} Computer: ${computerScore} `)
        return;
    }  
    // lose situations
    else if ((humanSide ==='scissors'&& computerSide ==='rock') || (humanSide ==='rock'&& computerSide ==='paper') ||(humanSide==='paper'&& computerSide ==='scissors')){
        computerScore+=1;
        console.log(`You lose! ${computerSide} beats ${humanSide}. Your Score: ${humanScore} Computer: ${computerScore} `);
        return;
    }
    // tie situations 
    else { 
        console.log(`It's a tie! ${computerSide} - ${humanSide}. Your Score: ${humanScore} Computer: ${computerScore} `)
        return;
    }

}


function playGame(){
    for(i=0; i<5 ; i++){
        const humanSide = getHumanChoice();
        const computerSide = getComputerChoice();
        playRound(humanSide,computerSide);
    }

    if (humanScore > computerScore) {
        console.log(`You win! Your Score: ${humanScore} Computer: ${computerScore} `);
    } else if (humanScore < computerScore) {
        console.log(`You lose! Your Score: ${humanScore} Computer: ${computerScore} `)
    } else {
        console.log(`It's a tie! Your Score: ${humanScore} Computer: ${computerScore} `)
    }

    return;

}

playGame()