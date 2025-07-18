<!-- @format -->

In these lecture videos, you will learn the fundamentals of JavaScript. Topics covered include, but are not limited to, variables, data types, how JavaScript interacts with HTML and CSS, strings, and much more.

Lesson 1
What is JavaScript, and how does it work with HTML and CSS?

JavaScript is a powerful programming language that brings interactivity and dynamic behavior to websites.

While HTML and CSS are markup languages used to structure content and style elements on a page, JavaScript goes beyond those by enabling more complex functionality, such as handling user input, animating elements, and even building full web applications.

For example, when you click a button, submit a form, or hover over a menu, JavaScript determines how the page behaves.

Here's an example of how these three work together:

<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: green;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <button onclick="alert('Button clicked!')">Click me</button>
</body>
</html>
In this example, HTML is used to define the content: a heading (an h1 tag) and a button (the button tag).

CSS is used to apply styles to the heading, such as making the text green. JavaScript is used to display an alert message when the button is clicked.

To sum up, HTML provides structure, CSS adds styling, and JavaScript enables behavior, creating a complete and interactive web experience.

<next lesson>
Lesson 2

What is a data type, and what are the different data types in JavaScript?

In JavaScript, a data type refers to the kind of value a variable holds.

A variable is a named container that stores a value of a specific data type, allowing you to reference and manipulate it throughout your code. Data types help the program understand the kind of data it's working with, whether it's a number, text, or something else.

JavaScript has several basic data types that you'll use in your programs. We'll explore each data type in greater detail in future lecture videos. For now, here is a brief introduction of the different data types in JavaScript.

The first data type we will look at is the Number type.

A Number represents both integers and floating-point values. Examples of integers include 7, 19, and 90. Examples of floating point numbers include 3.14 and 5.2. A floating point number is a number with a decimal point.

The next data type is a String.

A String is a sequence of characters, or text, enclosed in quotes. Here are two examples:

"Hello, world"
'JavaScript'
Another data type used in JavaScript is the Boolean type.

A Boolean represents one of two possible values: true or false. You can use a boolean to check if a page is loading, or if a user is logged in or not.

The next two data types used in JavaScript are undefined and null.

undefined means a variable has been declared but hasn't been given a value yet. null means the variable has been intentionally set to "nothing" and does not hold any value. We will explore more on how this works in future lectures.

The next data type we will look at is the Object type.

An Object is a more complex data type that can hold collections of key-value pairs. Let's break this down. The key (also called a property name), is like a label for the data, whereas the value, is the actual data you want to store. Here is an example:

let book = {
title: "The Great Gatsby",
author: "F. Scott Fitzgerald",
year: 1925
};
In this object, title, author, and year are the keys (or property names). The Great Gatsby, F. Scott Fitzgerald, and 1925 are the corresponding values.

Each key-value pair in an object is called a property. So we can say that this book object has three properties. This is just a basic introduction to objects and their properties. In future videos, we'll go deeper into more advanced concepts.

The last two data types are the Symbol and BigInt data types.

A Symbol is a special type of value in JavaScript that is always unique and cannot be changed. It's often used to create unique labels or identifiers for properties:

// Creating two symbols
const symbol1 = Symbol('mySymbol');
const symbol2 = Symbol('mySymbol');
console.log(symbol1 === symbol2); // Outputs: false
In this example, we create two symbols with the same description, but they are unique.

BigInt is used for very large numbers that exceed the limit of the Number type:

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
// Outputs: 1234567890123456789012345678901234567890n
In this example, we create a BigInt by adding n at the end of a very large number.

Understanding these data types helps you handle and work with various kinds of data in your programs, as each type has its own characteristics and behaviors.

<next section>
Lesson 3

What are variables, and what are guidelines for naming JavaScript variables?

In JavaScript, variables act as containers for storing data that you can access and modify throughout your program.

You can think of variables as boxes that hold values. With variables, you can keep track of things like numbers or text and refer to these values whenever you need them in your program.

One way to declare a variable in JavaScript, is to use the let keyword. You will learn more about the let keyword as well as other ways to declare variables in future lectures.

Here's an example of using let to declare a variable called age:

let age;
Right now, the age variable does not have a value assigned to it. To assign a value to a variable you will need to use the assignment operator like this:

