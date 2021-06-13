function movementMechanism(clickedId){
  let clickedElement = document.getElementById(String(clickedId));
  let tileUpId = document.getElementById(String(+clickedId+5));
  let tileDownId = document.getElementById(String(+clickedId-5));
  let tileRightId = document.getElementById(String(+clickedId+1));
  let tileLeftId = document.getElementById(String(+clickedId-1));
  if(tileUpId && tileUpId.style.backgroundColor == ""){
     tileUpId.style.backgroundColor = clickedElement.style.backgroundColor;
    clickedElement.style.backgroundColor = "";
}
else if(tileDownId && tileDownId.style.backgroundColor == ""){
     tileDownId.style.backgroundColor = clickedElement.style.backgroundColor;
    clickedElement.style.backgroundColor = "";
}
else if(tileRightId && tileRightId.style.backgroundColor == ""){
     tileRightId.style.backgroundColor = clickedElement.style.backgroundColor;
    clickedElement.style.backgroundColor = "";
}
else if(tileLeftId && tileLeftId.style.backgroundColor == ""){
     tileLeftId.style.backgroundColor = clickedElement.style.backgroundColor;
    clickedElement.style.backgroundColor = "";
}
       
}