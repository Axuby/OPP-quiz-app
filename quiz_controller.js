function Quiz(questions) {
    this.score = 0
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = () => {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = () => {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = (answer) => {
    this.questionIndex++;
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    } else {
        this.questionIndex++;
    }
}