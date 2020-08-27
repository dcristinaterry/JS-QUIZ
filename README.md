# H04 JavaScript: Quiz

This application generates a JavaScript Quiz. Generating all the elements of the HTML dynamically.
The idea is that once the user starts the Quiz, it will show a counter that will indicate how many points the user starts with.  This counter will decrease by one every, 10 points will be added when answered correctly and 10 points deducted when answered incorrectly. To achieve this I used the method setInterval.
Also, every new question and answer options, get added dynamically.  A result will be displayed at the bottom indicating the user if the answer was correct or not.

## GettingStarted

Where is the project?

>[github repository](https://github.com/crisdc88/H4-JS-QUIZ/)

## Prerequisites

>N/A

## Built With

* HTML
* CSS
* jQuery

## Deployed Link

>[deployed URL: https://crisdc88.github.io/H4-JS-QUIZ/](https://dcristinaterry.github.io/JS-QUIZ/)

## Code-Snippets

1. Open scritp.js
2. Find the following code showing the use the creation of elemnts dynamically.
3. Find the following code showing implementation of random integer numbers.


```
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

 will call recursively when a button gets clicked:

 if (currentQuestionIndex < questions.length) {
                showResult(result);
                showQuestion(currentQuestionIndex); // main function displaying the question and calling on addChoicesButtons.

    }
```

## Author

D. Cristina Terry.
GitHub: [https://github.com/crisdc88/](https://github.com/crisdc88/),

LinkedIn: [www.linkedin.com/in/dcristinaterry](www.linkedin.com/in/dcristinaterry)

## License

[MIT](https://choosealicense.com/licenses/mit/)
