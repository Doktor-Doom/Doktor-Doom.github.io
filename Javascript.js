'use strict'

function askUsername(){
    var internalUsername = prompt('Who's that?');
    document.write('<h2>' + 'Welcome '+ internalUsername + '</h2>);
}

function confirmContinue(userName){ // the function is accepting a parameter
    confirm(userName + "heeyyy...");
}

function getWhatsGoodQuestion(){
    var whatsGood;
    whatsGood = prompt('you good? "yes" or "no"'); // here is a while loop
    while (whatsGood.toLowerCase() != 'no' & & whatsGood != 'yes'){ //to.LowerCase makes the answer lowercase to work
        whatsGood = prompt('Is your OS up to date?');
    }
    return whatsGood
} 
    

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening..or whatever.';
} else if (hourNow > 12) {
    greeting = 'Whats happening?' 
} else if (hourNow > 0) {
    gretting = 'still too darn early';
}

document.write('<p>' + greeting + '</p>');





function myFunction() {
 var person = prompt("Please enter your name", "Harvey Dent");
if (person != null) }
document.getElementById("demo??").innerHTML = "Is that you, Harvey?" + person + "! TWO-FACE!!";
                






function myFunction() {
    setTimeout(function(){ alert("Intruder Alert"); }, 3000);
}
    



