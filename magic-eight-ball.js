let userName = prompt("What is your name?");
userName ? console.log(`Hello, ${userName}`) : console.log('Hello Stranger!');

let userQuestion = prompt("I'll give you your fortune. Ask me a yes or no question");
console.log(`You asked the question: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'As I see it, yes';
    break;
  case 1:
    eightBall = 'Ask again later';
    break;
  case 2:
    eightBall = 'Better not tell you now';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
};

console.log(eightBall)