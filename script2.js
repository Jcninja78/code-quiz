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
  
  var score = 0;
  var myQuestionsIndex = 0;

  var lead = document.querySelector(".lead");
  var answerOne = document.querySelector(".btn btn-primary btn-lg");
  var answerTwo = document.querySelector(".btn btn-dark btn-lg");
  var answerThree = document.querySelector(".btn btn-danger btn-lg");
  var answerFour = document.querySelector(".btn btn-success btn-lg");