let age = 25;
The assignment operator looks like an equals sign (=) but it doesn't check for equality. You'll learn about the correct operators for checking equality in future videos.

The assignment operator is used to assign a value to a variable. This process of assigning a value to a variable is known as initialization.

One advantage of using the let keyword to declare variables is that you can reassign values to them. In programming, reassignment means giving a new value to a variable that already has one.

Here is an example of reassigning the value for the age variable:

age = 30;
Now the age variable holds the value of 30. Notice that the let keyword wasn't needed again because the age variable was already declared, so there's no need to declare it a second time.

When using reassignment, you only need to reference the variable name. Reassignment is useful because it allows you to update and change the value stored in a variable as your program runs. A good example of this would be updating points in a game.

Naming variables may seem straightforward, but there are some rules and best practices to ensure your code is readable and functional.

Your variable names should describe what the data represents. For example, instead of using a name like x, a more descriptive name such as age or points makes your code easier to understand.

Variables in JavaScript must begin with a letter, an underscore (\_), or a dollar sign ($). They cannot start with a number.

Variable names are case-sensitive, meaning the word age in all lowercase and the word Age with a capital A are considered different variables.

This is why it's important to stick with a consistent naming convention like camelCase. camelCase is where the first word is all lowercase and each subsequent word starts with an uppercase letter.

Here is an example of using the camelCase naming convention for a variable:

let thisIsCamelCase;
There are certain keywords in JavaScript that you cannot use as variable names, such as let, const, function, or return, as they are reserved for the language itself.

You should also avoid using special characters like exclamation points (!) or at (@) symbols, in your variable names. It is best to keep variable names readable by using letters, numbers, underscores, or dollar signs.

By following these guidelines, your code will be cleaner and more manageable as it grows in complexity.

<Next Lesson>

Lesson 4
How do let and const differ when is comes to variable declaration, assignment, and reassignment?

When working with JavaScript, you'll often declare variables to store data that you plan to use throughout your program.

In modern JavaScript, let and const are the preferred ways to declare variables, but they differ in how they handle value assignment and reassignment.

In this lecture, we'll explore how let and const differ in variable declaration, assignment, and reassignment.

The let keyword allows you to declare variables that can be updated or reassigned later. You can think of let as a flexible container – once you've stored a value in it, you can change that value as needed throughout your program.

Here's an example of declaring and assigning a variable with let:

let score = 10;
In this case, the variable score is declared and assigned the value 10. If you want to update the value later, you can easily do that:

score = 20;
Now, score holds the value 20. This makes let particularly useful when you know the value of a variable will change as your program runs.

On the other hand, const is used to declare variables that are constant. Once you assign a value to a variable declared with const, you cannot reassign it.

This makes const ideal for values that you don't want to change accidentally during the execution of your program.

Here's an example of declaring and assigning a variable with const:

const maxScore = 100;
Once maxScore is assigned the value 100, it cannot be changed:

maxScore = 200; // This will result in an error
Trying to reassign a value to a const variable will throw an error in your JavaScript console, as const variables are immutable once they are assigned.

You can declare a let variable without immediately assigning it a value, and you can assign it a value later:

let age;
age = 25;
Variables declared with const must be assigned a value at the time of declaration. If you try to declare a const variable without assigning it a value, you will get an error:

const age; // Error: Missing initializer in const declaration
You should use let when you need to declare variables that will be reassigned later. For example, tracking a changing score or updating a value over time in your program.

Use const when you want to declare variables that should remain constant, like configuration values or settings that shouldn't be changed accidentally.

You can also use the var keyword, but it's not as recommended anymore. The var is kind of like let, except it has a wider scope, which is more likely to cause problems in your program.

(Next Lesson)
Lesson 5

What is a string in JavaScript, and what is string immutability?

In JavaScript, a string is a sequence of characters used to represent text data. Strings are one of the primitive data types in the language, along with numbers, booleans, null, and undefined.

