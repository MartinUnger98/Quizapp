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

function init() {
    document.getElementById("question_sum").innerHTML = questions.length;
    
    showQuestion();
}

function showQuestion() {
    
    if(currentQuestion >= questions.length) {
        //Todo End Screen
        document.getElementById("endScreen").style = "";
        document.getElementById("questionBody").style = "display: none";
        document.getElementById("question_sum_end").innerHTML = questions.length;
        document.getElementById("rightAnswer").innerHTML = rightAnswers;
        document.getElementById("headerImage").src = "img/brain result.png";
    }
    else{
        let question = questions[currentQuestion];
        document.getElementById("current_question").innerHTML = currentQuestion + 1;
        document.getElementById("questiontext").innerHTML = question["question"];
        document.getElementById("answer_1").innerHTML = question["answer_1"];
        document.getElementById("answer_2").innerHTML = question["answer_2"];
        document.getElementById("answer_3").innerHTML = question["answer_3"];
        document.getElementById("answer_4").innerHTML = question["answer_4"];
    }
}

function answer(selection) {
    let right = questions[currentQuestion]["right_answer"];
    let answerNumber= selection.slice(-1);
    let list = document.getElementById(selection).parentNode.classList;

    let idRight = `answer_${right}`;

    if(answerNumber == right) {
        list.add("bg-success");
        rightAnswers++;       
    }
    else{
        list.add("bg-danger");
        document.getElementById(idRight).parentNode.classList.add("bg-success");
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
    document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_1").parentNode.classList.remove("bg-success");
    document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_2").parentNode.classList.remove("bg-success");
    document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_3").parentNode.classList.remove("bg-success");
    document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
    document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}
