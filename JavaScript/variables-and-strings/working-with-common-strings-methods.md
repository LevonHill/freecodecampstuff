Lesson 1

What is ASCII and how does it work with charCodeAt() and fromCharCode()?

In programming, understanding how characters are represented as numbers is fundamental. This is where ASCII comes in. ASCII, short for American Standard Code for Information Interchange, is a character encoding standard used in computers to represent text. It assigns a numeric value to each character, which is universally recognized by machines.

In this lecture, we will explore what ASCII is, how it works, and how you can use JavaScript methods like charCodeAt() and fromCharCode() to interact with ASCII values.

ASCII is a system for encoding characters such as letters, digits, and symbols into numerical values. Each character is mapped to a specific number.

For example, the capital letter A is represented by the number 65 in ASCII, while the lowercase a is represented by 97. This encoding allows computers to store and manipulate text.

The ASCII standard covers 128 characters including:

Uppercase and lowercase English letters (A-Z, a-z).
Numbers (0-9).
Common punctuation marks and symbols (!, @, #, and so on).
Control characters (such as newline and tab).
In JavaScript, you can easily access the ASCII code of a character using the charCodeAt() method. This method is called on a string and returns the ASCII code of the character at a specified index.

Let’s take a look at an example:

let letter = "A";
console.log(letter.charCodeAt(0));  // Output: 65
In this example, A is the first character of the string, and calling charCodeAt(0) returns its ASCII value, 65.

You can also use this method with other characters to find their ASCII values:

let symbol = "!";
console.log(symbol.charCodeAt(0));  // Output: 33
Here, the ASCII code for the exclamation mark ! is returned as 33.

While charCodeAt() helps you retrieve the ASCII value of a character, the fromCharCode() method allows you to do the opposite: convert an ASCII code into its corresponding character.

Let's see this in action:

let char = String.fromCharCode(65);
console.log(char);  // Output: A
In this example, fromCharCode(65) converts the ASCII value 65 back to the character A.

Another example would be converting the number 97 to its corresponding lowercase letter:

let char = String.fromCharCode(97);
console.log(char);  // Output: a
These methods are particularly useful when you need to manipulate or compare characters based on their ASCII values.

For instance, you might use charCodeAt() to check if a character is uppercase, lowercase, or a digit by comparing its ASCII value.

On the other hand, fromCharCode() can be used to dynamically generate characters from their ASCII codes.

Lesson 2
How can you test if a string contains a specific substring in JavaScript?

When working with strings in JavaScript, there are many cases where you might need to check whether a string contains a specific substring, which is a smaller part of that string.

For example, you might want to check if a user's input includes a specific word or character before performing some action. One way to achieve this is by using the includes() method.

The includes() method is used to check if a string contains a specific substring. If the substring is found within the string, the method returns true otherwise, it returns false.

Here's the basic syntax:

string.includes(searchValue);
For the syntax, the searchValue is the substring you want to look for within the string. And here's an example:

let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true
In this example, the word awesome is found within the string JavaScript is awesome!, so the includes() method returns true.

It's important to note that the includes() method is case-sensitive. This means that the exact match of the characters is required, including their case.

For example:

let phrase = "JavaScript is awesome!";
let result = phrase.includes("Awesome");

console.log(result);  // Output: false
Since Awesome (with an uppercase A) does not match awesome (with a lowercase a), the result is false.

You can also use the includes() method to check for a substring starting at a specific index in the string by providing a second parameter:

let text = "Hello, JavaScript world!";
let result = text.includes("JavaScript", 7);

console.log(result);  // true
Here, the search for the substring JavaScript starts from the 7th position in the string, ensuring it skips any characters before this position.

The includes() method only returns a true or false result. It does not provide information on where the substring is located in the string or how many times it occurs. If you need that level of detail, other methods, such as the indexOf() method might be more suitable.

Lesson 3
How can you extract a substring from a string?

When working with strings in JavaScript, you often need to extract a portion or substring from a larger string.

For example, you may want to extract part of a word, a specific character sequence, or just a fragment of a sentence.

JavaScript provides several methods for this task, one of the most commonly used being the slice() method.

The slice() method allows you to extract a portion of a string and returns a new string, without modifying the original string. It takes two parameters: the starting index and the optional ending index.

Here's the basic syntax:

string.slice(startIndex, endIndex);
startIndex is the position where the extraction starts. endIndex is where the extraction ends. If not provided, slice() extracts until the end of the string.

Let's look at a simple example of extracting part of a string:

let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);  // Output: Hello
In this example, slice(0, 5) extracts characters starting from index 0 up to but not including index 5. As a result, the word Hello is extracted.

