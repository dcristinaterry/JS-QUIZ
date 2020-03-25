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
            answer: ".toggle()",
            choice: [".hover()", "stopPropagation()", ".toggle()", ".trigger()"]
        },
        {
            question: "Which method is provided by the jquery to create our own custom animation with fine-grained control?",
            answer: ".animate()",
            choice: [".animation()", "stopPropagation()", ".animate()"]
        },
        {
            question: "Multiple javascript library coexist on single page using ___________________",
            answer: "noConflict()",
            choice: ["conflict()", "noConflict()", "unbind()", "die()"]
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answer: "<script>",
            choice: ["<script>", "<javascript>", "<scripting>", "<js>"]
        },
        {
            question: "where is the correct place to insert a JavaScript?",
            answer: "Both <head> and <body>",
            choice: ["The <head> section", "Both <head> and <body>", "The <body> section"]

        
        },
        {
            question: "The external JavaScript file must contain the <script> tag.",
            answer: "False",
            choice: ["True", "False"]
        },

    ]

    // ===============================
    // event listeners
    // ===============================

    $("#bttn1").on("click", function () {
        console.log("FirstBtton");
        var txt = "1/10"
        $("#initialParagraph").text(txt);
        showQuestion(0);
        timer();
    });


    function timer() {

        var myInterval = setInterval(function () {

            $("#timer").text(timeLeft);
            timeLeft--;
        }, 1000);

    }

    function showQuestion(index) {
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



        $(".answerSection").on("click", function (event) {

            console.log("selected answer: " + $(this).text());

            // get the text of the button
            var selectedAnswer = ($(this).text());
            var result = false;
            //check the answer if answer is correct: get index and check against object's answer
            if (selectedAnswer === questions[currentQuestionIndex].answer) {
                console.log("correct:  " + true);
                result = true;
                //showResult(true);

                // if correct add to timer else subtract
                timeLeft = timeLeft + 10;
            } 

            currentQuestionIndex++;
            console.log("new Index: " + currentQuestionIndex);

            if (currentQuestionIndex < questions.length) {
                showResult(result);
                showQuestion(currentQuestionIndex);

            } else {
                // go to result page
            }


        })

    }


    function addChoicesButtons(options, index) {

        for (var i = 0; i < options.length; i++) {
            var newDiv = $("<div>");
            var bttn = $("<button>");
            // console.log(bttn);
            newDiv.addClass("answerSection");
            newDiv.attr("id", "answers + i")

            bttn.attr("id", "btt" + index + i);
            bttn.text(options[i]);
            bttn.addClass("btn")
            bttn.addClass("answerBttn");
            $("#answers").append(newDiv);

            newDiv.append(bttn);
        }
    }


    function showResult(result) {
        $("#correctAnswer").empty();
        console.log("displaying the result");

        
        var newHr = $("<hr>");
        newHr.addClass("bar");
        var newP = $("<p>");
        newP.addClass("result");
        newP.attr("id", "displayResult")

        $("#correctAnswer").append(newHr);
        $("#correctAnswer").append(newP);

        //check

        if (result === true) {
            $("#displayResult").text("Previous answer: CORRECT !!");
        } else {
            $("#displayResult").text("Previous answer: INCORRECT !!");
        }

       
    }

    // next and previous 

});