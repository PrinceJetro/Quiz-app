let quizData = [ 
    { question: "How old is Jetro", a : "12", b : "15", c : "19", d : "21", correct: "c" }, 
    { question: "When is his date of birth", a : "12 Dec 2000", b : "15 Dec 2002", c : "19 Nov 2002", d : "21 Dec 2002", correct: "d" },
     { question: " Who is your  fav superhero?", a : "Loki", b : "Ironman", c : "Thor", d : "Captain America", correct: "c" },
      { question: " What do i do with my free time when i have no plans?", a : "Play games", b : "Watch Movies", c : "Code", d : "Sleep", correct: "a" }, 
      { question: "What's my favorite movie company", a : "Netflix", b : "Dc", c : "Marvel", d : "Nickelodeon", correct: "c" } ];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
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
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});