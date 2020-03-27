$(document).ready(function () {
    console.log("Start");
    // =========================
    // Variables
    //==========================

    var correctAnswersCounter = 0;
    var currentQuestionIndex = 0;
    var timeLeft = 150;
    var finalPoints = 0;
    var myInterval;



    var highestScore = JSON.parse(localStorage.getItem("highScore"));
    console.log(highestScore);

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
            answer: "FALSE",
            choice: ["TRUE", "FALSE"]
        }];

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
        myInterval = setInterval(function () {
            $("#timer").text(timeLeft);
            timeLeft--;

            if (timeLeft <= 0) {

                timesUP();
            }
        }, 1000);

    }

    function showQuestion(index) {
        //clear previous buttons
        //$("#correctAnswer").empty();
        $("#answers").empty();
        $("#answers").removeClass();
        var previousBttnIndex = "#" + index - 1;


        //getting options and questions from the object array.

        console.log("current Index show question: " + currentQuestionIndex + "/" + index);
        var options = questions[index].choice;
        var question = questions[index].question;


        console.log("options: " + options);
        //show how many questions left
        var qNumber = index + 1;
        $("#initialParagraph").text((qNumber + " / " + questions.length));

        //adding the question:
        $("#mainHeader").text(question);

        //run function to add all the different options for a specific question
        addChoicesButtons(options, index);
        $(previousBttnIndex).removeClass("clicked");


        $(".answerSection").on("click", function () {
            $(".answerSection").off("click");


            console.log("selected answer: " + $(this).text());
            console.log(this);

            //    var bttnId = $("btn").attr("id");

            //     $(bttnId).addClass("clicked");
            // get the text of the button
            var selectedAnswer = ($(this).text());
            var result = false;
            //check the answer if answer is correct: get index and check against object's answer
            if (selectedAnswer === questions[index].answer) {
                console.log("correct:  " + true);
                correctAnswersCounter++;
                result = true;
                //showResult(true);

                // if correct add to timer else subtract
                timeLeft = timeLeft + 11;
            } else {

                timeLeft = timeLeft - 30;
            }

            //currentQuestionIndex++;
            console.log("new Index: " + index + " / " + questions.length);

            showResult(result);
            index++;

            console.log("Index before if: " + index);
            if (index < questions.length) {
                //waits x seconds to continue
                setTimeout(function () {
                    $("#correctAnswer").empty();
                    showQuestion(index)
                }, 1000);

            } else {
                console.log("index greather than 5")
                finalPoints = timeLeft;
                clearInterval(myInterval);
                $("#timer").text("");
                timeLeft = 0;
                //wait a couple of seconds to show total result
                setTimeout(function () {
                    enterInitials();
                }, 1000);

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

            bttn.attr("id", index + i);
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
            // $("#displayResult").text("Previous answer: CORRECT !!");
            $("#displayResult").text("CORRECT !!");
        }

        if (result === false) {
            // $("#displayResult").text("Previous answer: INCORRECT !!");
            $("#displayResult").text("INCORRECT !!");
        }

    }

    function enterInitials() {

        // ------clear page
        $("section").empty();
        $("#mainHeader").removeClass();
        $("#mainHeader").text("All done!!");

        // -------creating elements

        var newDivPoints = $("<div>")
        $("section").prepend(newDivPoints);
        var newDivTotalAnswers = $("<div>")

        $("section").append(newDivTotalAnswers);

        var newPPoints = $("<p>");
        var newPointsText = "Total points: " + finalPoints;
        newPPoints.text(newPointsText);
        newPPoints.addClass("finalresult");

        newDivPoints.append(newPPoints);

        var newPTotalAnswers = $("<p>");
        var newPTotalText = "Total Correct Answers: " + correctAnswersCounter + " out of " + questions.length;
        newPTotalAnswers.text(newPTotalText);
        newPTotalAnswers.addClass("finalresult")

        newDivTotalAnswers.append(newPTotalAnswers);

        // ------------display form
        // enter your initials
        $("#myform").show();

        //click event
        $("#submitbttn1").on("click", function (event) {
            event.preventDefault();
            userInitials = $("#initials").val();
            console.log("this are the initials: " + userInitials);
            var temp = 0;

            if (highestScore !== null) {
                temp = highestScore.points
            }
            if (finalPoints > temp) {
                highestScore = { name: userInitials, points: finalPoints }
                localStorage.setItem("highScore", JSON.stringify(highestScore));
            }

            // localStorage.setItem("initials", JSON.stringify(thingsTOSave));

            highScores(true);
        });


    }

    function highScores(show) {
        $("#myform").hide();
        $("section").empty();
        $("#mainHeader").removeClass();
        $("#mainHeader").text("HIGHEST SCORE");


        if (show === true) {
            var divHighestScore = $("<div>");
            divHighestScore.attr("id", "showHighScore");
            $("section").prepend(divHighestScore);

            var pHighestScore = $("<p>");
            pHighestScore.addClass("finalresult");
            divHighestScore.append(pHighestScore);


            pHighestScore.text("Initials:  " + highestScore.name + " , score: " + highestScore.points);

        }
        var newDivEndBtn = $("<div>")
        newDivEndBtn.addClass("pOne");

        $("section").append(newDivEndBtn);


        var bttn1 = $("<button>");
        var bttn2 = $("<button>");



        bttn1.attr("id", "back");
        bttn1.text("Take Test Again");
        bttn1.addClass("btn")
        bttn1.addClass("btn-primary");
        bttn1.addClass("submitbttn");


        bttn2.attr("id", "forward");
        bttn2.text("Clear High Score");
        bttn2.addClass("btn")
        bttn2.addClass("btn-primary");
        bttn2.addClass("submitbttn");

        newDivEndBtn.append(bttn1);

        newDivEndBtn.append(bttn2);

        bttn1.on("click", function () {
            location.reload();
        })


        bttn2.on("click", function () {
            highScores(false);
        });

    }


    function timesUP() {

        clearInterval(myInterval);
        $("header").empty();
        $("section").empty();



        $("#myform").hide();

        var divMessage = $("<div>");
        divMessage.attr("id", "timeUp");
        $("header").prepend(divMessage);

        var pMessage = $("<p>");
        pMessage.addClass("finalresult");
        pMessage.text("Sorry your time is up!.  Please try again")
        divMessage.append(pMessage);


        var newdivtimeUP = $("<div>")
        newdivtimeUP.addClass("pOne");

        $("section").append(newdivtimeUP);


        var bttnTimeUp = $("<button>");
        bttnTimeUp.attr("id", "timeUp");
        bttnTimeUp.text("Take Test Again");
        bttnTimeUp.addClass("btn")
        bttnTimeUp.addClass("btn-primary");
        bttnTimeUp.addClass("submitbttn");

        newdivtimeUP.append(bttnTimeUp);

        bttnTimeUp.on("click", function () {
            location.reload();
        })


    }


});