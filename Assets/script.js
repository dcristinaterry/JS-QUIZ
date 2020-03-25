$(document).ready(function () {

    // =========================
    // Variables
    //==========================

    var correctAnswersCounter = 0;
    var currentQusetionIndex = 0;


    // =========================
    // objects
    //==========================
    console.log("Beginning");

    var questions = [
        {
            q: "q1",
            a: "a1",
            ch: ["ch1", "ch2"]
        },
        {
            q: "q2",
            a: "a2",
            ch: ["ch1", "ch2", "ch3"]
        },
        {
            q: "q3",
            a: "a3",
            ch: ["ch1", "ch2", "ch3", "ch4"]
        },
        {
            q: "q4",
            a: "a4",
            ch: ["ch1", "ch2", "ch3", "ch4"]
        },
        {
            q: "q5",
            a: "a5",
            c: ["ch1", "ch2", "ch3", "ch4"]
        },
        {
            q: "q6",
            a: "a6",
            ch: ["ch1", "ch2", "ch3", "ch4"]
        },

    ]

    // ===============================
    // event listeners
    // ===============================

    $("#bttn1").on("click", function () {
        console.log("FirstBtton");
        var txt = "1/10"
        $("#initialParagraph").text(txt);
        
        addChoiceButtons(0);

    });


    function addChoiceButtons(index) {
        $("#answers").empty();
        var options = questions[index].ch;
        console.log(options);

        for (var i = 0; i < options.length; i++) {
            var newDiv = $("<div>");
            var bttn = $("<button>");
            console.log(bttn);

            bttn.attr("id", "btt" + index + i);
            bttn.text(options[i]);
            bttn.addClass("btn")
            bttn.addClass("answerBttn");
            $("#answers").append(newDiv);

           newDiv.append(bttn);
        }
    }

    $(".btn").on("click", function () {
            // display next and previous buttons
            // get the text of the button
            // check the answer: get index and check against object's answer
            // show if answer is correct or not
            // wait two seconds and go next.
            // if correct add to timer else subtract
            

            
    })

    // next and previous 

});