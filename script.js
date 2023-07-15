let questions = [
    {
        question: "Wer hat HTML erfunden?",
        answer_1: "Robbie Williams",
        answer_2: "Lady Gaga",
        answer_3: "Tim Berners-Lee",
        answer_4: "Justin Bieber",
        right_answer: 3
    },

    {
        question: "Was ist die Hauptstadt von Frankreich?",
        answer_1: "Paris",
        answer_2: "Rom",
        answer_3: "London",
        answer_4: "Madrid",
        right_answer: 1
    },

    {
        question: "Welches ist das höchste Gebirge der Welt?",
        answer_1: "Anden",
        answer_2: "Rocky Mountains",
        answer_3: "Alpen",
        answer_4: "Himalaya",
        right_answer: 4
    },

    {
        question: "Wer hat die Relativitätstheorie entwickelt?",
        answer_1: "Isaac Newton",
        answer_2: "Albert Einstein",
        answer_3: "Nikola Tesla",
        answer_4: "Galileo Galilei",
        right_answer: 2
    }

];

let currentQuestion = 0;
let rightAnswers = 0;
let audioSuccess = new Audio("audio/success.mp3");
let audioWrong = new Audio("audio/wrong.mp3");


function init() {
    document.getElementById("question_sum").innerHTML = questions.length;
    
    showQuestion();
}

function showQuestion() {
    
    if(gameIsOver()) {
       showEndScreen();
    }
    else{
        updateProgressbar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display: none";
    document.getElementById("question_sum_end").innerHTML = questions.length;
    document.getElementById("rightAnswer").innerHTML = rightAnswers;
    document.getElementById("headerImage").src = "img/brain result.png";
}

function updateToNextQuestion() {
    
    let question = questions[currentQuestion];
    document.getElementById("current_question").innerHTML = currentQuestion + 1;
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updateProgressbar() {
    let percent = (currentQuestion + 1)/ questions.length ;
    percent = Math.round(percent * 100);
    document.getElementById("progress-bar").innerHTML = `${percent} %`;
    document.getElementById("progress-bar").style= `width: ${percent}%;`;
}

function answer(selection) {
    let right = questions[currentQuestion]["right_answer"];
    let answerNumber= selection.slice(-1);
    let list = document.getElementById(selection).parentNode.classList;

    let idRight = `answer_${right}`;

    if(answerNumber == right) {
        list.add("bg-success");
        audioSuccess.play();
        rightAnswers++;       
    }
    else{
        list.add("bg-danger");
        document.getElementById(idRight).parentNode.classList.add("bg-success");
        audioWrong.play();
    }

    document.getElementById("next_button").disabled = false;
}

function nextQuestion() {
    currentQuestion++;   
    document.getElementById("next_button").disabled = true;
    resetAnswerButtons();
    showQuestion();
   
}


function resetAnswerButtons() {
   for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove("bg-danger");
        document.getElementById(`answer_${i}`).parentNode.classList.remove("bg-success");
    }
}


function restartGame() {
    document.getElementById("headerImage").src = "img/quiz.png";
    document.getElementById("questionBody").style = "";
    document.getElementById("endScreen").style = "display: none";
    
    rightAnswers = 0;
    currentQuestion = 0;
    init();
    
}
