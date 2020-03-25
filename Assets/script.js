$(document).ready(function () {
    console.log("Start");
    // =========================
    // Variables
    //==========================

    var correctAnswersCounter = 0;
    var currentQuestionIndex = 0;
    var timeLeft = 500;

    // =========================
    // objects
    //==========================
    
    var questions = [
        {
            question: "q1",
            answer: "a1",
            choice: ["ch1", "ch2"]
        },
        {
            question: "q2",
            answer: "a2",
            choice: ["ch1", "ch2", "ch3"]
        }//,
        // {
        //     question: "q3",
        //     answer: "a3",
        //     choice: ["ch1", "ch2", "ch3", "ch4"]
        // },
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


    function addChoiceButtons(index) {
        //clear previous buttons
        $("#answers").empty();

        //gettin options and questions from the object array.
        var options = questions[index].choice;
        var question = questions[index].question;

        console.log(options, index);

        //adding the question:
        $("#mainHeader").text(question);

        //run function to add all the different options for a specific question
        addChoicesButtons(options);
      
        $(".answerSection").on("click", function (event) {
            console.log("selected answer: " + $(this).text());

            var selectedAnswer = $(this).text();
            // display next and previous buttons
            // get the text of the button
            // check the answer: get index and check against object's answer
            // show if answer is correct or not
            // wait two seconds and go next.
            // if correct add to timer else subtract
            currentQuestionIndex++;
            console.log(currentQuestionIndex);
            addChoiceButtons(currentQuestionIndex);
    
        })
    }

    function timer() {

        var myInterval = setInterval(function () {

            $("#timer").text(timeLeft);
            timeLeft--;
        }, 1000);

    }
    //setTimeout(finish, 20000);

    function addChoicesButtons(options, index){

        for (var i = 0; i < options.length; i++) {
            var newDiv = $("<div>");
            var bttn = $("<button>");
            console.log(bttn);

            //newDiv.addClass("pOne");
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


    // next and previous 

});