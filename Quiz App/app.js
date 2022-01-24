function Question(name,choices,answer){
    this.name = name;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex]
}

Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

let q1 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");
let q2 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");
let q3 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");
let q4 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");
let q5 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

var questions = [q1,q2,q3,q4,q5]

// Start Quiz

var quiz = new Quiz(questions);

laodQuestions();

function laodQuestions(){
    if(quiz.isFinish()){
        showScore()
    }else{
        var question = quiz.getQuestion()
        var choices = question.choices;

        document.querySelector('#question').textContent = question.name;

        for(var i=0;i<choices.length;i++){
            var element = document.querySelector('#choice'+i)
            element.innerHTML = choices[i]
            guess('btn'+i,choices[i])
        }
          showProgress()
    }
}

function guess(id,guess){
    var btn = document.getElementById(id)
    btn.onclick = function(){
        quiz.guess(guess)
        laodQuestions()
    }
}

function showScore(){
    var html = `<h2>Score : </h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html

    document.getElementById('progress').innerHTML = "Tebrikler, testiniz bitmiştir :)"
}

function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionIndex = quiz.questionIndex+1;
    var html = document.getElementById('progress')
    html.innerHTML = `Soru ${questionIndex} / ${totalQuestion}`
}