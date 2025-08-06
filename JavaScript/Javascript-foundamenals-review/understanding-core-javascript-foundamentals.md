<!-- @format -->

In these lecture videos, you will learn more about the core JavaScript fundamentals. You will learn how a string object differs from a primitive string, the toString() method, conventions and common practices for naming variables, linters and formatters, closures, and much more.

lesson 1
What is a string object, and how does it differ from a string primitive in JavaScript?

In previous modules you have been used to working with strings literals like this:

const greeting = "Hello, World!";
But JavaScript also has string objects. Both string objects and string primitives are used to handle text but they function differently under the hood. A string object is created using the string constructor function, which wraps the primitive value in an object. Here is how you would create a string object:

const greetingObject = new String("Hello, World!");

console.log(typeof greetingObject); // "object"
When we use the typeof operator we can see that the result is of type object instead of type string. One of the things that you might have been wondering about is how you can use properties like the .length property on string primitives.

When you use the length property on a string primitive, JavaScript temporarily wraps the string primitive in a string object, to perform the operation. This is why you can use the length property and the different methods like repeat(), concat(), and slice(). These types of methods and properties are referred to as instance methods also properties and static methods. You will learn about how that works in detail in future modules.

One key difference between a string object and a string primitive is how it relates to memory and performance. String primitives are usually more memory efficient and faster compared to string objects. Although you will primarily work with string primitives in your code, it's still useful to understand how string objects work.

Lesson 2
What is the toString() method and how does it work?

The toString() method is a fundamental feature in JavaScript that converts a value to its string representation. It's a method you can use for numbers, booleans, arrays, and objects. One of the most common uses of toString() is to convert a number to its string representation. Here's an example:

const num = 10;
console.log(num.toString()); // "10"
This method accepts an optional radix which is a number from 2 to 36. This radix represents the base, such as base 2 for binary or base 8 for octal. If the radix is not specified it defaults to base 10, which is decimal. Here's an example of passing 2 as an argument to the toString() method:

const num = 10;
console.log(num.toString(2)); // "1010"
The result will be 1010 which is the binary representation for the decimal number 10.

You can also use the toString() method to convert arrays and objects to strings. Arrays have a custom implementation of toString() that converts each element to a string and joins them with commas. Here's an example:

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
In this example all the elements of the array are joined together to form the string 1,2,3.

When toString() method is used with objects, the result will not be a stringified version of the object properties.

const person = {
name: "John",
age: 30,
isStudent: true
},

console.log(person.toString()); // "[object Object]"
In this example, the result will be the default string representation for the object which is [object Object]. To get a stringified version of the person object properties you'll need to use JSON.stringify() which you will learn about more in the future lecture videos.

In conclusion, the toString() method is used for converting values to strings. Understanding how it works with different data types and how to customize it for your own objects can greatly advance your ability to manipulate and display data in your JavaScript applications.

Lesson 3

What Is the Number Constructor, and How Does It Work for Type Coercion?

The Number() constructor is used to create a number object. The number object contains a few helpful properties and methods like the isNaN and the toFix method. Here's an example using the Number() constructor with the new keyword:

const myNum = new Number("34");
console.log(typeof myNum); // "object"
In this example we pass in a string literal to the Number() constructor and the return type is of type object instead of a string.

When the Number() constructor is called as a function without the new keyword, then the return value will be the primitive number type. Most of the time you will be using the Number() constructor to convert other data types to the number data type. Here's an example of converting a string to a number:

const myNum = Number("100");
console.log(myNum); // 100

console.log(typeof myNum); // number
This is helpful when you are getting input from the user and you need to convert that string input to a number so you can perform mathematical calculations.

If you try to call the Number() constructor through an empty string then the result will be the number 0:

const num = Number("");
console.log(num); // 0
This is because JavaScript will try to parse the string and since it doesn't contain any digits, the result will be zero.

If you try to pass in a string with random characters then the result will be NaN or "Not a Number".

const num = Number("random");
console.log(num); // NaN
When working with booleans, true returns 1 because true gets converted to one and false returns 0 because false is converted to zero.

const boolTrue = Number(true);
const boolFalse = Number(false);

console.log(boolTrue); // 1
console.log(boolFalse); // 0
If you pass in null, the result will be 0 and if you pass undefined, the result will be NaN.

const undefinedNum = Number(undefined);
const nullNum = Number(null);

console.log(undefinedNum); // NaN
console.log(nullNum); // 0
When working with arrays there are a few things to consider.

An empty array will return 0. An array with a single number will return that number. An array with multiple numbers returns NaN. And an array with string(s) will also return NaN.

const emptyArr = Number([]);
const arrOneNum = Number([7]);
const arrMultiNum = Number([7, 36, 12]);
const arrStr = Number(["str1"]);
const arrMultiStr = Number(["str1", "str2"]);

console.log(emptyArr); // 0
console.log(arrOneNum); // 7
console.log(arrMultiNum); // NaN
console.log(arrStr); // NaN
console.log(arrMultiStr); // NaN
When working with objects, the result is always NaN.

const obj1 = Number({});
const obj2 = Number({2: 2});
const obj3 = Number({key: "val"});
const obj4 = Number({key: true});

console.log(obj1); // NaN
console.log(obj2); // NaN
console.log(obj3); // NaN
console.log(obj4); // NaN
In conclusion, you'll mostly use the Number() constructor for type conversion more than creating a number or a number object.
