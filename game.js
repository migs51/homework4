//click event to start Quiz and timer
$("#startButton").click(function(){
    alert("It Works!");

})

//timer
var ONE_SECOND = 1000;
var FIFTEEN_SECONDS = 15 * ONE_SECOND;

var secondsLeft = 60;

var timerID = setInterval(function(){
    //this happens every second
    console.log("one second has passed")
}, 1000);

//when does this end, when the timer is 0 seconds
