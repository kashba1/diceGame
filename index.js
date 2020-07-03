var p1 = "Player1";
var p2 = "Player2";



function start(){

var randomNumber1=Math.floor(Math.random()*6+1);
var randImg="images/dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src",randImg);

var randomNumber2=Math.floor(Math.random()*6+1);
var randImg2="images/dice" + randomNumber2 + ".png"
document.querySelector(".img2").setAttribute("src",randImg2);

// code to decide who wins
if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩 player 1 Wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent= "player 2 Wins 🚩";
}
else {
  document.querySelector("h1").textContent="Draw!";
}
}
