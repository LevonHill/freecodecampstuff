<!-- @format -->

In these lecture videos, you will learn how to work with strings in JavaScript. You will learn how to access characters from a string, how to use template literals and interpolation, how to create a new line in strings, and much more.

Lesson 1
What is bracket notation and how do you access characters from a string?

In JavaScript, strings are treated as sequences of characters, and each character in a string can be accessed using bracket notation. This allows you to retrieve a specific character from a string based on its position, which is called its index.

An index is the position of a character within a string, and it is zero-based. This means that the first character of a string has an index of 0, the second character has an index of 1, and so on.

For example, in the string hello, the character h is at index 0, e is at index 1, l is at index 2, and so on.

Bracket notation uses square brackets ([]) and the index of the character you want to access. Let’s look at an example:

let greeting = "hello";
console.log(greeting[1]); // Output: "e"
In this example, we can access the character at index 1, which is e.

To get the last character of a string, you can use the length of the string minus one. The length property of a string tells you how many characters it contains, so to access the last character, you would subtract one from the length:

let greeting = "hello";
console.log(greeting[greeting.length - 1]); // Output: "o"
In this case, the length of hello is 5, and the last character (o) is at index 4 which is 5 - 1.

If you want to get multiple characters, you can use bracket notation like this:

let greeting = "hello";
let firstTwo = greeting[0] + greeting[1]; // Output: "he"
console.log(firstTwo);
In this example, we are concatenating the first and second characters using bracket notation to form the string he.

Bracket notation is useful when you need to access specific characters in a string, such as extracting initials from a name or checking a specific letter for validation.

Lesson 2
How do you create a newline in strings and escape strings in JavaScript?

When working with strings in JavaScript, there are times when you need to include special characters that the JavaScript engine might otherwise misinterpret.

Two common tasks involve creating a newline within a string and escaping certain characters (like quotes) to make sure they appear correctly.

In many programming languages, including JavaScript, you can create a newline in a string using a special character called an escape sequence. The most common escape sequence for newlines is \n.

For example, if you want to break a string into multiple lines, you would use \n where you want the new line to begin:

let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
The output will be:

Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.
The \n escape sequence tells JavaScript to insert a line break at that point, which results in the string being displayed across multiple lines.

Another important concept when working with strings is escaping characters. Sometimes, you need to include characters in your string that JavaScript normally uses for something else, such as quotes.

If you simply use quotes inside a string without escaping them, it can cause an error because JavaScript will think you're trying to end the string.

For example, this will cause an error:

let statement = "She said, "Hello!"";
JavaScript gets confused because it thinks the string ends after the word "said," but, you want the quotes around "Hello!" to be part of the string.

To fix this, you can escape the inner quotes by placing a backslash (\) before them:

let statement = "She said, \"Hello!\"";
console.log(statement); // Output: She said, "Hello!"
The backslash tells JavaScript to treat the quotes as literal characters, so they appear correctly in the output.

