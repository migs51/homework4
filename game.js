//click event to start Quiz and timer function
$("#startButton").click(function(){
    timer();

})

//timer variables
var ONE_SECOND = 1000;

var secondsLeft = 60;

//timer function
function timer(){
    var timerID = setInterval(function(){
    console.log("one second has passed")
    secondsLeft--;
    console.log(secondsLeft);
    $("#timer").text(secondsLeft);
    if (secondsLeft <= 0){
        clearInterval(timerID);
    }
}, 1000);
}


