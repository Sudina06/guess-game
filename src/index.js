const number = document.getElementById("number");
const guess = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");
var randomNum = Math.floor(Math.random() * 100);
var score = 100;
scoreText.innerText = 100;
var array=[];

function kaammm(){
    let num = number.value;
    if(array.includes(num)){
        
        result.innerText="Already guessed";
        return;

    }
    array.push(num);

  
  if(num == ""){
    result.innerText="Pleasee provide a valueeeee";
    return;
  }
  

  if (num < randomNum) {
    result.innerText = "Too low!";
    score-=10;
    scoreText.innerText=score;
  } else if (num > randomNum) {
    result.innerText = "Too high!";
    score-=10;
    scoreText.innerText=score;
  } else {
    result.innerText = `🎉OwO(￣y▽￣)╭ Ohohoho..... Correct!The number was ${randomNum}`;
  }
  if(score==0){
    result.innerText = "Game Lostt!!"
    guess.disabled=true;
  }
  number.value = "";
  


}
function restart(){
    result.innerText = "";
    score = 100;
    scoreText.innerText=score;
    guess.disabled = false;

    randomNum = Math.floor(Math.random() * 100);
    array = [];

}
guess.addEventListener("click", () => {
    kaammm();
  
});

number.addEventListener("keypress", (event)=>{
    if (event.code == "Enter" && score!=0 ){
        kaammm();
    }

});
restartButton.addEventListener("click" , () =>{
    restart();
});


