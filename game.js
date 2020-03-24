$(document).ready(function() {

    //global variables
    var questions = $("#questions");
    var answers = $("#answers");


    //click event to start Quiz, timer function and 1st question/answers
    $("#startButton").click(function(){
        timer();

    })

    //append questions and answers

    //append "Correct" or "Wrong" Alert


    //click event when answering a question

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

}
