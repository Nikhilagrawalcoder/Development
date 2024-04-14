'use strict';
let secretNumber=Math.floor(Math.random()*20)+1;
let highScore=0;
let score=200;
document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='No Number!';
    }
   else if(guess===secretNumber){
    document.querySelector('.message').textContent="Correct Number"
    document.querySelector('body').style.backgroundColor="#60b347";
    document.querySelector('.number').style.width="30rem"
document.querySelector('.number').textContent=secretNumber;
if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
   }
   else if(guess>secretNumber){
    if(score>0){
        document.querySelector('.message').textContent="Too High";
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(score==0){
        document.querySelector('.message').textContent="You Lost the game"
    }
   
    
   }
   else if(guess<secretNumber){
    if(score>0){
        document.querySelector('.message').textContent="Too Low";
    score--;
    document.querySelector('.score').textContent=score;
    }
    else if(score==0){
        document.querySelector('.message').textContent="You Lost the game"
    }
   
   }
    
    
})

document.querySelector('.again').addEventListener('click',function(){
    score=200;
    secretNumber=Math.floor(Math.random()*200)+1;
    document.querySelector('.message').textContent="Start guessing.. ";
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').style.width="15rem"
// document.querySelector('.number').textContent=secretNumber;
highScore=0;
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent="?";
document.querySelector('.guess').value='';


})
// document.querySelector('.highscore').textContent=highScore;
// console.log(highScore);