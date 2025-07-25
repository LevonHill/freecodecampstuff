<!-- @format -->

In these lecture videos, you will learn about numbers and common number methods. These include isNaN(), parseInt(), parseFloat(), and toFixed().

Lesson 1
What is NaN, and how does isNaN work?

In JavaScript, NaN stands for "Not a Number". It's a special value that represents an unrepresentable or undefined numerical result. NaN is a property of the global object, and it's also considered a type of number in JavaScript, which might seem counterintuitive at first.

NaN is typically the result of operations that should return a number but can't produce a meaningful numerical value. For example:

Example Code
let result = 0 / 0;
console.log(result); // Output: NaN
In this case, dividing zero by zero is mathematically undefined, so JavaScript returns NaN. One peculiar property of NaN is that it's not equal to anything, including itself:

Example Code
console.log(NaN === NaN); // Output: false
This unique behavior makes it challenging to check if a value is NaN using standard comparison operators. To address this, JavaScript provides the isNaN() function. The isNaN() function property is used to determine whether a value is NaN or not. However, it's important to understand how isNaN() works, as it can sometimes produce unexpected results. Here's how isNaN() behaves:

Example Code
console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true

console.log(isNaN(true)); // false
console.log(isNaN(null)); // false
console.log(isNaN(37)); // false

console.log(isNaN("37")); // false: "37" is converted to 37
console.log(isNaN("37.37")); // false: "37.37" is converted to 37.37
console.log(isNaN("")); // false: empty string is converted to 0
console.log(isNaN(" ")); // false: string with a space is converted to 0

console.log(isNaN("blabla")); // true: "blabla" is not a number
As you can see, isNaN() first attempts to convert the parameter to a number. If it can't be converted, it returns true. This behavior can lead to some surprising results, especially when dealing with strings that can be coerced into numbers.

Due to these potential inconsistencies, ES6 introduced Number.isNaN(). This method does not attempt to convert the parameter to a number before testing. It only returns true if the value is exactly NaN:

Example Code
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0)); // true

console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({})); // false
console.log(Number.isNaN("blabla")); // false
Number.isNaN() provides a more reliable way to check for NaN values, especially in cases where type coercion might lead to unexpected results with the global isNaN() function. In practice, when dealing with numerical operations or user inputs that should be numbers, it's often necessary to check for NaN to handle errors or unexpected inputs gracefully. For example:

Example Code
function divide(a, b) {
let result = a / b;
if (Number.isNaN(result)) {
return "Error: Division resulted in NaN";
}
return result;
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Infinity
console.log(divide(0, 0)); // "Error: Division resulted in NaN"
In this example, we're using Number.isNaN() to catch cases where the division operation results in NaN, allowing us to handle this scenario appropriately. Understanding NaN and how to properly check for it is crucial for writing robust JavaScript code, especially when dealing with mathematical operations or parsing user inputs.

Lesson 2
How do the parseFloat() and parseInt() methods work?

parseFloat() and parseInt() are two essential methods in JavaScript for converting strings to numbers. These methods are particularly useful when dealing with user input or processing data that comes in string format but needs to be treated as numerical values.

Let's start with parseFloat(). This method parses a string argument and returns a floating-point number. It's designed to extract a number from the beginning of a string, even if the string contains non-numeric characters later on. Remember that floats are numbers with decimal points. Here's how parseFloat() works:

Example Code
console.log(parseFloat("3.14")); // Output: 3.14
console.log(parseFloat("3.14 abc")); // Output: 3.14
console.log(parseFloat("3.14.5")); // Output: 3.14
console.log(parseFloat("abc 3.14")); // Output: NaN
As you can see, parseFloat() starts parsing from the beginning of the string and continues until it encounters a character that can't be part of a floating-point number. If it can't find a valid number at the start of the string, it returns NaN (Not a Number).

parseInt(), on the other hand, parses a string argument and returns an integer. Like parseFloat(), it starts from the beginning of the string, but it stops at the first non-digit character. Here's how parseInt() works:

Example Code
console.log(parseInt("42")); // Output: 42
console.log(parseInt("42px")); // Output: 42
console.log(parseInt("3.14")); // Output: 3
console.log(parseInt("abc123")); // Output: NaN
parseInt() stops parsing at the first non-digit it encounters. For floating-point numbers, it returns only the integer part. If it can't find a valid integer at the start of the string, it returns NaN.

Both methods have some noteworthy behaviors. They ignore leading whitespace:

Example Code
console.log(parseFloat(" 3.14")); // Output: 3.14
console.log(parseInt(" 42")); // Output: 42
They handle plus and minus signs at the beginning of the string:

Example Code
console.log(parseFloat("+3.14")); // Output: 3.14
console.log(parseInt("-42")); // Output: -42
It's worth noting that while these methods are powerful, they have some limitations. For instance, they don't handle all number formats, such as scientific notation, directly. For more complex parsing needs, you might need to use additional techniques or libraries.

In conclusion, parseFloat() and parseInt() are valuable tools for converting strings to numbers in JavaScript. Understanding how they work and their specific behaviors allows you to handle numeric data more effectively in your applications, especially when dealing with user inputs or external data sources.

lesson 3
What is the .toFixed() method, and how does it work?

The .toFixed() method is a built-in JavaScript function that formats a number using fixed-point notation. It's particularly useful when you need to control the number of decimal places in a number, especially for displaying currency values or when working with precise measurements.

The .toFixed() method is called on a number and takes one optional argument, which is the number of digits to appear after the decimal point. It returns a string representation of the number with the specified number of decimal places. Here's a basic example of how .toFixed() works:

Example Code
let num = 3.14159;
console.log(num.toFixed(2)); // Output: "3.14"
In this case, we're limiting the number of decimal places to two. So, 3.14159 becomes 3.14. It's important to note that .toFixed() returns a string, not a number. This is because the method is primarily intended for formatting numbers for display, not for further calculations.

The .toFixed() method rounds the number to the nearest value that can be represented with the specified number of decimal places. This rounding behavior is important to understand:

Example Code
console.log((3.14159).toFixed(3)); // Output: "3.142"
console.log((3.14449).toFixed(3)); // Output: "3.144"
console.log((3.14550).toFixed(3)); // Output: "3.146"
As you can see, .toFixed() rounds up when the next digit is 5 or greater, and rounds down otherwise. If you call .toFixed() without arguments, it defaults to 0 decimal places:

Example Code
let num = 3.14159;
console.log(num.toFixed()); // Output: "3"
The .toFixed() method can be particularly useful when working with financial calculations or displaying prices:

Example Code
let price = 19.99;
let taxRate = 0.08;
let total = price + (price \* taxRate);

console.log("Total: $" + total.toFixed(2)); // Output: "Total: $21.59"
In this example, .toFixed(2) ensures that the total is always displayed with two decimal places, which is standard for currency in many countries.

In conclusion, the .toFixed() method is a powerful tool for formatting numbers in JavaScript, particularly when you need to control the display of decimal places. While it's primarily used for formatting output, remember its behavior, especially when precise calculations are needed.
