function movementMechanism(clickedId){
    const leftval = +clickedId - 1;
    const rightval = +clickedId + 1;
    const topval = +clickedId - 5;
    const bottomval = +clickedId + 5;
    
    let check_times = new Array(leftval, rightval, topval, bottomval);
    check_times.forEach((item) => {
      if(document.getElementById(String(item)) && document.getElementById(String(item)).style.backgroundColor == ""){
        document.getElementById(String(item)).style.backgroundColor = document.getElementById(clickedId).style.backgroundColor;
        document.getElementById(clickedId).style.backgroundColor = "";
      }
    })
  }