<!-- @format -->

In these lecture videos, you will learn how to reuse a block of code with functions. You will learn what the purpose of a function is and how they work, and how scope works in programming.

Lesson 1
What is the purpose of functions, and how do they work?

Functions are reusable pieces of code that perform a specific task or calculate a value. Think of functions as a machine that takes some input, does some operations on it, and then produces an output. Here is an example of declaring a function:

Example Code
function greet() {
console.log("Hello, Jessica!");
}
In this example, we have declared a function called greet. Inside that function, we have a console.log that logs the message Hello, Jessica!. If we tried to run this code, we would not see the message appear in the console. This is because we need to call the function.

A function call, or or invocation, is when we actually use or execute the function. To call a function, you will need to reference the function name followed by a set of parentheses:

Example Code
function greet() {
console.log("Hello, Jessica!");
}

greet(); // "Hello, Jessica!"
Now the message of Hello, Jessica! will be logged to the console. But what if we wanted the message to say Hello, Nick! or Hello, Anna!? We don't want to write a new function each time we greet a different user. Instead, we can create a reusable function that uses function parameters and arguments.

Parameters act as placeholders for the values that will be passed to the function when it is called. They allow functions to accept input and work with that input. Arguments are the actual values passed to the function when it is called. Here is an updated version of the greet function that uses parameters and arguments:

Example Code
function greet(name) {
console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Nick"); // Hello, Nick!
The name serves as the parameter while the strings Alice and Nick serve as the arguments. Now we have a reusable function that can be used dozens of times throughout our code with different arguments.

When a function finishes its execution, it will always return a value. By default, the return value will be undefined. Here is an example:

Example Code
function doSomething() {
console.log("Doing something...");
}

let result = doSomething();
console.log(result); // undefined
If you need your function to return a specific value, then you will need to use the return statement. Here is an example of using a return statement to return the sum of two values:

Example Code
function calculateSum(num1, num2) {
return num1 + num2;
}

console.log(calculateSum(3, 4)); // 7
Often times you will be using the return statement, because you can use that value that was output from the function later on in your code.

So far, we've been working with named functions, but you can also create what's called an anonymous function. An anonymous function is a function without a name that can be assigned to a variable like this:

Example Code
const sum = function (num1, num2) {
return num1 + num2;
};

console.log(sum(3, 4)); // 7
In this example, we have a const variable called sum and we are assigning it an anonymous function that returns the sum of num1 and num2. We are then able to call sum and pass in the numbers 3 and 4 to get the result of 7.

Functions support default parameters, allowing you to set default values for parameters. These default values are used if the function is called without an argument for that parameter. Here's an example:

Example Code
function greetings(name = "Guest") {
console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!
In this example, if no argument is provided for name, it defaults to Guest.

In summary, functions allow you to write reusable and organized code. They can take inputs (parameters), perform actions, and return outputs.

Lesson 2
What are arrow functions, and how do they work?

In the previous lecture video, you learned how to work with functions, which are reusable pieces of code that help make your code more modular, easier to maintain, and more efficient. All previous examples used the regular function syntax, like this:

Example Code
function greetings(name) {
console.log("Hello, " + name + "!");
}
But another way to write functions in JavaScript is to create an arrow function expression. Here is how you can refactor the previous example to use arrow function syntax instead:

Example Code
const greetings = (name) => {
console.log("Hello, " + name + "!");
};
In this revised example, we are creating a const variable called greetings and assigning it an anonymous function. Most of the syntax will look familiar to you except for the missing function keyword and the addition of the arrow (=>) between the name parameter and the function body. If your parameter list only has one parameter in it, then you can remove the parentheses like this:

Example Code
const greetings = name => {
console.log("Hello, " + name + "!");
};
If your arrow function has no parameters, then you must use the parentheses like this:

Example Code
const greetings = () => {
console.log("Hello");
};
When first learning about functions, you had to wrap the function body in curly braces. But if your function body only contains a single line of code, you can remove the curly braces like this:

Example Code
const greetings = name => console.log("Hello, " + name + "!");
It is important to note that removing the parentheses and curly braces for regular function syntax will not work. You will get errors if you tried to do something like this:

Example Code
// This will produce syntax errors
function greetings name console.log("Hello, " + name + "!");
These types of one line functions only work if you are using the arrow function syntax. Another key concept is the return statement. Here is an example of using the arrow function syntax to calculate the area:

Example Code
const calculateArea = (width, height) => {
const area = width \* height;
return area;
};

console.log(calculateArea(5, 3)); // 15
We are creating a variable inside the function called area and then returning that variable. But we could clean up our code a bit and return the calculation itself:

Example Code
const calculateArea = (width, height) => {
return width \* height;
};
If you tried to remove the curly braces and place the calculation on the same line, then you would get an Uncaught SyntaxError: Unexpected token 'return' message:

Example Code
const calculateArea = (width, height) => return width \* height;
The reason why you are getting this error, is because you need to remove the return statement. When you remove that return statement, the error will disappear and the function will still implicitly return the calculation.

Example Code
const calculateArea = (width, height) => width \* height;
So when should you use the arrow function syntax? Well, it depends. Many developers use it consistently in their personal projects. However, when working on a team, the choice usually depends on whether the existing codebase uses regular functions or arrow functions. In future lecture videos, we'll cover when to use arrow functions and when to avoid them.

lesson 3
What is scope in programming, and how does global, local, and block scope work?

Scope in programming refers to the visibility and accessibility of variables in different parts of your code. It determines where variables can be accessed or modified. In JavaScript, understanding scope is crucial for writing clean, efficient, and bug-free code. There are three main types of scope: global scope, local scope, and block scope.

Global scope is the outermost scope in a JavaScript program. Variables declared in the global scope are accessible from anywhere in your code, including within functions and blocks. These variables are often called global variables. While global variables can be convenient, they should be used sparingly as they can lead to naming conflicts and make your code harder to maintain. Here's an example of a global variable:

Example Code
let globalVar = "I'm a global variable";

function printGlobalVar() {
console.log(globalVar);
}

printGlobalVar(); // Output: "I'm a global variable"
In this example, globalVar is declared in the global scope and can be accessed inside the printGlobalVar function.

Local scope, on the other hand, refers to variables that are only accessible within a function. Here's an example of local scope:

Example Code
function greet() {
let message = "Hello, local scope!";
console.log(message);
}

greet(); // Output: "Hello, local scope!"
console.log(message); // This will throw an error
In this code, message is a local variable within the greet function. It can be used inside the function, but trying to access it outside the function will result in an error.

Block scope is a concept introduced with the let and const keywords in ES6. A block is any code section within curly braces, {}, such as in if statements, for loops, or while loops. The concept of loops will be taught in an upcoming lecture.

Variables declared with let or const inside a block are only accessible within that block. Here's an example of block scope:

Example Code
if (true) {
let blockVar = "I'm in a block";
console.log(blockVar); // Output: "I'm in a block"
}
console.log(blockVar); // This will throw an error
In this example, blockVar is only accessible within the if block. Trying to access it outside the block will result in an error. Understanding these different types of scope is essential for managing variable accessibility and avoiding unintended side effects in your code.

Global variables should be used sparingly, as they can lead to naming conflicts and make your code harder to maintain. Local variables help to keep different parts of your code isolated, which is especially useful in larger programs. Block scoping with let and const provides even finer control over variable accessibility, helping to prevent errors and make your code more predictable. Mastering these basic concepts of global, local, and block scope will provide a solid foundation for understanding more advanced topics.