To create a string in JavaScript, you can use single quotes ('), or double quotes (").

Here is an example of creating two variables that hold string values:

let singleQuotes = 'This is a string';
let doubleQuotes = "This is also a string";
Even though you can use single or double quotes to create strings, it's important to be consistent. If a string begins with a single quote, it must also end with a single quote.

The same applies to double quotes. The following example will throw an error because it starts with a double quote and ends with a single quote:

const improperStr = "Do not do this';
Another thing to take into account is that strings are immutable. In programming, immutability means that once something is created, it cannot be changed. So, when you create a string, you can't change its characters directly. Instead, you would create a new string if you want to make changes.

Here is an example of assigning a new string to a developer variable:

let developer = "Jessica";
developer = "Quincy";
Since strings are immutable, we can't update the first string directly. That is why we are assigning a new string to the developer variable.

Strings are an important part of programming, and in future lecture videos, you will learn advanced techniques for manipulating them and harnessing their full potential to create dynamic and interactive applications.

Lesson 6

What is string concatenation, and how can you concatenate strings with variables?

In JavaScript, working with text is an essential part of coding, and often, you'll need to combine or join pieces of text together. This process is called string concatenation.

In this lecture, we'll focus on how string concatenation works, specifically using the + operator, the += operator, and the concat() method.

The + operator is one of the simplest and most frequently used methods to concatenate strings. It allows you to join multiple strings or combine strings with variables that hold text.

Here's an example:

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; // John Doe
In this example, we used the + operator to concatenate the firstName and lastName variables along with a space (" ") to create the full name.

One disadvantage of using the + operator for string concatenation is that it can lead to spacing issues if you don't carefully manage the spacing between the concatenated strings.

Here is an example where a space is missing:

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + lastName; // "JohnDoe"
Whenever you use the + operator to concatenate strings, it is important to double check for any potential spacing issues.

If you need to add or append to an existing string, then you can use the += operator. This is helpful when you want to build upon a string by adding more text to it over time.

Here's an example of appending one string to another using the += operator:

let greeting = 'Hello';
greeting += ', John!';

// greeting is now the string Hello, John!
It is important to remember that strings are immutable which means once a string is created you can not alter it.

In this case, the original string of Hello is not modified. Instead, greeting now references the new string of Hello, John!

Another way you can concatenate strings is to use the concat() method.

Before we begin learning about the concat() method, it is important to first understand what a method and a function are at a higher level.

In programming, a function is a reusable block of code that performs a specific task and can be called with various inputs. A method, on the other hand, is a type of function that is associated with an object, meaning it operates on the data contained within that object.

In future lecture videos, we will dive much deeper into how functions, objects, and methods work in JavaScript. But for now, it is important to understand that JavaScript has dozens of methods you can use, like the concat() method.

Here's an example of using the concat() method to join two strings together:

let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); // Hello World
In this example, we use the concat() method to join str1, a space (' '), and str2 into a single string.

To conclude, + operator is best for simple concatenation, especially when you need to combine a few strings or variables.

The += operator is useful when building up a string step by step or appending new content to an existing string variable.

Finally, the concat() method is beneficial when you need to concatenate multiple strings together.

Lesson 7
What is console.log() used for, and how does it work?

In JavaScript, console.log() is a simple yet powerful tool used to display messages or output information to the browser's console. It's mostly used by developers to debug and inspect code while working on their programs.

You can use console.log() to log text or variables to the console and ensure your code is running correctly.

To use console.log(), you call the method with the value or message you want to output inside the parentheses. Here are some examples:

console.log("Hello, world!");

let num = 5;
console.log(num);
The first example prints Hello, world! in the browser's console, while the second example prints the value 5.

Here is another example of working with console.log():

let name = "Alice";
console.log("Hello, " + name + "!"); // Outputs: Hello, Alice!
The console.log() method helps you monitor your code as it runs, making it easier to spot mistakes and understand how your program behaves.

Lesson 8

What is the role of semicolons in JavaScript, and programming in general?

In JavaScript, and many other programming languages, semicolons help delineate statements and improve code readability.

In JavaScript, a semicolon (;) is used to indicate the end of a statement.

Just as a period (.) marks the end of a sentence in English, a semicolon signifies the end of an executable line of code. This allows the JavaScript engine to distinguish between separate commands.

For example:

let variableOne = 5; // Declare a variable and assign a value
let variableTwo = 10; // Declare another variable and assign a value
In this code, the semicolons at the end of each line mark the end of each statement. Without them, the JavaScript engine might have trouble interpreting where one statement ends and another begins.

