

$(document).ready(function() {

    //global variables
    var questions = $("#questions");
    var answers = $("#answers");
   


    //click event to start Quiz, timer function and 1st question/answers
    $("#startButton").click(function(){
        timer();
        getQuestion();

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

    //function to grab question/answer 
    function getQuestion(){
        questions.empty();
        answers.empty();
        $("#sBtn").empty();
        var choiceArray = questionArray.choices[i];
        //for loop to iterate of answer choices
        for (var i = 0; i < choiceArray.length; i++){
            var buttonChoice = choiceArray[i];
            var newButton = $("<button>");
            newButton.addClass("choice");
            newButton.attr("choice");
            newButton.text(buttonChoice);
            answers.append(newButton);
            
        }
       //appends questions to the DOM
        questions.append(questionArray.title);

    
    //click event for user to select answer choice
   

    function checkAnswer(){
        
        
       
        
        
    }

    checkAnswer();



     
        
        
       



    }

    
});

