
//ootame kuni leht on laetud
window.onload = function () {

//saan kätte väljad
var cm=document.getElementById('cm');
var inch=document.getElementById('inch');

//lisan nuppudele kuularid
document.getElementsById("to_inch").addEventListener("click", convertToInch);
document.getElementsById("to_cm").addEventListener("click", function(){
  cm.value=inch.value*2.54;
});


};

function convertToInch(){

inch.value = cm.value/2.54;

}
