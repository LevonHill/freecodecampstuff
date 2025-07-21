//In this workshop, you will review your knowledge of functions by building a calculator.
// regular function syntax
//function myFunction() {
//}
// arrow function syntax
//const myArrowFunction = () => {
//}
//examples up top One of concepts you learned in the previous lecture videos was how to return values from a function.

//Here is a reminder of how to return a value from a function:

//Example Code
//function myFunction() {
//  return "Hello World";
//}

//function addTwoAndSeven (){
//    return 2 + 7 ;
//}
//function addThreeAndFour(){
//    return 3 + 4 ;
//}

//console.log(addTwoAndSeven());
//console.log(addThreeAndFour());

//Even though the functions work as expected, there is a lot of repetition in your code. 
// Since you are building a calculator, you don't want to have to create a function for every possible combination of numbers you want to add together.
// It would be better to create a single reusable function that can add any two numbers together.
// Remove all of the code you have written so far.
// In the next step, you will review how to work with parameters and arguments in functions.


//In the previous lecture videos, you learned how to work with function parameters.
// A function parameter is a variable that is defined in the function's declaration and acts as a placeholder.
// Here is an example of a function that has a parameter:
function greetUser (name){
    return `Hello, ${name} !`;
}
console.log(greetUser('Levon'));
console.log(greetUser("ronalda"));
console.log(greetUser("seth"));


//The advantage of functions is that they can be called with different arguments, allowing you to reuse the same code with various values.

function calculateSum(num1, num2) {
return num1 + num2 ;
}

function calculateDifference(num1, num2) {
return num1 - num2 ;
}

function calculateProduct(num1, num2){
return num1 * num2 ; 
}

function calculateQuotient(num1 , num2 ){
    if(num1 !== "number" || num2 !== "number"){
        return "Error:Inputs Must be Numbers";
    }
    if(num2 === 0){
    return("Error: Division by zero");
    }
    else{
    return num1 / num2;
    }
}

function calculateSquare (num) {
return num ** 2;
}
function calculateSquareRoot(num){
    return Math.sqrt(num);
}

//add
console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

//sub
console.log(calculateDifference(22, 5));
console.log(calculateDifference(12,1));
console.log(calculateDifference(17,9));

//multi
console.log(calculateProduct(13, 5));

//divide
console.log(calculateQuotient(7,11));
console.log(calculateQuotient(3, 0 ));//If you look in the console, you will see the Infinity value. Infinity is a special value in JavaScript that represents a number that is greater than any other number.
//The division by zero is not a valid operation in mathematics.to account for this edge case, you should update your calculateQuotient function to instead check if num2 is zero.

//squared
console.log(calculateSquare(2));
console.log(calculateSquare(9));

//square root
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));