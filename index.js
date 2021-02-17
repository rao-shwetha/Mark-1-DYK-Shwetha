const chalk = require("chalk");


var readlineSync = require('readline-sync');
var userName = readlineSync.question('Hi, What\'s your name? ');
console.log(chalk.yellow("Welcome " + userName + "! This is the brand new game in town: Do You Know Shwetha? \nLet's Start!"));
var score = 0;

var questions = [{
  question: "What is my favorite snack? ",
  answer: "samosa"
}, {
  question: "Which is my favourite holiday destination? ",
  answer: "bali" 
}, {
  question: "What role did I get for my first full time job? ",
  answer: "assistant manager"
}];

function play(q,a) {
  var userAns = readlineSync.question(q);
  console.log(chalk.yellow("You entered " + userAns));
  if(userAns.toLowerCase() == a) {
    console.log(chalk.green("You are right!"));
    score+=1;
    console.log(chalk.green("You just gained a point! Your score is:" + score));
  } else {
    console.log(chalk.red("Sorry, you are wrong!"));
    score-=1;
    console.log(chalk.red("You just lost a point! Your score is:" + score));
  }
  console.log("-----------------------");
return score;
}

for (i=0; i<questions.length;i++) {
  currentQuestion=questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}


console.log(chalk.yellow("Congratulations! You've now completed the quiz. Your Total score is: " + score));