If you omit the second parameter, slice() will extract everything from the start index to the end of the string:

let message = "Hello, world!";
let world = message.slice(7);

console.log(world);  // Output: world!
Here, slice(7) extracts the string from index 7 to the end of the string, resulting in world!.

You can also use negative numbers as indexes. When you use a negative number, it counts backward from the end of the string:

let message = "JavaScript is fun!";
let lastWord = message.slice(-4);

console.log(lastWord);  // Output: fun!
In this case, slice(-4) extracts the last four characters from the string, giving us fun!.

Let's say you want to extract a section from the middle of a string. You can provide both the starting and ending indexes to precisely control which part of the string you want:

let message = "I love JavaScript!";
let language = message.slice(7, 17);

console.log(language);  // Output: JavaScript
Here, slice(7, 17) extracts the substring starting at index 7 and ending right before index 17, which is the word JavaScript.

The slice() method is a powerful tool for extracting parts of a string in JavaScript.

You specify the start and end indexes, and the method returns a new string that contains the extracted portion.

With options for positive, negative, and omitted indexes, you can adapt it to various situations without altering the original string.

Lesson 4
How can you change the casing for a string?

When working with strings in JavaScript, there are many situations where you might need to adjust the case of the text, such as transforming all letters to uppercase for a heading or converting text to lowercase for uniformity.

Luckily, JavaScript makes this easy with two built-in methods: toUpperCase() and toLowerCase().

The toUpperCase() method converts all the characters to uppercase letters and returns a new string with all uppercase characters. This is useful when you want to emphasize text or create consistency in the format of strings.

Let's see an example:

let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);  // Output: "HELLO, WORLD!"
In this code, the toUpperCase() method transforms the entire string into uppercase letters.

The original string remains unchanged because toUpperCase() returns a new string, rather than modifying the original one.

On the flip side, the toLowerCase() method converts all characters in a string to lowercase. This is helpful when you need to standardize input, such as when comparing user-provided text or making case-insensitive checks.

Let's look at an example:

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // Output: "i am learning javascript!"
The toLowerCase() method converts all characters to lowercase, making the string less aggressive, while leaving the original string unchanged.

In summary, the toUpperCase() and toLowerCase() methods in JavaScript are powerful tools for transforming strings into all uppercase or lowercase letters.

These methods are particularly useful for standardizing text input, making case-insensitive comparisons, and ensuring design consistency.

With these simple yet effective methods, you can handle text manipulation in a more controlled and predictable way.

Lesson 5
How can you replace parts of a string with another?

In JavaScript, there are many scenarios where you may need to replace a portion of a string with another string.

For instance, you might need to update user information in a URL, change the formatting of dates, or correct errors in user-generated content.

The replace() method in JavaScript allows you to find a specified value (like a word or character) in a string and replace it with another value.

Here is the basic syntax:

string.replace(searchValue, newValue);
searchValue is the value you want to search for in the string. It can be either a string or a regular expression (regex), which describes patterns in text. This allows you to search for and manipulate strings in a flexible and powerful way. You'll learn more about regular expressions in future lecture videos.

The newValue is the value that will replace the searchValue. Here's a simple example:

let text = "I love JavaScript!";
let newText = text.replace("JavaScript", "coding");

console.log(newText);  // Output: "I love coding!"
In this example, the word JavaScript is found within the string and is replaced with coding.

The replace() method is case-sensitive, meaning that it will only find exact matches of the searchValue. For example:

let sentence = "I enjoy working with JavaScript.";
let updatedSentence = sentence.replace("javascript", "coding");

console.log(updatedSentence);  // Output: "I enjoy working with JavaScript."
Here, since javascript (with lowercase j) does not match JavaScript (with uppercase J), the replacement is not made.

