var quiz = new Quiz(questions);


function populate() {
    if (quiz.isEnded()) {
        showScore();
    } else {
        //show questions in the paragraph <p> with id  of questions
        var element = document.getElementById("questions");
        element.innerHTML = quiz.getQuestionIndex().text;


        //show options
        var choice = quiz.getQuestionIndex().choices;//choices is an array
        for (var i = 0; i < choices.length; i++) {

            var element = document.getElementById("choice" + i);
            element.innerHTML = choice[i];



            //calling the  quess func
            guess("btn" + i, choice[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}


function showProgress() {

    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
}

function showScore() {
    var gameOverHtml = "<h1>Result</h1>"
    gameOverHtml += "<h2 id='score'>Your score:" + quiz.score + "</h2>"
    var element = document.getElementsById("quiz")
    //replacing the quiz div with these gameoverhtml
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Questions("Which one is not an object oriented programming language? ", ["Java", "C", "C++", "Javascript"], "C"),
    new Questions("Which language is used for styling web pages ?", ["CSS", "HTML", "Javascript", "React"], "CSS"),
    new Questions("There are ___ main components of Object oriented programming ", ["4", "6", "5", "3"], "4"),
    new Questions("Which language is used in building web apps?", ["Python", "PHP", "Javascript", "All of these"], "All of these"),
    new Questions("MVC is a ______", ["Framework", "Library", "Language", "All"], "Framework")
];

populate();





