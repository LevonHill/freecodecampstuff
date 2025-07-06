//In this workshop you will learn how to work with JavaScript fundamentals by building a greeting bot.
//In this first step, you will want to output a message to the console from the greeting bot.
//Remember that you learned about console.log() and strings in the previous lecture videos.
//In the previous lecture videos, you learned about the let keyword and how to declare variables in JavaScript.

//Here is a reminder of how to declare a variable using the let keyword:
//Here is a reminder of how to use console.log() with strings

console.log("HI, there!");
//Use the let keyword to declare a variable called bot.

let bot;
bot = "teacherBot";

let botLocation;
botLocation = "the universe";

console.log("Allow me to introduce myself.")
botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);
let botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);
bot = "ProfessorBot";
let nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);
bot = "awesomeTeacherBot";
let newNicknameGreeting = "I love my nickname but I wish people would call me  " + bot + ".";
console.log(newNicknameGreeting);
let favoriteSubject = "Computer Science";
let favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);
console.log("Well, it was nice talking to you. Have a nice day!");
//NOTE: You are using let here because later on in the workshop, you will be changing the value of the bot variable.