const questions = [
    {
        title: "Która gwiazda jest najbliżej Ziemi?",
        answers: ["Słońce", "Proxima Centauri", "Alfa Centauri", "VY Canis Majoris"],
        correct: 0,
    },
    {
        title: "Ile to 2+2?",
        answers: ["3", "4", "5", "6"],
        correct: 1,
    },
    {
        title: "Która planeta jest największa?",
        answers: ["Merkury", "Wenus", "Mars", "Jowisz"],
        correct: 3,
    }
];

const html = {
    questionNumber: document.getElementById("question-number"),
    question: document.getElementById("question"),
    answers: [
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
        document.getElementById("answer4"),
    ],
};

let state = {
    currentQuestion: 0,
    question: null,
}

function onAnswerClick() {
    alert(123);
}

function loadQuestion(id) {
    state.currentQuestion = id;
    state.question = questions[id];
    html.question.innerText = state.question.title;
    for (let i = 0; i < 4; i++) {
        html.answers[i].innerText = state.question.answers[i];
    }
}

loadQuestion(0);