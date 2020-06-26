'use strict'

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

<<p>CLick for something to happen?</p>
<button onclick="myFunction()">Try it</button>
 <p id="demo"></p>

 <script>
function myFunction() {
                var person = prompt("Please enter your name", "Harvey Dent");
                if (person != null) {
                    document.getElementById("demo??").innerHTML = "Is that you, Harvey?" + person + "! TWO-FACE!!";
                {"}"}
            {"}"}
</script>


<p>CLick the button to wait 3 seconds, then alert "Intruder Alert".</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    setTimeout(function(){ alert("Intruder Alert"); }, 3000);
}
    
}</script>


