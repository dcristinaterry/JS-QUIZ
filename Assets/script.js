$(document).ready(function () {
    console.log("Start");
    // =========================
    // Variables
    //==========================

    var correctAnswersCounter = 0;
    var currentQuestionIndex = 0;
    var timeLeft = 300;

    // =========================
    // objects
    //==========================

    var questions = [
        {
            question: "1. _____________ is use for alternately expand and collapse a page element",
            answer: "C. .toggle()",
            choice: [".hover()", "stopPropagation()", ".toggle()", ".trigger()"]
        },
        {
            question: "Which method is provided by the jquery to create our own custom animation with fine-grained control?",
            answer: "a2",
            choice: [".animation()", "stopPropagation()", ".animate()"]
        },
        {
            question: "Multiple javascript library coexist on single page using ___________________",
            answer: "a3",
            choice: ["conflict()", "noConflict()", "unbind()", "die()"]
        }
        // {
        //     question: "q4",
        //     answer: "a4",
        //     choice: ["ch1", "ch2", "ch3", "ch4"]
        // },
        // {
        //     question: "q5",
        //     answer: "a5",
        //     choice: ["ch1", "ch2", "ch3", "ch4"]
        // },
        // {
        //     question: "q6",
        //     answer: "a6",
        //     choice: ["ch1", "ch2", "ch3", "ch4"]
        // },

    ]

    // ===============================
    // event listeners
    // ===============================

    $("#bttn1").on("click", function () {
        console.log("FirstBtton");
        var txt = "1/10"
        $("#initialParagraph").text(txt);
        addChoiceButtons(0);
        timer();
    });


    function timer() {

        var myInterval = setInterval(function () {

            $("#timer").text(timeLeft);
            timeLeft--;
        }, 1000);

    }

    function addChoiceButtons(index) {
        //clear previous buttons
        $("#answers").empty();
        $("#answers").removeClass();

        //gettin options and questions from the object array.
        var options = questions[index].choice;
        var question = questions[index].question;

        console.log("options, and  current index: " + options, index);
        //show how many questions left
        var qNumber = index + 1;
        $("#initialParagraph").text((qNumber + " / " + questions.length));

        //adding the question:
        $("#mainHeader").text(question);

        //run function to add all the different options for a specific question
        addChoicesButtons(options);

    }

 

    function addChoicesButtons(options, index) {

        for (var i = 0; i < options.length; i++) {
            var newDiv = $("<div>");
            var bttn = $("<button>");
            // console.log(bttn);
            newDiv.addClass("answerSection");
            newDiv.attr("id", "answers")

            bttn.attr("id", "btt" + index + i);
            bttn.text(options[i]);
            bttn.addClass("btn")
            bttn.addClass("answerBttn");
            $("#answers").append(newDiv);

            newDiv.append(bttn);
        }
    }

    $("#answers").on("click", function (event) {
        console.log("selected answer: " + $(this).text());
        
        
        // get the text of the button
        var selectedAnswer = $(this).text();

       // check the answer: get index and check against object's answer
        if(selectedAnswer === questions[currentQuestionIndex].answer){
            console.log("correct");
            // show if answer is correct or not
           // showResult(true);
            // if correct add to timer else subtract
            timeLeft = timeLeft + 10;
        }else{
           // showResult(false);
           console.log(false);
            timeLeft = timeLeft - 10;
        }
        
        // wait two seconds and go next.
        
        currentQuestionIndex++;
        console.log("new Index: " + currentQuestionIndex);

        if (currentQuestionIndex < questions.length) {

            addChoiceButtons(currentQuestionIndex);
        }else{
            // go to result page
        }


    })

    function showResult(result){
        var newDivResult = $("<div>");
        newDivResult.attr("id", "resultSection")
        var newHr = $("<hr>");
        newHr.addClass("bar");
        var newP = $("<p>");
        newP.addClass("result");
        newP.attr("id", "displayResult")

        //check

        if(result=== true){
            $("$displayResult").text(" CORRECT !!");
        }else{
            $("$displayResult").text(" INCORRECT !!");
        }


        $("body").append(newDivResult);
        $("#resultSection").append(newHr);
        $("#resultSection").append(newP);
    }

    // next and previous 

});