function Questions(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}


Questions.prototype.correctAnswer = (choice) => {
    return choice === this.answer;
}