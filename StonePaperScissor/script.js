let images = document.querySelectorAll('img');
let result = document.querySelector('#result');
let resultBox = document.querySelector('.result')
let userRecord = document.querySelector('#user-score')
let compRecord = document.querySelector('#comp-score')
let resetBtn= document.querySelector('#reset');

var userScore = 0;
var compScore = 0;

const generateCompChoice = ()=>{
    const options = ["stone","paper","scissor"];
    return options[Math.floor(Math.random()*3)];
}


const gameDraw = (compChoice)=>{
    result.innerText = `Game was Draw! Computer also pick ${compChoice}`;
    resultBox.style.backgroundColor = "#dadada";
}

const updateScore=(userScore,compScore)=>{
    userRecord.innerText = userScore;
    compRecord.innerText = compScore;
    if(userScore>=compScore){
        userRecord.style.color = "green";
        compRecord.style.color = "red";
    }else{
        userRecord.style.color = "red";
        compRecord.style.color = "green";
    }
}

const showWinner = (userChoice,compChoice,userWin)=>{
    if(userWin){
        userScore++;
        result.innerText = `You won, Your ${userChoice} beats ${compChoice}`;
        resultBox.style.backgroundColor = "green";
    }else{
        compScore++;
        result.innerText = `You loss, Computer ${compChoice} beats your ${userChoice}`;
        resultBox.style.backgroundColor = "red";
    }
    updateScore(userScore,compScore);
}

const startGame = (userChoice) =>{
    let compChoice = generateCompChoice();

    if(userChoice === compChoice){
        gameDraw(compChoice);
    }else{
        let userWin = true;
        if(userChoice == "stone"){
            //paper, scissor
            userWin = compChoice == "paper" ? false : true;
        }else if(userChoice == "paper"){
            //stone, scissor
            userWin = compChoice == "scissor" ? false : true;

        }else{
            //stone, paper
            userWin = compChoice == "paper" ? true : false;
        }
        showWinner(userChoice,compChoice,userWin);
    }

}

resetBtn.addEventListener("click",()=>{
    location.reload();
})


images.forEach((image)=>{
    image.addEventListener('click',()=>{
        var userChoice = image.getAttribute('id');
        startGame(userChoice);
    })
})