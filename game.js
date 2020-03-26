

$(document).ready(function() {

    //global variables
    var questions = $("#questions");
    var answers = $("#answers");
    var startButton = $("#sBtn");
     //timer variables
     var ONE_SECOND = 1000;
     var secondsLeft = 60;
     //Score counter
     var score = 0;
     //variables used by question grabbers
     var index = 0;
     var choicesIndex = 0;
     var answerIndex =0;
     var choiceArray = questionsObject[index].choices;
    
   


    //click event to start Quiz, timer function and 1st question/answers
    startButton.click(function(){
        timer();
        // getQuestion();
        questions.empty();
        answers.empty();
        $("#sBtn").empty();
        questionGrabber();
    })

    

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

  
   
    
 
   

    // function to grab user question/choices and display to DOM
    function questionGrabber(){
        if (index === questionsObject.length){
            console.log('game is finished')
        }
        questions.empty();
        answers.empty();
        var questionDisplay = questionsObject[index].title;
        console.log(questionDisplay);
        questions.append(questionDisplay);
        index++;

        for (var i = 0; i < choiceArray.length; i++){
            var buttonDisplay = choiceArray[i];
            console.log(buttonDisplay);
            var newButton = $("<button>");
            newButton.addClass("choice");
            newButton.val(buttonDisplay);
            newButton.text(buttonDisplay);
            answers.append(newButton);
            questionsObject[choicesIndex].choices;
            choicesIndex++;
        }
        

        
      
        
    }


    //click event for user to select answer choice
    $(document).on("click",".choice", function(){
        var userAnswer = ($(this).text());
        console.log(userAnswer);
        var correctAnswer = (questionsObject[answerIndex].answer);
        answerIndex++;
        if (userAnswer === correctAnswer){
            alert("correct");
        }
        else {
            alert("wrong!");
        }
        questionGrabber();
    })
    
    // function checkAnswer(){
    //     var correctAnswer = (questionsObject[answerIndex].answer);
    //     answerIndex++;
    //     if (userAnswer === correctAnswer){
    //         alert("correct");
    //     }
    //     else {
    //         alert("wrong!");
    //     }
        
    // }

    // checkAnswer();



  

    
});

