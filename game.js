

$(document).ready(function() {

    //global variables
    var questions = $("#questions");
    var answers = $("#answers");
    var startButton = $("#sBtn");
    var choiceA = $("#A");
    var choiceB = $("#B");
    var choiceC = $("#C");
    var choiceD = $("#D");
     //timer variables
     var ONE_SECOND = 1000;
     var secondsLeft = 60;
     //Score counter
     var score = 0;
    
   


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

  
   
    
    var index = 0;
    var choiceArray = questionsObject[index].choices;
   

    // function to loop through questions and answers choices
    function questionGrabber(){
        if (index === questionsObject.length){
            console.log('game is finished')
        }
        var questionDisplay = questionsObject[index].title;
        console.log(questionDisplay);
        questions.append(questionDisplay);
        index++;

        for (var i = 0; i < choiceArray.length; i++){
            var buttonDisplay = choiceArray[i];
            console.log(buttonDisplay);
            var newButton = $("<button>");
            newButton.addClass("choice");
            newButton.attr("choice");
            newButton.text(buttonDisplay);
            answers.append(newButton);
        }
        
      
        
    }
    //function to grab question/answer 
    // function getQuestion(){
    //     var choiceArray = questionArray.choices[i];
    //     //for loop to iterate of answer choices
    //     for (var i = 0; i < choiceArray.length; i++){
            // var buttonChoice = choiceArray[i];
            // var newButton = $("<button>");
            // newButton.addClass("choice");
            // newButton.attr("choice");
            // newButton.text(buttonChoice);
            // answers.append(newButton);
            
    //     }
    //    //appends questions to the DOM
    //     questions.append(questionArray.title);

    
    //click event for user to select answer choice
   



    // }

    
});

