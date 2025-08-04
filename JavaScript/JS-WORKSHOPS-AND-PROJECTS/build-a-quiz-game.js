const questions = [];//empty array to hold my list of objects
//list of objects in my app
let object1 = {category: "Naruto", question: "Who is the main character of the series Naruto?", choices: ["naruto", "sasuke", "kakashi"], answer: "naruto"};
let object2 = {category: "Bleach", question: "What is the name of Ichigo's zanpakuto?", choices: ["suzumebachi" , "benihime", "zangetsu"], answer: "zangetsu"};
let object3 = {category: "Jujutsu Kaisen", question:"What's the name of the sorcerer who wields Limitless?" , choices: [ "yuta" , "Gojo", "itadori"], answer: "Gojo"};
let object4 = {category: "My hero acedemia", question: "Who is the main villain in My Hero Academia?", choices: ["shoto" , "all might" ,  "Tomura Shigaraki"], answer: "Tomura Shigaraki"};
let object5 = {category: "Attack on titan", question: "Who is considered humanity's strongest soldier in Attack on Titan?", choices: [ "levi" , "mikasa", "eren" ], answer: "levi"};
 const updatedQuestions = questions.push(object1 , object2, object3, object4 , object5);//variable set to target,value for method chain that pushes my object key value pairs, to my questions array.


function getRandomQuestion(arr){
const randomIndex = Math.floor(Math.random() * arr.length);
return arr[randomIndex];
}
function getRandomComputerChoice(choicesArray){
const randomIndex = Math.floor(Math.random() * choicesArray.length);
return choicesArray[randomIndex];
}
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return 'The computer\'s choice is correct!';
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
//call function set variable equal to an instance of the fucntion arg,
const randomQ = getRandomQuestion(questions);
console.log(`category: ${randomQ.category}`); 
console.log(`Q: ${randomQ.question}`);
console.log(`choices: ${randomQ.choices.join(", ")}`);

const computerChoice = getRandomComputerChoice(randomQ.choices);
console.log(`computer chose: ${computerChoice}`);

const result = getResults(randomQ, computerChoice);
console.log(result);

console.log(randomQ);
 console.table(questions);
 console.log(updatedQuestions);
