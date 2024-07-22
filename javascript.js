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

// // console.log(computerChoice);

// // function getHumanChoice(){
// //     let humanChoice = prompt(`What's your choice?`).toLowerCase();

// //     while( !( humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors' )){
// //         humanChoice = prompt (`Please enter the valid value among 'rock' 'paper''scissors'`).toLowerCase();
// //     } 
        
// //     return humanChoice;
// // }

// // console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanSide,computerSide){
    // win situations
    if ((humanSide ==='rock'&& computerSide ==='scissors') || (humanSide ==='paper'&& computerSide ==='rock') ||(humanSide==='scissors'&& computerSide ==='paper')) {
        humanScore += 1;
        let singleResult = document.createElement('li');
        singleResult.textContent = `You win! ${humanSide} beats ${computerSide}. Your Score: ${humanScore} Computer: ${computerScore} `;
        singleResultList.appendChild(singleResult);
        return;
    }  
    // lose situations
    else if ((humanSide ==='scissors'&& computerSide ==='rock') || (humanSide ==='rock'&& computerSide ==='paper') ||(humanSide==='paper'&& computerSide ==='scissors')){
        computerScore+=1;
        let singleResult = document.createElement('li');
        singleResult.textContent = `You lose! ${computerSide} beats ${humanSide}. Your Score: ${humanScore} Computer: ${computerScore} `;
        singleResultList.appendChild(singleResult);
        return;
    }
    // tie situations 
    else { 
        let singleResult = document.createElement('li');
        singleResult.textContent =`It's a tie! ${computerSide} - ${humanSide}. Your Score: ${humanScore} Computer: ${computerScore} `;
        singleResultList.appendChild(singleResult);
        return;
    }

}


function playGame(humanSide,computerSide){
        // const humanSide = getHumanChoice();
        // const computerSide = getComputerChoice();
    if (humanScore === 5) {
        finalResult.textContent = `You win! Your Score: ${humanScore} Computer: ${computerScore} `;
    } else if (computerScore === 5) {
        finalResult.textContent = `You lose! Your Score: ${humanScore} Computer: ${computerScore} `;
    } else {
        playRound(humanSide,computerSide);
    }

    return;

}

// playGame();

let humanClick = document.querySelector('.humanClick');
let humanSide = '';
let singleResultList = document.querySelector('#singleResults');
let finalResult = document.querySelector('#finalResult')

humanClick.addEventListener('click', (event) => {
    let target = event.target;
    

    switch(target.id){
        case 'rock':
            humanSide = 'rock';
            break;

        case 'paper':
            humanSide = 'paper';
            break;

        case 'scissors':
            humanSide = 'scissors'
            break;
    
    }
    
let humanInput = document.querySelector('#humanInput');
humanInput.textContent = `You choose ${humanSide}`;

let computerSide = getComputerChoice();


playGame(humanSide,computerSide);

   
});
