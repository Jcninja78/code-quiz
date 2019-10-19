var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: {
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers"
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an if / else statement is enclosed within ____.",
      answers: {
        a: "Quotes",
        b: "Curly Brackets",
        c: "Parentheses",
        d: "Square Brackets"
      },
      correctAnswer: "c"
    },
    {
      question: "Who won the Super Bowl for the 2001 NFL season?",
      answers: {
        a: "Ravens",
        b: "Patriots",
        c: "Rams",
        d: "Giants"
      },
      correctAnswer: "b"
    },
    {
        question: "Which one of these countries does not border Romania?",
        answers: {
          a: "Montenegro",
          b: "Moldova",
          c: "Ukraine",
          d: "Serbia"
        },
        correctAnswer: "a"
      },
      {
        question: "Which of these is hardest to draw from memory?",
        answers: {
          a: "A Flower",
          b: "A House",
          c: "A Car",
          d: "A Bicycle"
        },
        correctAnswer: "d"
      }
  ];

function buildQuiz(){
    // we'll need a place to store the HTML output
  var output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices
      var answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}


function showResults(){
    // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  var numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    var answerContainer = answerContainers[questionNumber];
    var selector = 'input[name=question'+questionNumber+']:checked';
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);



// User needs to:
// button to start quiz

// initialize timer and start quiz questions

// if question = true then add 1 and go to next question

// if question = false then add 0 and go to next question, also take 15 seconds off the timer

// after timer runs out or user finishes quiz show score and give prompt for initials

// then take information and put it on separate highscores page in a ranked list