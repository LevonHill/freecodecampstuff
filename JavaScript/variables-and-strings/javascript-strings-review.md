String Basics

Definition: A string is a sequence of characters wrapped in either single quotes, double quotes or backticks. Strings are primitive data types and they are immutable. Immutability means that once a string is created, is cannot be changed.
Accessing Characters from a String: To access a character from a string you can use bracket notation and pass in the index number. An index is the position of a character within a string, and it is zero-based.
const developer = "Jessica";
developer[0] // J
\n (Newline Character): You can create a newline in a string by using the \n newline character.
const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
Escaping Strings: You can escape characters in a string by placing backlashes (\) in front of the quotes.
const statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
Template Literals (Template Strings) and String Interpolation
Definition: Template literals are defined with backticks (`). They allow for easier string manipulation, including embedding variables directly inside a string, a feature known as string interpolation.
const name = "Jessica";
const greeting = `Hello, ${name}!`; // "Hello, Jessica!"
ASCII, the charCodeAt() Method and the fromCharCode() Method
ASCII: ASCII, short for American Standard Code for Information Interchange, is a character encoding standard used in computers to represent text. It assigns a numeric value to each character, which is universally recognized by machines.
The charCodeAt() Method: This method is called on a string and returns the ASCII code of the character at a specified index.
const letter = "A";
console.log(letter.charCodeAt(0));  // 65
The fromCharCode() Method: This method converts an ASCII code into its corresponding character.
const char = String.fromCharCode(65);
console.log(char);  // A
Other Common String Methods
The indexOf Method: This method is used to search for a substring within a string. If the substring is found, indexOf returns the index (or position) of the first occurrence of that substring. If the substring is not found, indexOf returns -1, which indicates that the search was unsuccessful.
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1
The includes() Method: This method is used to check if a string contains a specific substring. If the substring is found within the string, the method returns true. Otherwise, it returns false.
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false
The slice() Method: This method extracts a portion of a string and returns a new string, without modifying the original string. It takes two parameters: the starting index and the optional ending index.
const text = "freeCodeCamp";
console.log(text.slice(0, 4));  // "free"
console.log(text.slice(4, 8));  // "Code"
console.log(text.slice(8, 12)); // "Camp"
The toUpperCase() Method: This method converts all the characters to uppercase letters and returns a new string with all uppercase characters.
const text = "Hello, world!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"
The toLowerCase() Method: This method converts all characters in a string to lowercase.
const text = "HELLO, WORLD!"
console.log(text.toLowerCase()); // "hello, world!"
The replace() Method: This method is used to find a specified value (like a word or character) in a string and replace it with another value.
const text = "I like cats";
console.log(text.replace("cats", "dogs")); // "I like dogs"
The repeat() Method: This method is used to repeat a string a specified number of times.
const text = "Hello";
console.log(text.repeat(3)); // "HelloHelloHello"
The trim() Method: This method is used to remove whitespaces from both the beginning and the end of a string.
const text = "  Hello, world!  ";
console.log(text.trim()); // "Hello, world!"
The trimStart() Method: This method removes whitespaces from the beginning (or "start") of the string.
const text = "  Hello, world!  ";
console.log(text.trimStart()); // "Hello, world!  "
The trimEnd() Method: This method removes whitespaces from the end of the string.
const text = " Hello, world! ";
console.log(text.trimEnd()); // "  Hello, world!"
The prompt() Method: This method of the window is used to get information from a user through the form of a dialog box. This method takes two arguments. The first argument is the message which will appear inside the dialog box, typically prompting the user to enter information. The second one is a default value which is optional and will fill the input field initially.
const answer = window.prompt("What's your favorite animal?");