You can also escape other special characters, such as the backslash itself (\\), or single quotes within a string surrounded by single quotes (\').

Here's another example using single quotes:

let quote = 'It\'s a beautiful day!';
console.log(quote); // Output: It's a beautiful day!
By escaping the single quote with \', JavaScript knows to include it as part of the string rather than ending the string early.

Escaping and creating newlines are essential when you’re formatting output or handling special characters in strings. These techniques help you prevent errors and ensure your text appears exactly as intended.

Lesson 3
What are template literals, and what is string interpolation?

In JavaScript, template literals are a powerful and flexible way to work with strings. Unlike regular strings, which use single (') or double (") quotes, template literals are defined with backticks (`).

They allow for easier string manipulation, including embedding variables directly inside a string, a feature known as string interpolation.

Template literals make it easier to create strings that span multiple lines or include expressions (like variables or even JavaScript code) directly within the string.

Here's a basic example of a template literal:

let name = "Alice";
let greeting = `Hello, ${name}!`; // Output: "Hello, Alice!"
Notice the use of backticks instead of single or double quotes. The ${name} syntax is an example of string interpolation, where the value of the variable name is directly inserted into the string.

String interpolation allows you to embed variables and expressions inside a string. This is a significant improvement over the older method, where you would concatenate strings and variables using the + operator.

Here is an example using string concatenation and the plus (+) operator:

let name = "Alice";
let age = 25;
let message = "My name is " + name + " and I am " + age + " years old.";
console.log(message); // Output: "My name is Alice and I am 25 years old."
And here is an example using template literals and string interpolation:

let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: "My name is Alice and I am 25 years old."
As you can see, string interpolation with template literals is much cleaner and easier to read, especially when you're working with multiple variables.

Another great feature of template literals is that they support multiline strings. With regular strings, you would need to use escape characters (\n) to create new lines. With template literals, you can simply write the string across multiple lines, and the formatting is preserved:

let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem);
The output will retain the line breaks as written:

Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.
Template literals are particularly useful when you need to include variables or expressions in strings, format complex strings, or work with multiline text. They are more concise and readable compared to traditional string concatenation.

Lesson 4
How can you find the position of a substring in a string?

When working with strings in JavaScript, there may be times when you need to locate the position of a specific substring within a larger string.

A substring is a sequence of characters that appears within a larger string. For example, in the string hello world, hello and world are substrings.

To locate the position of a substring inside of a string, you can use the indexOf() method. The indexOf() method in JavaScript allows you to search for a substring within a string.

If the substring is found, indexOf() returns the index (or position) of the first occurrence of that substring. If the substring is not found, indexOf() returns -1, which indicates that the search was unsuccessful.

The indexOf() method takes two arguments: the first is the substring you want to find within the larger string, and the second is an option starting position for the search. If you don’t provide a starting position, the search will begin at the start of the string.

In this context, an argument is a value you give to a function or method when you call it, enabling that function or method to perform its task using the specific information you provide. You will learn more about arguments in future lecture videos.

Here is an example of using the indexOf() method to find the position for the string awesome:

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14
In this example, the word awesome starts at index 14 in the string JavaScript is awesome!, so the indexOf() method returns 14.

Now, let's see what happens when the substring isn't found:

let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("fantastic");
console.log(position); // -1
Since the word fantastic does not appear in the string, the method returns -1.

You can also specify where to begin searching within the string by providing a second argument to indexOf(). Here’s an example:

let sentence = "JavaScript is awesome, and JavaScript is powerful!";
let position = sentence.indexOf("JavaScript", 10);
console.log(position); // 27
In this case, the search for JavaScript begins after the 10th character, and so the second occurrence of JavaScript is found at index 27.

It is important to note that the indexOf() method is case sensitive.

In this example, the following would return -1 because the capital letter F is not found in the string freeCodeCamp.

console.log("freeCodeCamp".indexOf("F")) // -1
Using indexOf() can be very useful when you need to check if a substring is present in a string and to determine its position for further operations.

lesson 5 

What is the prompt() method, and how does it work?

The prompt() method is an important part of JavaScript's interaction with the user. It’s one of the simplest ways to get input from a user through a small pop-up dialog box.

You'll often see it used in cases where the webpage needs a piece of information from the user, such as a name or some other form of text input.

So, what exactly does the prompt() method do? It opens a dialog box that asks the user for some input, and then it returns the text entered by the user as a string.

The prompt() method takes two arguments: The first one is the message which will appear inside the dialog box, typically prompting the user to enter information. And the second one is a default value which is optional and will fill the input field initially.

Here's an example of how it works:

let userName = prompt("What is your name?", "Guest");
In this example, the prompt() method displays a dialog box with the message What is your name? and an input field that initially contains the value Guest.

If the user types their name and presses "OK", the userName variable will store the entered value. If the user presses "Cancel," the userName variable will be set to null. null signifies that the user did not provide any input.

When the page first loads, you'll see the prompt dialog box appear with the message What is your name? and the input field pre-filled with Guest.

Keep in mind that the prompt() method will halt the execution of the script until the user interacts with the dialog box.

This means the rest of your JavaScript code won’t run until the user either provides input and clicks "OK", or cancels the prompt.

One other point to consider is that while prompt() is useful for quick testing or small applications, it's generally avoided in modern, complex web applications due to its disruptive nature and inconsistent behavior across different browsers.

Here's an example:

let age = prompt("How old are you?");
if (age !== null) {
  console.log("You are " + age + " years old.");
} else {
  console.log("User canceled the prompt.");
}
In this example, if the user provides input, it will be displayed in the console. If they cancel, the console will log that the user canceled the prompt.

By understanding the prompt() method, you gain a simple way to interact with users and retrieve information directly through the browser, even though it may not be widely used in modern web applications.

