let seconds=0;
let minutes=0;
let hours=0; 
var highScoreHard = localStorage.getItem('highScoreHard');
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
function scorePoints(){
    u=u+1;
}

function highestScoreHard(){
  if(highScoreHard !== null){
    if(u<highScoreHard){
      localStorage.setItem('highScoreHard', u);
    }
  }
  else{
    localStorage.setItem('highScoreHard', u);
  }
  highScoreHardDisplay = localStorage.getItem('highScoreHard');
}
function answerFinding(){
    const solutionArray = document.querySelectorAll(".acell");
    const questionArray = document.querySelectorAll(".cell");
    if(solutionArray && questionArray && solutionArray[7].style.backgroundColor === questionArray[0].style.backgroundColor && solutionArray[8].style.backgroundColor === questionArray[1].style.backgroundColor && solutionArray[9].style.backgroundColor === questionArray[2].style.backgroundColor && solutionArray[10].style.backgroundColor === questionArray[3].style.backgroundColor && solutionArray[13].style.backgroundColor === questionArray[4].style.backgroundColor && solutionArray[14].style.backgroundColor === questionArray[5].style.backgroundColor && solutionArray[15].style.backgroundColor === questionArray[6].style.backgroundColor && solutionArray[16].style.backgroundColor === questionArray[7].style.backgroundColor && solutionArray[19].style.backgroundColor === questionArray[8].style.backgroundColor && solutionArray[20].style.backgroundColor === questionArray[9].style.backgroundColor && solutionArray[21].style.backgroundColor === questionArray[10].style.backgroundColor && solutionArray[22].style.backgroundColor === questionArray[11].style.backgroundColor && solutionArray[25].style.backgroundColor === questionArray[12].style.backgroundColor && solutionArray[26].style.backgroundColor === questionArray[13].style.backgroundColor && solutionArray[27].style.backgroundColor === questionArray[14].style.backgroundColor && solutionArray[28].style.backgroundColor === questionArray[15].style.backgroundColor){
        highestScoreHard();
        document.getElementById("song").play()
        swal("You win! you have used "+u+" moves and you have used "+hours+":"+minutes+":"+seconds+" Lowest moves used: "+ highScoreHardDisplay);
        window.clearInterval(timerStop);
        
    }
         
}