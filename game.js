var namespace = "http://www.w3.org/2000/svg"

var foodEaten = 0;

var positionX = 550;
var positionY = 250;
var foodY;
var foodX;
var width = 20;
var height = 20;
var message = "";

var namespace = "http://www.w3.org/2000/svg"

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}


var positionX = 200;
var positionY = 60;
document.addEventListener("keydown", function(e) {
 if(e.keyCode == 37){
   positionX -=10;
   document.getElementById("fly").setAttribute("x", positionX)
 }
 else if (e.keyCode == 39) {
   positionX +=10;
   document.getElementById("fly").setAttribute("x", positionX)
 }

 if(e.keyCode == 40){
   positionY+=10;
   document.getElementById("fly").setAttribute("y", positionY)
  }
 else if (e.keyCode == 38) {
   positionY -=10;
   document.getElementById("fly").setAttribute("y", positionY)
  }

  foodY = Number(document.getElementById("food").getAttribute("y"))
  foodX = Number(document.getElementById("food").getAttribute("x"))

  if(positionX > foodX - width && positionX < foodX + width && positionY >foodY - height && positionY < foodY + height) {
    console.log("LIT")
    document.getElementById("food").setAttribute("x", randomNumber(0, 350))
    foodEaten = foodEaten + 1
    document.getElementById("scoreboard").textContent = foodEaten
   }

   foodX = Number(document.getElementById("food2").getAttribute("x"))
   foodY = Number(document.getElementById("food2").getAttribute("y"))

   if(positionX > foodX - width && positionX < foodX + width && positionY >foodY - height && positionY < foodY + height) {
     console.log("LIT")
     document.getElementById("food2").setAttribute("x", randomNumber(0, 350))
     foodEaten = foodEaten + 1
     document.getElementById("scoreboard").textContent = foodEaten
    }

})
