var namespace = "http://www.w3.org/2000/svg"

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}


var positionX = 200;
document.addEventListener("keydown", function(e) {
 if(e.keyCode == 37){
   positionX -=10;
   document.getElementById("fly").setAttribute("x", positionX)
 }
 else if (e.keyCode == 39) {
   positionX +=10;
   document.getElementById("fly").setAttribute("x", positionX)
 }
})

var positionY = 60;
document.addEventListener("keydown", function(e) {
 if(e.keyCode == 40){
   positionY+=10;
   document.getElementById("fly").setAttribute("y", positionY)
 }
 else if (e.keyCode == 38) {
   positionY -=10;
   document.getElementById("fly").setAttribute("y", positionY)
 }
})