By default, the replace() method will only replace the first occurrence of the searchValue. If the value appears multiple times in the string, only the first one will be replaced:

let phrase = "Hello, world! Welcome to the world of coding.";
let updatedPhrase = phrase.replace("world", "universe");

console.log(updatedPhrase);  // Output: "Hello, universe! Welcome to the world of coding."
Notice that only the first occurrence of world is replaced with universe.

The replace() method in JavaScript is a powerful and flexible tool for string manipulation.

It lets you replace specific parts of a string, whether you're dealing with individual characters, words, or complex patterns using regular expressions.

While it's ideal for straightforward replacements, understanding its case sensitivity and default behavior (like replacing only the first occurrence) can help you use it more effectively.

Lesson 6
How can you repeat a string a x number of times?

When working with JavaScript, you may encounter situations where you need to repeat a string a specific number of times.

Whether you're generating repeated patterns or simply duplicating text, the repeat() method provides a simple and effective way to achieve this.

The repeat() method is a built-in function in JavaScript that allows you to repeat a string a specified number of times. Here is the basic syntax:

string.repeat(count);
string is the string that you want to repeat, and count is the number of times you want the string to be repeated. Here's an example:

let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // Output: "Hello!Hello!Hello!"
In this case, the string Hello! is repeated three times, resulting in Hello!Hello!Hello!.

While the repeat() method is useful, there are a few exceptions and limitations to keep in mind.

The count parameter must be a non-negative number. If you pass a negative number, JavaScript will throw a RangeError.

let word = "Test";
console.log(word.repeat(-1));  // Throws RangeError: Invalid count value
The count must be a finite number. If you try to repeat a string an infinite number of times or use Infinity as the count, you will also get a RangeError.

In JavaScript, Infinity is a special value that represents an infinite quantity. It's used to denote numbers that are larger than any finite number.

let word = "Test";
console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value
If the count is not an integer (such as a decimal like 2.5), the repeat() method will round it down to the nearest integer.

let word = "Test";
console.log(word.repeat(2.5));  // Output: "TestTest"
If you pass 0 as the count, the repeat() method will return an empty string.

let word = "Test";
console.log(word.repeat(0));  // Output: ""
The repeat() method can simplify tasks that involve string duplication, making your code more concise and readable.

Whether you're generating repeated text patterns or filling a space with characters, repeat() can save you from writing loops or more complex code.

Lesson 7
How can you trim whitespace from a string?

When working with strings in JavaScript, it's common to encounter unwanted whitespace at the beginning or end of a string. Whitespace can interfere with operations like comparison, storage, or display, which is why it's important to know how to remove it efficiently.

In this lecture, we'll explore how you can trim whitespace using JavaScript's trim(), trimStart(), and trimEnd() methods.

Whitespace refers to spaces, tabs, or line breaks that occur in a string but are not visible characters. For example:

let greeting = "   Hello, world!   ";
In this case, there are spaces before and after the visible text, Hello, world!.

The trim() method is the most commonly used way to remove whitespace from both the beginning and the end of a string. Here's an example:

let message = "   Hello!   ";
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // Output: "Hello!"
In this case, the trim() method removes all the leading and trailing spaces, leaving just Hello!. Note that any whitespace within the string (between words, for example) is left untouched by trim().

Sometimes, you may only want to remove whitespace from either the beginning or the end of a string, but not both. This is where trimStart() and trimEnd() come in.

trimStart() removes whitespace from the beginning (or start) of the string.

let greeting = "   Hello!   ";
let trimmedStart = greeting.trimStart();

console.log(trimmedStart);  // Output: "Hello!   "
trimEnd() removes whitespace from the end of the string.

let greeting = "   Hello!   ";
let trimmedEnd = greeting.trimEnd();

console.log(trimmedEnd);  // Output: "   Hello!"
These methods give you more precise control over which part of the string you want to clean up.

In summary, trimming whitespace is an essential part of working with strings in JavaScript. Whether you want to clean up input data or ensure consistent string comparisons, you can use trim() to remove whitespace from both sides of a string, or use trimStart() and trimEnd() to target specific sides.

