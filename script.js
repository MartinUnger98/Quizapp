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
      question: "Welche der folgenden Aussagen zur Einbindung von CSS in eine HTML-Datei ist korrekt?",
      answer_1: "CSS kann nur inline innerhalb von HTML-Tags verwendet werden.",
      answer_2: "CSS kann ausschließlich in externen JavaScript-Dateien eingebunden werden.",
      answer_3: "CSS kann inline, in einem <style> -Tag im <head> -Bereich oder in einer externen CSS-Datei eingebunden werden.",
      answer_4: "CSS ist nur über ein separates HTML-Attribut namens 'css' einfügbar.",
      right_answer: 3
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
      question: "Wie fügt man einen externen CSS-Code in eine HTML-Datei ein?",
      answer_1: "Mit dem <link> -Tag und dem Attribut 'stylesheet'.",
      answer_2: "Mit dem <style> -Tag und dem Attribut 'external'.",
      answer_3: "Mit dem <css> -Tag und dem Attribut 'src'.",
      answer_4: "Externes CSS kann nicht in HTML eingefügt werden.",
      right_answer: 1
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
        question: "Was ist die Ausgabe des folgenden Codes?\nlet x = 5;\nconsole.log(x++);\nconsole.log(x);",
        answer_1: "a) 5\n   5",
        answer_2: "b) 5\n   6",
        answer_3: "c) 6\n   6",
        answer_4: "d) 6\n   5",
        right_answer: 2
    },
    {
        question: "Welche Aussage zum 'String' in JavaScript ist korrekt?",
        answer_1: "a) String ist ein primitiver Datentyp in JavaScript.",
        answer_2: "b) Strings können mit dem '+'-Operator konkateniert werden.",
        answer_3: "c) Strings können mit der 'charAt()' Methode manipuliert werden.",
        answer_4: "d) Strings können mit der 'length()' Methode verglichen werden.",
        right_answer: 2
    },
    {
        question: "Welche der folgenden Aussagen über Funktionen in JavaScript ist richtig?",
        answer_1: "a) Funktionen können nicht in Variablen gespeichert werden.",
        answer_2: "b) Funktionen können keine Parameter haben.",
        answer_3: "c) Funktionen können nur in der globalen Scope definiert werden.",
        answer_4: "d) Funktionen können sowohl benannt als auch anonym sein und in Variablen gespeichert werden.",
        right_answer: 4
    } 
];


let questions = questionsHTML;

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
    /* document.getElementById("headerImage").src = "img/brain result.png";*/
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
    /* document.getElementById("headerImage").src = "img/quiz.png"; */
    document.getElementById("questionBody").style = "";
    document.getElementById("endScreen").style = "display: none";
    
    rightAnswers = 0;
    currentQuestion = 0;
    init();
    
}

function changeQuestions(theme) {
    questions = theme
    init();
}
