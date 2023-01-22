let userName = "Jane";
const userQuestion = "Will i adopt a puppy?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

console.log(`${userName} has asked -${userQuestion}`);
console.log(randomNumber);

switch (randomNumber) {
  case 0:
    eightBall = "It is centain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  case 8:
    eightBall = "Signs point to yes";
    break;
}
console.log(`The magic 8 Ball says ${eightBall}`);
