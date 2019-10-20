// Utilized https://www.sitepoint.com/simple-javascript-quiz/ which showed me how to write the question list.
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
  
// Utilized   https://codepen.io/gcarino/pen/LDgtn to assist me with writing variables.
var score = 0;
var myQuestionsIndex = 0;
var lastQuestion = myQuestions.length -1;
var selections = [];

var lead = document.querySelector(".lead");
var start = document.querySelector(".btn btn-warning btn-lg")
var answerOne = document.querySelector(".btn btn-primary btn-lg");
var answerTwo = document.querySelector(".btn btn-dark btn-lg");
var answerThree = document.querySelector(".btn btn-danger btn-lg");
var answerFour = document.querySelector(".btn btn-success btn-lg");
var timer = document.querySelector("#timer");
var counter = document.querySelector("#counter");
var score = document.querySelector("#score");

start.addEventListener("click", startQuiz);


// Found how to perform functions on https://simplestepscode.com/javascript-quiz-tutorial/
// and https://www.youtube.com/watch?v=jvk1pFNqXaw.
function showQuestionOne(question, answers, correctAnswer){
    var output = [];
    var answers = (answerOne + answerTwo + answerThree + answerFour);
    for(var i = 0; i < myQuestions.length; i++){
        answers = [];
        for(letter in myQuestions[i].answers){
            answers.push(answerOne + answerTwo + answerThree + answerFour);
            output.push(score);
        }
    }
}

function showQuestionTwo(){
    var output = [];
    var answers = (answerOne + answerTwo + answerThree + answerFour);
    for(var i = 0; i < myQuestions.length; i++){
        answers = [];
        for(letter in myQuestions[i].answers){
            answers.push(answerOne + answerTwo + answerThree + answerFour);
            output.push(score);
        }
    }
}

function showQuestionThree(){
    var output = [];
    var answers = (answerOne + answerTwo + answerThree + answerFour);
    for(var i = 0; i < myQuestions.length; i++){
        answers = [];
        for(letter in myQuestions[i].answers){
            answers.push(answerOne + answerTwo + answerThree + answerFour);
            output.push(score);
        }
    }
}

function showQuestionFour(){
    var output = [];
    var answers = (answerOne + answerTwo + answerThree + answerFour);
    for(var i = 0; i < myQuestions.length; i++){
        answers = [];
        for(letter in myQuestions[i].answers){
            answers.push(answerOne + answerTwo + answerThree + answerFour);
            output.push(score);
        }
    }
}

function showQuestionFive(){
    var output = [];
    var answers = (answerOne + answerTwo + answerThree + answerFour);
    for(var i = 0; i < myQuestions.length; i++){
        answers = [];
        for(letter in myQuestions[i].answers){
            answers.push(answerOne + answerTwo + answerThree + answerFour);
            output.push(score);
        }
    }
}

function showResult(){

}




