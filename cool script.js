var css =document.getElementById("textcolor");
var color1 =document.querySelector(".color1");
var color2 =document.querySelector(".color2");
var body1=document.querySelector("body")
function setgradient(){
    body1.style.background = "linear-gradient(to right, "+ color1.value + " , " + color2.value + ")";
   css.textContent = body1.style.background + ";"; 

}
