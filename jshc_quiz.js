// https://youtu.be/PBcqGxrr9g8
const questions = [
    {
        question: "Which one is the largest animal in the world?",
        answer: [
                {text: "Shark", correct: false},
                {text: "Blue Whale", correct: true},
                {text: "Elephant", correct: false},
                {text: "Rat", correct: false}  
        ]
    },
    {
        questions: "What is the capital of India?",
        answer: [
                {text: "Bangalore", correct: false},
                {text: "Nagpur", correct: false},
                {text: "Delhi", correct: true},
                {text: "japan", correct: false}  
        ]
    },
    {
        questions: "Which is the smallest country in the world?",
        answer: [
                {text: "Vatican City", correct: true},
                {text: "Nagpur", correct: false},
                {text: "Delhi", correct: false},
                {text: "japan", correct: false}  
        ]
    },
    {
        questions: "Who is the prime minister of India?",
        answer: [
                {text: "Aman Kumar", correct: false},
                {text: "Sourabh Singh", correct: false},
                {text: "Narendra Modi", correct: true},
                {text: "Maqbool Choudhary", correct: false}  
        ]
    },
    {
        questions: "When India got independence?",
        answer: [
                {text: "26th Aug 1950", correct: false},
                {text: "15th Aug 1947", correct: true},
                {text: "15th Aug 2024", correct: false},
                {text: "15th Aug 2025", correct: false}  
        ]
    }
];

const questionElement = document.getElementById("questions");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState(); //to reset the previous options
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;

        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}

startQuiz();
nextButton.addEventListener("click", function() {
    if (currentQuestionIndex < questions.length) {
        startQuiz();
        currentQuestionIndex++; // Move to the next element
    }
}
);

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
