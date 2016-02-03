
window.onload = function (){

var clock=document.getElementById("clock");

writeDate(); //selleks et poleks näha 0:0:0

//käivitan intervalli 500ms
window.setInterval(function(){
  //iga 500ms tagant teeb päringu
  writeDate();
}, 500);


};

//võtab aja ja kirjutab clock elemendi sisse
function writeDate(){

  var today=new Date();

  var hours=today.getHours();
  var minutes=today.getMinutes();
  var seconds=today.getSeconds();
  //muudan #clock elemendi htmli
clock.innerHTML =addZeroBefore(hours)+ ":" +addZeroBefore(minutes)+ ":" +addZeroBefore(seconds);

}

function addZeroBefore(number){

  if(number<10){
    number="0"+number;
  }

  return number;
}
