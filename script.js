let questionsHTML = [
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

let questionsCSS = [
    {
        question: "Welche CSS-Eigenschaft wird verwendet, um den Text in einem Element fett darzustellen?",
        answer_1: "font-weight",
        answer_2: "text-style",
        answer_3: "font-decoration",
        answer_4: "text-bold",
        right_answer: 1
    },
    {
      question: "Welche CSS-Eigenschaft wird verwendet, um den Abstand zwischen den Elementrändern zu steuern?",
      answer_1: "border-spacing",
      answer_2: "margin",
      answer_3: "padding",
      answer_4: "space-between",
      right_answer: 3
    },
    {
      question: "Welche CSS-Eigenschaft ändert die Schriftart eines Elements?",
      answer_1: "font-family",
      answer_2: "text-style",
      answer_3: "font-style",
      answer_4: "text-font",
      right_answer: 1
    },
    {
      question: "Welche Einheit wird in CSS verwendet, um die Breite eines Elements in Bezug auf den sichtbaren Bildschirm anzugeben?",
      answer_1: "px",
      answer_2: "%",
      answer_3: "em",
      answer_4: "vw",
      right_answer: 4
    },
    {
        question: "Was ist die korrekte Art, eine Zeichenkette in JavaScript in Großbuchstaben umzuwandeln?",
        answer_1: "string.toLower()",
        answer_2: "string.upperCase()",
        answer_3: "string.toUpperCase()",
        answer_4: "string.convertCase('upper')",
        right_answer: 3
    },
    {
      question: "Welche CSS-Eigenschaft wird verwendet, um einen Hintergrundbild auf einer Webseite festzulegen?",
      answer_1: "background-image",
      answer_2: "img-url",
      answer_3: "background-url",
      answer_4: "image-source",
      right_answer: 1
    }
];

let questionsJS = [
    {
      question: "Welches Schlüsselwort wird verwendet, um eine Variable in JavaScript zu deklarieren?",
      answer_1: "var",
      answer_2: "let",
      answer_3: "const",
      answer_4: "variable",
      right_answer: 1
    },
    {
      question: "Was ist das Ergebnis von 1 + '1' in JavaScript?",
      answer_1: "'2'",
      answer_2: "2",
      answer_3: "'11'",
      answer_4: "11",
      right_answer: 3
    },
    {
      question: "Welche Methode wird verwendet, um den Datentyp einer Variable in JavaScript zu überprüfen?",
      answer_1: "typeof",
      answer_2: "checkType",
      answer_3: "getType",
      answer_4: "variableType",
      right_answer: 1
    },
    {
      question: "Welches Ereignis wird ausgelöst, wenn der Benutzer mit der Maus über ein HTML-Element fährt?",
      answer_1: "onmouseclick",
      answer_2: "onmouseover",
      answer_3: "onmouseenter",
      answer_4: "onhover",
      right_answer: 2
    },
    {
      question: "Welche Funktion wird verwendet, um einen Timer in JavaScript zu erstellen?",
      answer_1: "setTimer()",
      answer_2: "startTimer()",
      answer_3: "setInterval()",
      answer_4: "startInterval()",
      right_answer: 3
    }
];

let questionsJAVA = [
    {
        question: "Wie deklariert man eine Variable in JavaScript?",
        answer_1: "var",
        answer_2: "let",
        answer_3: "const",
        answer_4: "variable",
        right_answer: 2
    },
    {
        question: "Was ist die korrekte Art, ein leeres Array in JavaScript zu erstellen?",
        answer_1: "const arr = new Array();",
        answer_2: "const arr = [];",
        answer_3: "const arr = {};",
        answer_4: "const arr = emptyArray();",
        right_answer: 2
    },
    {
        question: "Was ist das Ergebnis von '5' + 3 in JavaScript?",
        answer_1: "'8'",
        answer_2: "8",
        answer_3: "'53'",
        answer_4: "NaN",
        right_answer: 3
    }
];


let questions = questionsHTML;

let currentQuestion = 0;
let rightAnswers = 0;
let audioSuccess = new Audio("audio/success.mp3");
let audioWrong = new Audio("audio/wrong.mp3");
let questionsDisabled = 0;

function init() {
    document.getElementById("question_sum").innerHTML = questions.length;
    
    showQuestion();
}

function showQuestion() {
    
    if(gameIsOver()) {
       showEndScreen();
    }
    else{
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
    document.getElementById("trophy").style = "";
}

function updateToNextQuestion() {    
    let question = questions[currentQuestion];
    document.getElementById("current_question").innerHTML = currentQuestion + 1;
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = `<b class="questionLetter">A</b> ${question["answer_1"]}`;
    document.getElementById("answer_2").innerHTML = `<b class="questionLetter">B</b> ${question["answer_2"]}`;
    document.getElementById("answer_3").innerHTML = `<b class="questionLetter">C</b> ${question["answer_3"]}`;
    document.getElementById("answer_4").innerHTML = `<b class="questionLetter">D</b> ${question["answer_4"]}`;
}

function updateProgressbar() {
    let percent = (currentQuestion +1)/ questions.length ;
    percent = Math.round(percent * 100);
    document.getElementById("progress-bar").innerHTML = `${percent} %`;
    document.getElementById("progress-bar").style= `width: ${percent}%;`;
}

function resetProgressbar() {
    document.getElementById("progress-bar").innerHTML = `0%`;
    document.getElementById("progress-bar").style= `width: 0%;`;
}

function answer(selection) {
    if(questionsDisabled === 0){
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
        updateProgressbar();
    }
    questionsDisabled++;
}

function nextQuestion() {
    questionsDisabled = 0;
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
    document.getElementById("questionBody").style = "";
    document.getElementById("endScreen").style = "display: none;";
    document.getElementById("trophy").style = "display: none;";
    rightAnswers = 0;
    currentQuestion = 0;
    init();
    resetProgressbar();
    
}

function changeQuestions(theme) {
    currentQuestion = 0;
    let themeTxt = generateThemetxt(theme);
    document.getElementById("quizTheme").innerHTML = themeTxt;
    document.getElementById("trophy").style = "display: none;";
    document.getElementById("welcomeSection").style = "";
    document.getElementById("questionBody").style = "display: none;";
    document.getElementById("progress-bar-div").style = "display: none;";
    document.getElementById("endScreen").style = "display: none;";
    questions = theme;
    questionsDisabled = 0
    setSelected(themeTxt, "selected");
    setSelected(themeTxt, "selectedResponsive");
    resetAnswerButtons();
    init();
    resetProgressbar();  
    document.getElementById("endScreenTheme").innerHTML = themeTxt;
}

function generateThemetxt(theme) {
    let themeTxt="";
    switch(theme) {
        case questionsHTML:
            themeTxt="HTML";
            break;
        case questionsCSS:
            themeTxt="CSS";
            break;
        case questionsJS:
            themeTxt="JS";
            break;
        case questionsJAVA:
            themeTxt="JAVA";
            break;
    }

    return themeTxt;
}

function startGame() {
    document.getElementById("questionBody").style = "";
    document.getElementById("welcomeSection").style = "display: none;";
    document.getElementById("progress-bar-div").style = "";
}

function selected(themeTxt) {
    let themes = ["HTML", "CSS", "JS", "JAVA"];
    for (let theme of themes) {
        document.getElementById("questions" + theme).classList.remove("selected");
    }
    document.getElementById("questions" + themeTxt).classList.add("selected");

}

function selectedRespon(themeTxt) {
    let themes = ["HTML", "CSS", "JS", "JAVA"];
    for (let theme of themes) {
        document.getElementById(theme).classList.remove("selectedResponisive");
    }
    document.getElementById(themeTxt).classList.add("selectedResponisive");
    
}

function setSelected(themeTxt, className) {
    let themes = ["HTML", "CSS", "JS", "JAVA"];
    for (let theme of themes) {
        document.getElementById("questions" + theme).classList.remove(className);
        document.getElementById(theme).classList.remove(className);
    }
    if(className === "selected") {
        document.getElementById("questions" + themeTxt).classList.add(className);
    }
    else {
        document.getElementById(themeTxt).classList.add(className);
    }    
}
