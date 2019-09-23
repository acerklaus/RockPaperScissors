"use strict";
const startButton = document.getElementById("startButton");
const instructions = document.getElementById("instructions");
const gameScreen = document.getElementById("gameScreen");
const submit = document.getElementById("submit");


startButton.addEventListener("click", function(start){
    start.preventDefault();
    console.log("user clicked start");
    instructions.className = "hidden";
    gameScreen.className = "";

});

submit.addEventListener("click", function(getUserInput){
 getUserInput.preventDefault();
 var e = document.getElementById("gameForm");
 var userInput = e.options[e.selectedIndex].value;
 console.log("User choice is " + userInput);


var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

console.log("computer choice is " +computerChoice);
var win = false;
if (userInput == "rock" && computerChoice == "scissors")
    {
         win = true;
          alert("You have won the game");
    }
else if (userInput == "rock" && computerChoice == "paper")
    {
         win = true;
          alert("you have lost :(");
    }
else if (userInput == "paper" && computerChoice == "scissors")
    {
         win = true;
          alert("You have won the game");
    }
else if (userInput  == "paper" && computerChoice == "rock")
    {
         win = true;
          alert("you have lost :(");
    }
else if (userInput == "scissors" && computerChoice == "paper")
    {
         win = true;
          alert("You have won the game");}
else if (userInput == "scissors" && computerChoice == "rock")
    {
         win = true;
          alert("you have lost :(");
    }
else if (userInput == computerChoice){
     win = true;
     alert("its a tie!");

}
if (win = true){console.log("true")}


});

   
  

