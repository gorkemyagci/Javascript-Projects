const quizData = [
    {
        question : "What's the best programmin language?",
        a:"Java",
        b:"Python",
        c:"Javascript",
        d:"C",
        correct:"c"
    },
    {
        question: "How old is Donald Trump",
        a:"75",
        b:"67",
        c:"82",
        d:"74",
        correct:"a"
    },
    {
        question: "How much is the jeff bezos's money",
        a:"190 billion $",
        b:"140 billion $",
        c:"224,5 billion $",
        d:"168,5 billion $",
        correct:"d"
    }
]

var quiz = document.getElementById("quiz");
var questionTxt = document.querySelector('#question')
var answerInp = document.querySelectorAll('.answer')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submit = document.querySelector('#submit')
var contents = document.querySelector('.quiz-contents')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    
    delesectCheck()

    const currentQuizData = quizData[currentQuiz];
    
    questionTxt.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


function getSelected(){
   var answer = undefined;

   answerInp.forEach((answerEl) => {
       if(answerEl.checked){
           answer = answerEl.id;
       }
   });
   return answer;
}

function delesectCheck(){
    answerInp.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submit.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            contents.innerHTML = `
                <h2 style="text-align:center">You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

console.log(score)