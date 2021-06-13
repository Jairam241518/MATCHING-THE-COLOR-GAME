const colorArray = ['#ff0000', '#0000ff', '#3cb371', '#ee82ee', '#ffa500', '#6a5acd'];
const colorArray2 = document.querySelectorAll('.cell');
const colorArray3 = document.querySelectorAll('.acell');
var colorArray4 = [];

for(let i = 0;i < colorArray2.length;i++){
  let colorGrid = colorArray[Math.floor(Math.random()*6)];
  colorArray2[i].style.backgroundColor = colorGrid;
  colorArray4.push(colorGrid);
}


for(let i = 0;i < 17;i++){
  colorArray3[i].style.backgroundColor = colorArray4[i];
}

do{
var randomNumber = Math.floor(Math.random() * 36);
}
while(randomNumber < 17);


for(let i = 16;i < colorArray3.length;i++){
  if(randomNumber === i){
    continue;
  }
  colorArray3[i].style.backgroundColor = colorArray[Math.floor(Math.random()*6)];
}