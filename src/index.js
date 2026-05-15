const number = document.getElementById("number");
const guess = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");
var randomNum = Math.floor(Math.random() * 100);
var score = 100;
scoreText.innerText = score;
let array = [];
let gameEnded = false; //flag

function kamm() {
  let num = number.value;

  if (array.includes(num)) {
    result.innerText = "Already guessed !!";
    return;
  }

  if (num == "") {
    result.innerText = "Enter your guess";
    return;
  }
  array.push(num);

  if (randomNum < num) {
    result.innerText = "Too high!";
    score -= 10;
    scoreText.innerText = score;
    
  } else if (randomNum > num) {
    result.innerText = "Too low!";
    score -= 10;
    scoreText.innerText = score;
  } else {
    result.innerText = "OwOOwOOwOOwOOwO correctttt yayyyy!!!";
    guess.disabled=true;
    gameEnded = true; //flag 
  }
  number.value = "";

  if (score == 0) {
    guess.disabled = true;
    gameEnded = true;
  }
}

guess.addEventListener("click", () => {
  kamm();
});
number.addEventListener("keypress", (event) => {
  if (event.code == "Enter" && !gameEnded) { // flag
    kamm();
  }
});

restartButton.addEventListener("click", () => {
    randomNum = Math.floor(Math.random() * 100);
    guess.disabled = false;
    result.innerText = "";
    score = 100;
    scoreText.innerText = score;
    number.value = "";
    array = [];
    gameEnded = false;
    
});