Semicolons are primarily used to mark the end of a statement. This helps the JavaScript engine understand the separation of individual instructions, which is important for correct execution.

let a = 1; // Statement ends here
let b = 2; // Another statement starts here
While JavaScript has Automatic Semicolon Insertion (ASI) that can add semicolons automatically, explicitly including them improves code clarity and helps prevent errors that may arise from unexpected ASI behavior.

Semicolons are used in many programming languages, including C, C++, and Java.

Semicolons mark the end of statements or instructions, helping the compiler or interpreter parse the code correctly. A compiler translates high-level programming language code into machine-readable code, which creates an executable file.

By clearly delineating statements, semicolons contribute to the readability and maintainability of code. Semicolons help prevent ambiguities in code execution and ensure that statements are correctly terminated.

Semicolons are a fundamental part of JavaScript and many other programming languages.

They mark the end of statements, improve code readability, and help avoid errors related to Automatic Semicolon Insertion.

By understanding and using semicolons properly, you can write more reliable and maintainable code.

Lesson 9

What are comments in JavaScript, and when should you use them?

Comments in programming are used to provide additional context for the code or leave notes for yourself and others.

Comments are lines or blocks of text that are ignored by the JavaScript engine when your code is executed. They are there solely for the benefit of people reading the code, whether that's you or someone else.

JavaScript provides two ways to add comments to your code: single-line comments and multi-line comments.

Single-line comments are created using two forward slashes (//). Here is an example:

// I am a single line comment in JavaScript
This type of comment is great for brief explanations or clarifications.

Here is a real world example from the freeCodeCamp curriculum project files:

// This is to allow English to build without having to download the i18n files.
// It fails when trying to resolve the i18n-curriculum path if they don't exist.
const curriculumLocale = process.env.CURRICULUM_LOCALE ?? 'english';
const I18N_CURRICULUM_DIR = path.resolve(
\_\_dirname,
curriculumLocale === 'english' ? '.' : 'i18n-curriculum/curriculum'
);
Do not worry about trying to understand what the code is actually doing because it is more advanced than what you have learned so far. Instead, focus on the comment left by the developer. This comment provides important context for why this code exists.

Comments like this are important for those working on teams for two reasons:

Other developers working on the project will understand the purpose of this code.

It helps prevent unnecessary changes or deletions without consulting the team, which could lead to bugs or issues.

Another type of comment is multi-line comments. Here is the basic syntax:

/_
I am a multiline comment.
This is helpful for longer explanations.
_/
Multi-line comments are useful when you need to write longer descriptions, explanations, or notes in your code.

Let's take another look at the freeCodeCamp curriculum project files to see how multiline comments can be used in the real world.

/_ Since there can be more than one way to complete a certification (using the
legacy curriculum or the new one, for instance), we need a certification
field to track which certification this belongs to. _/
const dupeCertifications = [
{
certification: 'responsive-web-design',
dupe: '2022/responsive-web-design'
}
];
const hasDupe = dupeCertifications.find(
cert => cert.dupe === meta.superBlock
);
Just like before, ignore all of the JavaScript code because it uses concepts that haven't been taught yet. Instead, focus on the comment left by the developer.

A developer on the team, or even a new contributor working on the project, can understand why this piece of code is here and have the full context before working on this area of the project.

While comments are useful in programming, it is important to avoid over-commenting. You don't need to comment on every single line of code, especially if the code is straightforward and self-explanatory.

Here is an example of using comments to explain the obvious:

// This code uses the const keyword to create a new variable called price.
// We are assigning the number 10 to the price variable.
const price = 10;
In this situation, there is no need to add any comments here because the code is self-explanatory. The goal is to enhance readability, not clutter the code with unnecessary explanations.

If you want to add comments to your personal projects as you are learning to code, that is fine. But once you start working on real world projects with other developers, it is important not to use comments for code that is self-explanatory.

It is also important not to use comments to help explain away confusing, overly complicated, or poorly written code. In those situations, it is best to refactor, or change, your code so other developers will better understand what is going on.

Comments are powerful tools for documenting your code and making it easier to understand. You should use comments to provide context or leave notes for yourself and others.
