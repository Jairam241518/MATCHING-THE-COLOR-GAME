let seconds=0;
let minutes=0;
let hours=0; 
function startTimer(){
  seconds++;

  if(seconds/60===1){
    seconds=0;
    minutes++;

    if(minutes/60===1){
      minutes=0;
      hours++;
    }
  }

  document.getElementById('clock').innerHTML=hours+':'+minutes+':'+seconds;
}
let timerStop = window.setInterval(startTimer,1000);
let u=0;
var storageArray = [];
function scorePoints(){
    u=u+1;
}
function answerFinding(){
    const solutionArray = document.querySelectorAll(".acell");
    const questionArray = document.querySelectorAll(".cell");
    if(solutionArray && questionArray && solutionArray[6].style.backgroundColor === questionArray[0].style.backgroundColor && solutionArray[7].style.backgroundColor === questionArray[1].style.backgroundColor && solutionArray[8].style.backgroundColor === questionArray[2].style.backgroundColor && solutionArray[11].style.backgroundColor === questionArray[3].style.backgroundColor && solutionArray[12].style.backgroundColor === questionArray[4].style.backgroundColor && solutionArray[13].style.backgroundColor === questionArray[5].style.backgroundColor && solutionArray[16].style.backgroundColor === questionArray[6].style.backgroundColor && solutionArray[17].style.backgroundColor === questionArray[7].style.backgroundColor && solutionArray[18].style.backgroundColor === questionArray[8].style.backgroundColor){
        document.getElementById("song").play()
        swal("You win! you have used "+u+" moves and you have used "+hours+":"+minutes+":"+seconds);
        window.clearInterval(timerStop);   
    }             
}
var leastClicks;
function highScore(){
  if(solutionArray && questionArray && solutionArray[6].style.backgroundColor === questionArray[0].style.backgroundColor && solutionArray[7].style.backgroundColor === questionArray[1].style.backgroundColor && solutionArray[8].style.backgroundColor === questionArray[2].style.backgroundColor && solutionArray[11].style.backgroundColor === questionArray[3].style.backgroundColor && solutionArray[12].style.backgroundColor === questionArray[4].style.backgroundColor && solutionArray[13].style.backgroundColor === questionArray[5].style.backgroundColor && solutionArray[16].style.backgroundColor === questionArray[6].style.backgroundColor && solutionArray[17].style.backgroundColor === questionArray[7].style.backgroundColor && solutionArray[18].style.backgroundColor === questionArray[8].style.backgroundColor){
    if(u<=localStorage.getItem("bestClicks")){
      localStorage.setItem("bestClicks", u);
    }
    leastClicks = localStorage.getItem("bestClicks");
    document.getElementById('highScore').innerHTML="Least Clicks"+leastClicks;
  }
 }

