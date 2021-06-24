let seconds=0;
let minutes=0;
let hours=0; 
var highScoreEasy = localStorage.getItem('highScoreEasy');
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

function highestScoreEasy(){
  if(highScoreEasy !== null){
    if(u<parseInt(highScoreEasy)){
      localStorage.setItem('highScoreEasy', u);
    }
  }
  else{
    localStorage.setItem('highScoreEasy', u);
  }
  highScoreEasyDisplay = localStorage.getItem('highScoreEasy');
}


function answerFinding(){
    const solutionArray = document.querySelectorAll(".acell");
    const questionArray = document.querySelectorAll(".cell");
    if(solutionArray && questionArray && solutionArray[6].style.backgroundColor === questionArray[0].style.backgroundColor && solutionArray[7].style.backgroundColor === questionArray[1].style.backgroundColor && solutionArray[8].style.backgroundColor === questionArray[2].style.backgroundColor && solutionArray[11].style.backgroundColor === questionArray[3].style.backgroundColor && solutionArray[12].style.backgroundColor === questionArray[4].style.backgroundColor && solutionArray[13].style.backgroundColor === questionArray[5].style.backgroundColor && solutionArray[16].style.backgroundColor === questionArray[6].style.backgroundColor && solutionArray[17].style.backgroundColor === questionArray[7].style.backgroundColor && solutionArray[18].style.backgroundColor === questionArray[8].style.backgroundColor){
        highestScoreEasy();
        document.getElementById("song").play()
        swal("You win! you have used "+u+" moves and you have used "+hours+":"+minutes+":"+seconds+ " Lowest moves used :" + highScoreEasyDisplay);
        window.clearInterval(timerStop);   
    }             
}


