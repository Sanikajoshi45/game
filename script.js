let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");




const genCompchoice = () =>{
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock paper scissor
};

const drawGame = () => {
    msg.innerText = "game was draw. play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, Compchoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${Compchoice}`;
        msg.style.backgroundColor = "#00ff00";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! ${Compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#ff0000";
    }

}

const playGame = (userChoice) => {
    const Compchoice = genCompchoice();
    console.log("comp choice = ", Compchoice);

    if (userChoice === Compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rockc") {
          userWin =  Compchoice === "paper" ? false: true;
        } else if (userChoice === "paper") {
           userWin = Compchoice === "scissors" ? false: true;
        } else{
           userWin = Compchoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, Compchoice);

        }
    };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userChoice  = choice.getAttribute("id"); 
       playGame(userChoice);
    });
});